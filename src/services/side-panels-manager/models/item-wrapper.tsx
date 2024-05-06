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

  public detach(): void {
    const state = this.player.ui.store.getState();
    const { playerClientRect } = state.shell;
    const el = document.createElement('div');
    el.style.zIndex = '2';
    el.style.position = 'absolute';
    // el.style.top = `${playerClientRect.y + playerClientRect.height + 12}px`; // TODO: move DELTA to const
    el.style.top = `714px`; // TODO: move DELTA to const
    el.style.left = `${playerClientRect.x}px`;

    // el.style.width = playerClientRect.width;
    el.style.width = '1024px';
    el.style.height = `${Math.round(playerClientRect.height / 3)}px`;
    el.className = 'playkit-player detouch-container';

    document.body.appendChild(el);

    this.panelItemComponentRef.current!.detach(el);
  }

  public attach(): void {
    this.panelItemComponentRef.current!.attach();
  }

  public isDetached(): boolean {
    return this.panelItemComponentRef.current?.isDetached() || false;
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
