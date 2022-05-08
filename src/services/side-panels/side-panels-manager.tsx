import {h, createRef, RefObject, FunctionalComponent, ComponentClass} from 'preact';
import {ui, KalturaPlayer, Logger} from 'kaltura-player-js';
import {ISidePanelItemDto, SidePanelItemDto} from './side-panel-item-dto';
import {Toggle} from './ui/side-panel.component';
import {SidePanelPosition} from './types/types';
import {ItemWrapper} from './item-wrapper';

const {SidePanelModes, SidePanelPositions, ReservedPresetNames, ReservedPresetAreas} = ui;

const OPPOSITE_PANELS: Record<SidePanelPosition, SidePanelPosition> = {
  [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
  [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
  [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
  [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT,
} as Record<SidePanelPosition, SidePanelPosition>;

/**
 * Class representing a socket connection.
 *
 * @class
 */
export class SidePanelsManager {
  private readonly player: KalturaPlayer;
  private readonly activePanels: Record<SidePanelPosition, ItemWrapper | null>;
  private readonly componentsRegistry: Map<number, ItemWrapper>;
  private readonly logger: Logger;

  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.activePanels = {top: null, bottom: null, right: null, left: null};
    this.componentsRegistry = new Map<number, ItemWrapper>();
    this.logger = logger;
  }

  public addItem(item: ISidePanelItemDto): number {
    if (SidePanelsManager.validateItem(item)) {
      const newPanelItem: SidePanelItemDto = new SidePanelItemDto(item);
      const {componentRef, removeComponentFunc} = this.injectPanelComponent(item);
      const newItemWrapper: ItemWrapper = new ItemWrapper(newPanelItem, componentRef, removeComponentFunc);
      if (item.renderIcon) this.injectIconComponent(newItemWrapper);
      this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
      this.logger.debug('1234 New Panel Item Added', item);
      return newItemWrapper.id;
    }
    this.logger.warn('invalid SidePanelItem parameters', item);
    throw new Error('invalid SidePanelItem parameters');
  }

  public removeItem(itemId: number): void {
    const item: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      this.deactivateItem(itemId);
      item.removeComponentFunc();
      this.componentsRegistry.delete(itemId);
    }
  }

  public activateItem(itemId: number): void {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      const {position, expandMode} = itemMetadata.item;
      // Trying to activate an already active item
      if (this.isItemActive(itemId)) return;
      // Switch between items if currently there is an active one (without collapsing / expanding PS)
      if (this.activePanels[position] !== null) {
        this.deactivateItem(this.activePanels[position]!.id);
      }
      // Deactivate the opposite panel if is active
      const oppositePosition: SidePanelPosition = SidePanelsManager.getOppositePanelPosition(position);
      if (this.activePanels[oppositePosition]) {
        this.deactivateItem(this.activePanels[oppositePosition]!.id);
      }
      // Update new item as active
      itemMetadata.componentRef.current?.toggle();
      this.expand(position, expandMode);
      this.activePanels[position] = itemMetadata;
      itemMetadata.item.onActivate?.();
    }
  }

  public deactivateItem(itemId: number): void {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      const {position} = itemMetadata.item;
      this.activePanels[position]?.componentRef.current?.toggle();
      this.collapse(position);
      this.activePanels[position] = null;
      itemMetadata.item.onDeactivate?.();
    }
  }

  public isItemActive(itemId: number): boolean {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    return itemMetadata ? this.activePanels[itemMetadata.item.position]?.id === itemId : false;
  }

  public reset(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const value of this.componentsRegistry.values()) {
      this.deactivateItem(value.id);
    }
  }

  private toggle(itemId: number): void {
    if (this.isItemActive(itemId)) {
      this.deactivateItem(itemId);
    } else {
      this.activateItem(itemId);
    }
  }

  private expand(position: SidePanelPosition, expandMode: string): void {
    this.player.ui._uiManager.store.dispatch(ui.reducers.shell.actions.updateSidePanelMode(position, expandMode));
  }

  private collapse(position: string): void {
    this.player.ui._uiManager.store.dispatch(
      ui.reducers.shell.actions.updateSidePanelMode(position, SidePanelModes.HIDDEN)
    );
  }

  private injectIconComponent(panelItemData: ItemWrapper): void {
    const {id, item} = panelItemData;
    const IconComponent: ComponentClass | FunctionalComponent = item.renderIcon!;
    const togglePanelFunc: () => void = () => this.toggle(id);
    this.player.ui.addComponent({
      label: `Side-Panel-Icon-${item.label}`,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: ReservedPresetAreas.TopBarRightControls,
      get: function MyComponent() {
        return (
          <div onClick={togglePanelFunc}>
            <IconComponent />
          </div>
        );
      },
    });
  }

  private injectPanelComponent(item: ISidePanelItemDto): {
    componentRef: RefObject<Toggle>;
    removeComponentFunc: () => void;
  } {
    const {label, position, renderContent} = item;
    const SidePanelComponent: ComponentClass | FunctionalComponent = renderContent;
    const componentRef: RefObject<Toggle> = createRef();
    const removeComponentFunc = this.player.ui.addComponent({
      label: `Side-panel-${position}-${label}`,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: SidePanelsManager.getPanelArea(position),
      get: () => {
        return (
          <Toggle ref={componentRef}>
            <SidePanelComponent />
          </Toggle>
        );
      },
    });

    return {componentRef, removeComponentFunc};
  }

  private static getPanelArea(position: string): string {
    return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
  }

  private static getOppositePanelPosition(position: SidePanelPosition): SidePanelPosition {
    return OPPOSITE_PANELS[position];
  }

  private static validateItem(item: ISidePanelItemDto): boolean {
    const {label, renderContent, renderIcon, position, expandMode, onActivate, onDeactivate} = item;
    return !!(
      label &&
      Object.values(SidePanelPositions).includes(position) &&
      Object.values(SidePanelModes).includes(expandMode) &&
      typeof renderContent === 'function' &&
      (typeof renderIcon === 'function' || renderIcon === undefined) &&
      (typeof onActivate === 'function' || onActivate === undefined) &&
      (typeof onDeactivate === 'function' || onDeactivate === undefined)
    );
  }
}
