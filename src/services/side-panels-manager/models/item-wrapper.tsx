import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer, PlaykitJS } from 'kaltura-player-js';
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import { PanelComponentProps, SidePanelItem } from './side-panel-item';
import { UpperBarManager } from '../../upper-bar-manager/upper-bar-manager';
import { pluginName } from '../../../ui-managers';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  private static logger = PlaykitJS.getLogger(pluginName);
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
      this.iconId = this.upperBarManager.add({
        label: this.item.label,
        svgIcon: this.item.iconComponent!.svgIcon,
        onClick: () => onClick(itemId),
        component: this.item.iconComponent!.component!
      });
    }
  }

  public activate(): void {
    if (this.panelItemComponentRef.current) {
      this.panelItemComponentRef.current!.on();
      this.item.onActivate?.();
      this.isActive = true;
    } else {
      setTimeout(() => this.activate());
    }
  }

  public deactivate(switchMode = false): void {
    this.panelItemComponentRef.current!.off(switchMode);
    this.item.onDeactivate?.();
    this.isActive = false;
  }

  public remove(): void {
    this.removePanelComponentFn();
    if (this.item.iconComponent?.component) this.upperBarManager.remove(this.iconId!);
  }

  public update(): void {
    if (this.panelItemComponentRef.current) {
      this.panelItemComponentRef.current.forceUpdate();
    } else {
      ItemWrapper.logger.warn(`Panel component of label: ${this.item.label} id: ${this.id} can not be force updated because the component ref is not set yet`);
    }
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
