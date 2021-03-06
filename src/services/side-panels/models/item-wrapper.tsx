import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer, ui } from 'kaltura-player-js';
const { ReservedPresetAreas } = ui;
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';
import { PanelComponentProps, SidePanelItem } from './side-panel-item';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  public readonly id: number;
  public readonly item: SidePanelItem;
  private readonly player: KalturaPlayer;
  private panelItemComponentRef!: RefObject<PanelItemWrapper>;
  private removePanelComponentFn!: () => void;
  private iconComponentRef: RefObject<IconWrapper> | undefined;
  private removeIconComponentFn: (() => void) | undefined;
  private isActive: boolean;
  constructor(item: SidePanelItem, player: KalturaPlayer, onClick: (panelItemId: number) => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.player = player;
    this.isActive = false;
    this.injectPanelComponent();
    if (item.iconComponent) this.injectIconComponent(onClick);
  }

  public activate(): void {
    this.panelItemComponentRef.current!.on();
    if (this.item.iconComponent) this.iconComponentRef!.current!.on();
    this.item.onActivate?.();
    this.isActive = true;
  }

  public deactivate(switchMode = false): void {
    this.panelItemComponentRef.current!.off(switchMode);
    if (this.item.iconComponent) this.iconComponentRef!.current!.off();
    this.item.onDeactivate?.();
    this.isActive = false;
  }

  public remove(): void {
    this.removePanelComponentFn();
    if (this.item.iconComponent) this.removeIconComponentFn!();
  }

  public update(): void {
    this.panelItemComponentRef.current!.update();
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
            <SidePanelComponent isActive={this.isActive} />
          </PanelItemWrapper>
        );
      }
    });
  }

  private injectIconComponent(onClick: (panelItemId: number) => void): void {
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
              onClick(itemId);
            }}
          >
            <IconComponent isActive={this.isActive} />
          </IconWrapper>
        );
      }
    });
  }

  private static getPanelArea(position: string): string {
    return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
  }
}
