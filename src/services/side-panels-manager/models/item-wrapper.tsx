import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import { PanelComponentProps, SidePanelItem } from './side-panel-item';

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
  private panelItemComponentRef!: RefObject<PanelItemWrapper>;
  private removePanelComponentFn!: () => void;
  private isActive: boolean;
  constructor(item: SidePanelItem, player: KalturaPlayer) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.player = player;
    this.isActive = false;
    this.injectPanelComponent();
  }

  public activate(): void {
    if (this.panelItemComponentRef.current) {
      this.panelItemComponentRef.current!.on();
      this.isActive = true;
    } else {
      setTimeout(() => this.activate());
    }
  }

  public deactivate(switchMode = false): void {
    this.panelItemComponentRef.current!.off(switchMode);
    this.isActive = false;
  }

  public remove(): void {
    this.removePanelComponentFn();
  }

  public update(): void {
    this.panelItemComponentRef.current!.forceUpdate();
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
