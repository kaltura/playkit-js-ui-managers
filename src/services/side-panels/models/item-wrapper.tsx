import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer } from 'kaltura-player-js';
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import { PanelComponentProps, SidePanelItem } from './side-panel-item';
import { UpperBarManager } from '../../upper-bar/upper-bar-manager';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  public readonly id: number;
  public iconId: number | undefined;
  public readonly item: SidePanelItem;
  private readonly player: KalturaPlayer;
  private readonly upperBarManager: UpperBarManager;
  private panelItemComponentRef!: RefObject<PanelItemWrapper>;
  private removePanelComponentFn!: () => void;
  private isActive: boolean;
  constructor(item: SidePanelItem, player: KalturaPlayer, onClick: (panelItemId: number) => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.player = player;
    this.upperBarManager = this.player.getService<UpperBarManager>('upperBarManager');
    this.isActive = false;
    this.injectPanelComponent();
    if (item.iconComponent) {
      const itemId = this.id;
      this.iconId = this.upperBarManager.addControl({
        onClick: () => onClick(itemId),
        component: this.item.iconComponent!
      });
    }
  }

  public activate(): void {
    this.panelItemComponentRef?.current?.on() || setImmediate(() => this.panelItemComponentRef!.current!.on());
    if (this.item.iconComponent) this.upperBarManager.activateControl(this.iconId!);
    this.item.onActivate?.();
    this.isActive = true;
  }

  public deactivate(switchMode = false): void {
    this.panelItemComponentRef.current!.off(switchMode);
    if (this.item.iconComponent) this.upperBarManager.deactivateControl(this.iconId!);
    this.item.onDeactivate?.();
    this.isActive = false;
  }

  public remove(): void {
    this.removePanelComponentFn();
    if (this.item.iconComponent) this.upperBarManager.removeControl(this.iconId!);
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

  private static getPanelArea(position: string): string {
    return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
  }
}
