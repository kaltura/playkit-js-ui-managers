import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import {
  PanelComponentProps,
  SidePanelItem,
  DETACHED_WINDOW_STYLES,
  DETACH_CONTAINER_CLASS,
  CLOSE_DETACH_EVENTS
} from './side-panel-item';

export interface DetachWindowOptions {
  onAttach?: () => void;
  top?: number;
  left?: number;
  width: number;
  height: number;
  title: string;
  maxWidth?: number;
  maxHeight?: number;
  attachPlaceholder?: ComponentClass | FunctionalComponent;
}

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
  private _detachWindow: Window | null = null;
  private _closingDetachWindow = false;

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

  public detach(options: DetachWindowOptions): void {
    const el = document.createElement('div');
    el.style.width = '100%';
    el.style.height = `100%`;
    el.className = `${DETACH_CONTAINER_CLASS}-${this.id}`;

    // create and set params to the new window
    let newWindowParams = 'menubar=no,status=no,location=no,toolbar=no';
    newWindowParams += `,width=${options?.width || 'auto'},height=${options?.height || 'auto'}`;
    newWindowParams += `,top=${options?.top || 'auto'}, left=${options?.left || 'auto'}`;
    this._detachWindow = window.open('', '_blank', newWindowParams);
    this._detachWindow!.document.title = options?.title;
    this._detachWindow?.focus();

    // copy and set styles to the new window
    const currentPageHead = document.head;
    const newPageHead = this._detachWindow!.document.head;
    const newPageBody = this._detachWindow!.document.body;
    const styles = currentPageHead.querySelectorAll('style');
    styles.forEach((style) => {
      const newStyle = this._detachWindow!.document.createElement('style');
      newStyle!.textContent = style.textContent;
      newPageHead.appendChild(newStyle!);
    });

    Object.assign(newPageBody.style, DETACHED_WINDOW_STYLES);

    // Append the <div> element to the new window's document
    this._detachWindow?.document.body.appendChild(el);

    // handle close of new window
    this._detachWindow!.onbeforeunload = () => {
      options?.onAttach?.();
      this._closeDetachedWindow();
    };
    CLOSE_DETACH_EVENTS.forEach((closeEvent) => {
      window.addEventListener(closeEvent, this._closeDetachedWindow);
    });

    // handle resize of new window
    if (options?.maxWidth || options?.maxHeight) {
      this._detachWindow!.addEventListener('resize', (event) => {
        event.preventDefault();
        if (options?.maxWidth && this._detachWindow!.innerWidth > options.maxWidth) {
          this._detachWindow!.resizeTo(options.maxWidth, this._detachWindow!.outerHeight);
        }
        if (options?.maxHeight && this._detachWindow!.innerHeight > options.maxHeight) {
          this._detachWindow!.resizeTo(this._detachWindow!.outerWidth, options.maxHeight);
        }
      });
    }
    this.panelItemComponentRef.current!.detach(el, options?.attachPlaceholder || (() => null));
  }

  public attach = (): void => {
    if (this.isDetached) {
      this.panelItemComponentRef.current!.attach();
      this._closeDetachedWindow();
    }
  };

  public get isDetached() {
    return Boolean(this._detachWindow);
  }

  public getDetachedRef() {
    return this.panelItemComponentRef.current?.detachRef;
  }

  public remove(): void {
    this.removePanelComponentFn();
    this._closeDetachedWindow();
  }

  public update(): void {
    this.panelItemComponentRef.current!.forceUpdate();
  }

  private _closeDetachedWindow = () => {
    if (!this._detachWindow || this._closingDetachWindow) {
      return;
    }
    this._closingDetachWindow = true;
    CLOSE_DETACH_EVENTS.forEach((closeEvent) => {
      window.removeEventListener(closeEvent, this._closeDetachedWindow);
    });
    this._detachWindow.close();
    this._detachWindow = null;
    this._closingDetachWindow = false;
  };

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
