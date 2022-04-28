import {h, createRef, RefObject, FunctionalComponent, ComponentClass} from 'preact';
import {ui} from 'kaltura-player-js';
import {SidePanelItemDto} from './side-panel-item-dto';
import {Toggle} from './ui/side-panel.component';
import {SidePanelPosition} from './types/types';
import {ItemMetadata} from './item-metadata';

const {SidePanelModes, SidePanelPositions, ReservedPresetNames, ReservedPresetAreas} = ui;

const OPPOSITE_PANELS: Record<SidePanelPosition, SidePanelPosition> = {
  [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
  [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
  [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
  [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT,
} as Record<SidePanelPosition, SidePanelPosition>;

export class SidePanelsManager {
  private readonly player: any;
  private readonly activePanels: Record<SidePanelPosition, ItemMetadata | null>;
  private readonly componentsRegistry: Map<number, ItemMetadata>;
  private readonly logger: any;

  constructor(player: any, logger: any) {
    this.player = player;
    this.activePanels = {top: null, bottom: null, right: null, left: null};
    this.componentsRegistry = new Map<number, ItemMetadata>();
    this.logger = logger;
  }

  public addItem(item: SidePanelItemDto): number {
    if (SidePanelsManager.validateItem(item)) {
      const newPanelItem: SidePanelItemDto = new SidePanelItemDto(item);
      const {componentRef, removeComponentFunc} = this.injectPanelComponent(item);
      const newItemMetadata: ItemMetadata = new ItemMetadata(newPanelItem, componentRef, removeComponentFunc);
      if (item.renderIcon) this.injectIconComponent(newItemMetadata);
      this.componentsRegistry.set(newItemMetadata.id, newItemMetadata);
      this.logger.debug('1234 New Panel Item Added', item);
      return newItemMetadata.id;
    }
    this.logger.error('invalid SidePanelItem parameters', item);
    throw new Error('invalid SidePanelItem parameters');
  }

  public removeItem(itemId: number): void {
    const item: ItemMetadata | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      this.deactivateItem(itemId);
      item.removeComponentFunc();
      this.componentsRegistry.delete(itemId);
    }
  }

  public activateItem(itemId: number): void {
    const item: ItemMetadata | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      const {position, expandMode} = item.item;
      // Trying to activate an already active item
      if (this.isItemActive(itemId)) return;
      // Switch between items if currently there is an active one (without collapsing / expanding PS)
      if (this.activePanels[position]) {
        this.deactivateItem(this.activePanels[position]!.id);
      }
      // Deactivate the opposite panel if is active
      const oppositePosition: SidePanelPosition = SidePanelsManager.getOppositePanelPosition(position);
      if (this.activePanels[oppositePosition]) {
        this.deactivateItem(this.activePanels[oppositePosition]!.id);
      }
      // Update new item as active
      item.componentRef.current?.toggle();
      this.expand(position, expandMode);
      this.activePanels[position] = item;
      item.item.hooks?.onActivate?.();
    }
  }

  public deactivateItem(itemId: number): void {
    const item: ItemMetadata | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      const {position} = item.item;
      this.activePanels[position]?.componentRef.current?.toggle();
      this.collapse(position);
      this.activePanels[position] = null;
      item.item.hooks?.onDeactivate?.();
    }
  }

  public isItemActive(itemId: number): boolean {
    const item: ItemMetadata | undefined = this.componentsRegistry.get(itemId);
    return item ? this.activePanels[item.item.position]?.id === itemId : false;
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

  private injectIconComponent(panelItemData: ItemMetadata): void {
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

  private injectPanelComponent(item: SidePanelItemDto): {
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

  private static validateItem(item: SidePanelItemDto): boolean {
    const {label, renderContent, renderIcon, position, expandMode, hooks} = item;
    return !!(
      label &&
      Object.values(SidePanelPositions).includes(position) &&
      Object.values(SidePanelModes).includes(expandMode) &&
      typeof renderContent === 'function' &&
      (typeof renderIcon === 'function' || undefined) &&
      (hooks === undefined ||
        ((typeof hooks?.onActivate === 'function' || null) && (typeof hooks?.onDeactivate === 'function' || null)))
    );
  }
}
