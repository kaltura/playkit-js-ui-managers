import {h, createRef, RefObject, FunctionalComponent} from 'preact';
import {ui} from 'kaltura-player-js';
import {PanelItemData, SidePanelItem, SidePanelPosition} from './side-panel-item';
import {Toggle} from './components/side-panel.component';

const {SidePanelModes, SidePanelPositions, ReservedPresetNames, ReservedPresetAreas} = ui;

const OPPOSITE_PANELS: Record<SidePanelPosition, SidePanelPosition> = {
  [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
  [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
  [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
  [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT,
} as Record<SidePanelPosition, SidePanelPosition>;

export class SidePanelsManager {
  private readonly player: any;
  private readonly activePanels: Record<SidePanelPosition, PanelItemData | null>;
  private readonly componentsRegistry: Map<number, PanelItemData>;

  constructor(player: any) {
    this.player = player;
    this.activePanels = {top: null, bottom: null, right: null, left: null};
    this.componentsRegistry = new Map<number, PanelItemData>();
  }

  public addItem(item: SidePanelItem): number {
    const newPanelItem: SidePanelItem = new SidePanelItem(item);
    const {position, renderContent} = item;
    const {componentRef, removeComponentFunc} = this.injectComponent(renderContent, position);
    const newPanelItemData: PanelItemData = new PanelItemData(newPanelItem, componentRef, removeComponentFunc);
    if (item.renderIcon) this.addIcon(newPanelItemData);
    this.componentsRegistry.set(newPanelItemData.id, newPanelItemData);
    return newPanelItemData.id;
  }

  public removeItem(itemId: number): void {
    const item: PanelItemData | undefined = this.componentsRegistry.get(itemId);
    this.deactivateItem(itemId);
    item?.removeComponentFunc();
    this.componentsRegistry.delete(itemId);
  }

  public activateItem(itemId: number): void {
    const item: PanelItemData | undefined = this.componentsRegistry.get(itemId);
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
      item.item.hooks.onActivate();
    }
  }

  public deactivateItem(itemId: number): void {
    const item: PanelItemData | undefined = this.componentsRegistry.get(itemId);
    if (item) {
      const {position} = item.item;
      this.activePanels[position]?.componentRef.current?.toggle();
      this.collapse(position);
      this.activePanels[position] = null;
      item.item.hooks.onDeactivate();
    }
  }

  public isItemActive(itemId: number): boolean {
    const item: PanelItemData | undefined = this.componentsRegistry.get(itemId);
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

  private addIcon(panelItemData: PanelItemData): void {
    const {id, item} = panelItemData;
    const Icon: FunctionalComponent = item.renderIcon as FunctionalComponent;
    const togglePanelFunc: () => void = () => this.toggle(id);
    this.player.ui.addComponent({
      // label: ???`,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: ReservedPresetAreas.TopBarRightControls,
      get: function MyComponent() {
        return (
          <div onClick={togglePanelFunc}>
            <Icon />
          </div>
        );
      },
    });
  }

  private injectComponent(
    PanelComponent: FunctionalComponent,
    position: SidePanelPosition
  ): {componentRef: RefObject<Toggle>; removeComponentFunc: () => void} {
    const componentRef: RefObject<Toggle> = createRef();
    const removeComponentFunc = this.player.ui.addComponent({
      label: 'SidePanelLeftDynamicComponent',
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: SidePanelsManager.getPanelArea(position),
      get: () => {
        return (
          <Toggle ref={componentRef}>
            <PanelComponent />
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
}
