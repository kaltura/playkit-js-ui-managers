import { ui, KalturaPlayer, Logger, PlaykitUI } from '@playkit-js/kaltura-player-js';
import { SidePanelItem } from './models/side-panel-item';
import { ItemWrapper, DetachWindowOptions } from './models/item-wrapper';
const { SidePanelModes, SidePanelPositions, ReservedPresetNames } = ui;

const COUNTER_PANELS: Record<PlaykitUI.SidePanelPosition, PlaykitUI.SidePanelPosition> = {
  [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
  [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
  [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
  [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT
} as Record<PlaykitUI.SidePanelPosition, PlaykitUI.SidePanelPosition>;

export class SidePanelsManager {
  private readonly player: KalturaPlayer;
  private readonly activePanels: Record<PlaykitUI.SidePanelPosition, ItemWrapper | null>;
  private readonly componentsRegistry: Map<number, ItemWrapper>;
  private readonly logger: Logger;

  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.activePanels = { top: null, bottom: null, right: null, left: null };
    this.componentsRegistry = new Map<number, ItemWrapper>();
    this.logger = logger;
  }

  public add(item: SidePanelItem): number | void {
    if (SidePanelsManager.validateItem(item)) {
      const newItemWrapper: ItemWrapper = new ItemWrapper(item, this.player);
      this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
      this.logger.debug('New Panel Item Added', item);
      return newItemWrapper.id;
    }
    this.logger.error('Invalid SidePanelItem parameters', item);
  }

  public remove(itemId: number): void {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      if (this.isItemActive(itemId)) this.deactivateItem(itemId);
      itemWrapper.remove();
      this.componentsRegistry.delete(itemId);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public activateItem(itemId: number): void {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      const { position, expandMode } = itemWrapper.item;
      // Trying to activate an already active item
      if (this.isItemActive(itemId)) return;
      // Switch between items if currently there is an active one (without collapsing / expanding PS)
      const previousItemWrapper = this.activePanels[position];
      if (previousItemWrapper !== null) {
        previousItemWrapper.deactivate(true);
      }
      // Deactivate the counter panel if is active
      const counterPosition: PlaykitUI.SidePanelPosition = SidePanelsManager.getCounterPanelPosition(position);
      if (this.activePanels[counterPosition]) {
        this.deactivateItem(this.activePanels[counterPosition]!.id);
      }
      // Update new item as active
      itemWrapper.activate();
      this.expand(position, expandMode);
      this.activePanels[position] = itemWrapper;
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public deactivateItem(itemId: number): void {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      if (!this.isItemActive(itemId)) return;
      const { position } = itemWrapper.item;
      itemWrapper.deactivate();
      this.collapse(position);
      this.activePanels[position] = null;
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public isItemActive(itemId: number): boolean {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      return this.activePanels[itemWrapper.item.position]?.id === itemId;
    }
    this.logger.warn(`${itemId} is not registered`);
    return false;
  }

  public isItemDetached(itemId: number): boolean {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      return itemWrapper.isDetached;
    }
    this.logger.warn(`${itemId} is not registered`);
    return false;
  }
  public detachItem(itemId: number, options: DetachWindowOptions): void {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      this.deactivateItem(itemId);
      itemWrapper.detach({
        ...options,
        onAttach: () => this.attachItem(itemId)
      });
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }
  public attachItem(itemId: number): void {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      itemWrapper.attach();
      this.activateItem(itemId);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }
  public getDetachedRef(itemId: number) {
    if (this.isItemDetached(itemId)) {
      const itemWrapper: ItemWrapper = this.componentsRegistry.get(itemId)!;
      return itemWrapper.getDetachedRef();
    }
    return null;
  }

  /**
   * Rerender (uses preact Component.forceUpdate api under the hoods) the side panel item component
   * It's just for backward compatibility you should not use it.
   */
  public update(itemId: number): void {
    const itemWrapper: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      itemWrapper.update();
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  /**
   * @ignore
   */
  public reset(): void {
    this.logger.debug('reset');
  }

  /**
   * @ignore
   */
  public destroy(): void {
    this.logger.debug('destroy');
    this.removeAllItems();
  }

  private removeAllItems(): void {
    for (const value of this.componentsRegistry.values()) {
      this.remove(value.id);
    }
  }

  private toggle(itemId: number): void {
    if (this.isItemActive(itemId)) {
      this.deactivateItem(itemId);
    } else {
      this.activateItem(itemId);
    }
  }

  private expand(position: PlaykitUI.SidePanelPosition, expandMode: PlaykitUI.SidePanelMode): void {
    this.player.ui.store.dispatch(ui.reducers.shell.actions.updateSidePanelMode(position, expandMode));
  }

  private collapse(position: PlaykitUI.SidePanelPosition): void {
    this.player.ui.store.dispatch(ui.reducers.shell.actions.updateSidePanelMode(position, SidePanelModes.HIDDEN));
  }

  private static getCounterPanelPosition(position: PlaykitUI.SidePanelPosition): PlaykitUI.SidePanelPosition {
    return COUNTER_PANELS[position];
  }

  private static validateItem(item: SidePanelItem): boolean {
    const { label, panelComponent, position, expandMode, onActivate, onDeactivate, presets } = item;
    return !!(
      label &&
      Object.values(SidePanelPositions).includes(position) &&
      Object.values(SidePanelModes).includes(expandMode) &&
      presets.every((preset) => Object.values(ReservedPresetNames).includes(preset)) &&
      typeof panelComponent === 'function' &&
      (typeof onActivate === 'function' || onActivate === undefined) &&
      (typeof onDeactivate === 'function' || onDeactivate === undefined)
    );
  }
}
