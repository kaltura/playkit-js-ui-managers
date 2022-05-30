import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer, ui } from 'kaltura-player-js';
const { ReservedPresetAreas } = ui;
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';
import { PanelComponentProps, SidePanelItem } from './side-panel-item-dto';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  public readonly id: number;
  private player: KalturaPlayer;
  public item: SidePanelItem;
  public panelItemComponentRef!: RefObject<PanelItemWrapper>;
  public removePanelComponentFn!: () => void;
  public iconComponentRef: RefObject<IconWrapper> | undefined;
  public removeIconComponentFn: (() => void) | undefined;
  constructor(item: SidePanelItem, player: KalturaPlayer, onToggleIcon: (panelItemId: number) => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.player = player;
    this.injectPanelComponent();
    if (item.iconComponent) this.injectIconComponent(onToggleIcon);
  }

  public toggle(switchMode: boolean): void {
    this.panelItemComponentRef.current!.toggle(switchMode);
    if (this.item.iconComponent) this.iconComponentRef!.current!.toggle();
  }

  public remove(): void {
    this.removePanelComponentFn();
    if (this.item.iconComponent) this.removeIconComponentFn!();
  }

  private injectPanelComponent(): void {
    const { label, position, panelComponent, presets } = this.item;
    const SidePanelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps> = panelComponent;
    const componentRef: RefObject<PanelItemWrapper> = createRef();
    this.panelItemComponentRef = componentRef;
    this.removePanelComponentFn = this.player.ui.addComponent({
      label: `Side-panel-${position}-${label}`,
      presets,
      area: ItemWrapper.getPanelArea(position),
      get: () => {
        return (
          <PanelItemWrapper ref={componentRef}>
            <SidePanelComponent isActive={false} />
          </PanelItemWrapper>
        );
      }
    });
  }

  private injectIconComponent(onToggleIcon: (panelItemId: number) => void): void {
    const { presets, label, iconComponent } = this.item;
    const IconComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps> = iconComponent!;
    const componentRef: RefObject<IconWrapper> = createRef();
    const itemId = this.id;
    this.iconComponentRef = componentRef;
    this.removeIconComponentFn = this.player.ui.addComponent({
      label: `Side-Panel-Icon-${label}`,
      presets,
      area: ReservedPresetAreas.TopBarRightControls,
      get: function MyComponent() {
        return (
          <IconWrapper
            ref={componentRef}
            onClick={(): void => {
              onToggleIcon(itemId);
            }}
          >
            <IconComponent isActive={false} />
          </IconWrapper>
        );
      }
    });
  }

  private static getPanelArea(position: string): string {
    return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
  }
}
