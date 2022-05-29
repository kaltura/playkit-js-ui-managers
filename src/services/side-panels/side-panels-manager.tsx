import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { ui, KalturaPlayer, Logger, PlaykitUI } from 'kaltura-player-js';
import { SidePanelItemDto, SidePanelItem, PanelComponentProps } from './models/side-panel-item-dto';
import { PanelItemWrapper } from './ui/panel-item-wrapper/panel-item-wrapper.component';
import { IconWrapper } from './ui/icon-wrapper/icon-wrapper.component';
import { ItemWrapper } from './models/item-wrapper';
const { SidePanelModes, SidePanelPositions, ReservedPresetNames, ReservedPresetAreas } = ui;

const OPPOSITE_PANELS: Record<PlaykitUI.SidePanelPosition, PlaykitUI.SidePanelPosition> = {
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

  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.activePanels = { top: null, bottom: null, right: null, left: null };
    this.componentsRegistry = new Map<number, ItemWrapper>();
    this.logger = logger;
  }

  addItem(item: SidePanelItemDto): number | void {
    if (SidePanelsManager.validateItem(item)) {
      const newPanelItem: SidePanelItem = new SidePanelItem(item);
      const { componentRef, removeComponentFn } = this.injectPanelComponent(newPanelItem);
      const currentPanelItemId = ItemWrapper.peekNextId();
      let newItemWrapper: ItemWrapper;
      if (item.iconComponent) {
        const { iconComponentRef, removeIconComponentFn } = this.injectIconComponent(newPanelItem, currentPanelItemId);
        newItemWrapper = new ItemWrapper(newPanelItem, componentRef, removeComponentFn, iconComponentRef, removeIconComponentFn);
      } else {
        newItemWrapper = new ItemWrapper(newPanelItem, componentRef, removeComponentFn);
      }
      this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
      this.logger.debug('New Panel Item Added', item);
      return newItemWrapper.id;
    }
    this.logger.warn('Invalid SidePanelItem parameters', item);
  }

  removeItem(itemId: number): void {
    const item: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      if (this.isItemActive(itemId)) this.deactivateItem(itemId);
      item.removePanelComponentFn();
      item.removeIconComponentFn();
      this.componentsRegistry.delete(itemId);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  activateItem(itemId: number): void {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      const { position, expandMode } = itemMetadata.item;
      // Trying to activate an already active item
      if (this.isItemActive(itemId)) return;
      // Switch between items if currently there is an active one (without collapsing / expanding PS)
      let switchMode = false;
      if (this.activePanels[position] !== null) {
        switchMode = true;
        this.deactivateItem(this.activePanels[position]!.id, switchMode);
      }
      // Deactivate the opposite panel if is active
      const oppositePosition: PlaykitUI.SidePanelPosition = SidePanelsManager.getOppositePanelPosition(position);
      if (this.activePanels[oppositePosition]) {
        this.deactivateItem(this.activePanels[oppositePosition]!.id);
      }
      // Update new item as active
      itemMetadata.panelItemComponentRef.current!.toggle(switchMode);
      itemMetadata.iconComponentRef?.current!.toggle();
      this.expand(position, expandMode);
      this.activePanels[position] = itemMetadata;
      itemMetadata.item.onActivate?.();
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  deactivateItem(itemId: number, switchMode?: boolean): void {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      if (!this.isItemActive(itemId)) return;
      const { position } = itemMetadata.item;
      itemMetadata.panelItemComponentRef.current!.toggle(switchMode);
      itemMetadata.iconComponentRef?.current!.toggle();
      this.collapse(position);
      this.activePanels[position] = null;
      itemMetadata.item.onDeactivate?.();
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  isItemActive(itemId: number): boolean {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      return this.activePanels[itemMetadata.item.position]?.id === itemId;
    }
    this.logger.warn(`${itemId} is not registered`);
    return false;
  }

  update(itemId: number): void {
    const itemMetadata: ItemWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemMetadata) {
      itemMetadata.panelItemComponentRef.current!.update();
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  reset(): void {
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

  private injectIconComponent(
    panelItemData: SidePanelItem,
    panelItemId: number
  ): {
    iconComponentRef: RefObject<IconWrapper>;
    removeIconComponentFn: () => void;
  } {
    const { presets, label, iconComponent } = panelItemData;
    const IconComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps> = iconComponent!;
    const iconComponentRef: RefObject<IconWrapper> = createRef();
    const togglePanelFunc: () => void = (): void => this.toggle(panelItemId);
    const removeIconComponentFn = this.player.ui.addComponent({
      label: `Side-Panel-Icon-${label}`,
      presets,
      area: ReservedPresetAreas.TopBarRightControls,
      get: function MyComponent() {
        return (
          <IconWrapper ref={iconComponentRef} onClick={togglePanelFunc}>
            <IconComponent isActive={false} />
          </IconWrapper>
        );
      }
    });
    return { iconComponentRef, removeIconComponentFn };
  }

  private injectPanelComponent(item: SidePanelItemDto): {
    componentRef: RefObject<PanelItemWrapper>;
    removeComponentFn: () => void;
  } {
    const { label, position, panelComponent, presets } = item;
    const SidePanelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps> = panelComponent;
    const componentRef: RefObject<PanelItemWrapper> = createRef();
    const removeComponentFn = this.player.ui.addComponent({
      label: `Side-panel-${position}-${label}`,
      presets,
      area: SidePanelsManager.getPanelArea(position),
      get: () => {
        return (
          <PanelItemWrapper ref={componentRef}>
            <SidePanelComponent isActive={false} />
          </PanelItemWrapper>
        );
      }
    });
    return { componentRef, removeComponentFn };
  }

  private static getPanelArea(position: string): string {
    return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
  }

  private static getOppositePanelPosition(position: PlaykitUI.SidePanelPosition): PlaykitUI.SidePanelPosition {
    return OPPOSITE_PANELS[position];
  }

  private static validateItem(item: SidePanelItemDto): boolean {
    const { label, panelComponent, iconComponent, position, expandMode, onActivate, onDeactivate, presets } = item;
    return !!(
      label &&
      Object.values(SidePanelPositions).includes(position) &&
      Object.values(SidePanelModes).includes(expandMode) &&
      presets.every((preset) => Object.values(ReservedPresetNames).includes(preset)) &&
      typeof panelComponent === 'function' &&
      (typeof iconComponent === 'function' || iconComponent === undefined) &&
      (typeof onActivate === 'function' || onActivate === undefined) &&
      (typeof onDeactivate === 'function' || onDeactivate === undefined)
    );
  }
}
