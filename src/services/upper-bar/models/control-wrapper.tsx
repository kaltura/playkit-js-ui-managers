import { h, createRef, RefObject, FunctionalComponent, ComponentClass } from 'preact';
import { KalturaPlayer, ui } from 'kaltura-player-js';
const { ReservedPresetAreas } = ui;
import { UpperBarControlDto, UpperBarControlProps } from './upper-bar-control-dto';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';

/**
 * Panel item metadata
 * @internal
 */
export class ControlWrapper {
  private static nextId = 0;
  public readonly id: number;
  public readonly item: UpperBarControlDto;
  private readonly player: KalturaPlayer;
  private iconComponentRef: RefObject<IconWrapper> | undefined;
  private removeIconComponentFn: (() => void) | undefined;
  private _isActive: boolean;
  constructor(item: UpperBarControlDto, player: KalturaPlayer) {
    this.id = ++ControlWrapper.nextId;
    this.item = item;
    this.player = player;
    this._isActive = false;
    this.injectIconComponent();
  }

  public activate(): void {
    this.iconComponentRef!.current!.on();
    this._isActive = true;
  }

  public deactivate(): void {
    this.iconComponentRef!.current!.off();
    this._isActive = false;
  }

  public remove(): void {
    this.removeIconComponentFn!();
  }

  public get isActive(): boolean {
    return this._isActive;
  }

  private injectIconComponent(): void {
    const { label, component, onClick } = this.item;
    const IconComponent: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps> = component!;
    const componentRef: RefObject<IconWrapper> = createRef();
    this.iconComponentRef = componentRef;
    this.removeIconComponentFn = this.player.ui.addComponent({
      label: `Side-Panel-Icon-${label}`,
      presets: ['Playback', 'Live'],
      area: ReservedPresetAreas.TopBarRightControls,
      get: function MyComponent() {
        return (
          <IconWrapper
            ref={componentRef}
            onClick={(): void => {
              onClick();
            }}
          >
            <IconComponent isActive={this._isActive} />
          </IconWrapper>
        );
      }
    });
  }
}
