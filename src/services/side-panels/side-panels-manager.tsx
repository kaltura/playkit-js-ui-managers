import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { ui, KalturaPlayer, Logger, PlaykitUI } from 'kaltura-player-js';
import { SidePanelItemDto, SidePanelItem } from './models/side-panel-item-dto';
import { Toggle } from './ui/toggel';
import { ItemWrapper } from './models/item-wrapper';
const { SidePanelModes, SidePanelPositions, ReservedPresetNames, ReservedPresetAreas } = ui;

const OPPOSITE_PANELS: Record<PlaykitUI.SidePanelPosition, PlaykitUI.SidePanelPosition> = {
  [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
  [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
  [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
  [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT,
} as Record<PlaykitUI.SidePanelPosition, PlaykitUI.SidePanelPosition>;

export class SidePanelsManager {
  private readonly player: KalturaPlayer;
  private readonly activePanels: Record<PlaykitUI.SidePanelPosition, ItemWrapper | null>;
  private readonly componentsRegistry: Map<number, ItemWrapper>;
  private readonly logger: Logger;

  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.activePanels = { top: null, bottom: null, right: null, left: null };
    this.componentsRegistry = new Map<number, ItemWrapper>();
    this.logger = logger;
  }

  public addItem(item: SidePanelItemDto): number | void {
    if (SidePanelsManager.validateItem(item)) {
      const newPanelItem: SidePanelItem = new SidePanelItem(item);
      const { componentRef, removeComponentFunc } = this.injectPanelComponent(newPanelItem);
      const newItemWrapper: ItemWrapper = new ItemWrapper(newPanelItem, componentRef, removeComponentFunc);
      if (item.renderIcon) {
        newItemWrapper.removeIconComponentFunc = this.injectIconComponent(newItemWrapper);
      }
      this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
      this.logger.debug('New Panel Item Added', item);
      return newItemWrapper.id;
    }
    this.logger.warn('Invalid SidePanelItem parameters', item);
  }

  public removeItem(itemId: number): void {
    const item: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      if (this.isItemActive(itemId)) this.deactivateItem(itemId);
      item.removePanelComponentFunc();
      item.removeIconComponentFunc();
      this.componentsRegistry.delete(itemId);
    }
  }

  public activateItem(itemId: number): void {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      const { position, expandMode } = itemMetadata.item;
      // Trying to activate an already active item
      if (this.isItemActive(itemId)) return;
      // Switch between items if currently there is an active one (without collapsing / expanding PS)
      if (this.activePanels[position] !== null) {
        this.deactivateItem(this.activePanels[position]!.id);
      }
      // Deactivate the opposite panel if is active
      const oppositePosition: PlaykitUI.SidePanelPosition = SidePanelsManager.getOppositePanelPosition(position);
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
      if (!this.isItemActive(itemId)) return;
      const { position } = itemMetadata.item;
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
    for (const value of this.componentsRegistry.values()) {
      this.removeItem(value.id);
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

  private injectIconComponent(panelItemData: ItemWrapper): () => void {
    const { id, item } = panelItemData;
    const IconComponent: ComponentClass | FunctionalComponent = item.renderIcon!;
    const togglePanelFunc: () => void = () => this.toggle(id);
    return this.player.ui.addComponent({
      label: `Side-Panel-Icon-${item.label}`,
      presets: item.presets,
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

  private injectPanelComponent(item: SidePanelItemDto): {
    componentRef: RefObject<Toggle>;
    removeComponentFunc: () => void;
  } {
    const { label, position, renderContent, presets } = item;
    const SidePanelComponent: ComponentClass | FunctionalComponent = renderContent;
    const componentRef: RefObject<Toggle> = createRef();
    const removeComponentFunc = this.player.ui.addComponent({
      label: `Side-panel-${position}-${label}`,
      presets,
      area: SidePanelsManager.getPanelArea(position),
      get: () => {
        return (
          <Toggle ref={componentRef}>
            <SidePanelComponent />
          </Toggle>
        );
      },
    });

    return { componentRef, removeComponentFunc };
  }

  private static getPanelArea(position: string): string {
    return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
  }

  private static getOppositePanelPosition(position: PlaykitUI.SidePanelPosition): PlaykitUI.SidePanelPosition {
    return OPPOSITE_PANELS[position];
  }

  private static validateItem(item: SidePanelItemDto): boolean {
    const { label, renderContent, renderIcon, position, expandMode, onActivate, onDeactivate, presets } = item;
    return !!(
      label &&
      Object.values(SidePanelPositions).includes(position) &&
      Object.values(SidePanelModes).includes(expandMode) &&
      presets.every((preset) => Object.values(ReservedPresetNames).includes(preset)) &&
      typeof renderContent === 'function' &&
      (typeof renderIcon === 'function' || renderIcon === undefined) &&
      (typeof onActivate === 'function' || onActivate === undefined) &&
      (typeof onDeactivate === 'function' || onDeactivate === undefined)
    );
  }
}
