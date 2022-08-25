import { createRef, RefObject, ComponentClass, FunctionalComponent } from 'preact';
import { UpperBarControlDto, UpperBarControlProps } from './upper-bar-control-dto';
import { RightUpperBarControlWrapper } from '../ui/right-upper-bar-control-wrapper/right-upper-bar-control-wrapper.component';
import { KalturaPluginNames } from '../../../ui-managers';

/**
 * Panel item metadata
 * @internal
 */
export class ControlWrapper {
  private static nextId = 0;
  public readonly id: number;
  public label: KalturaPluginNames | string;
  public iconComponentRef: RefObject<RightUpperBarControlWrapper>;
  public onClick: () => void;
  public component: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps>;
  // private removeIconComponentFn: (() => void) | undefined;
  // private _isActive: boolean;
  constructor(item: UpperBarControlDto) {
    this.id = ++ControlWrapper.nextId;
    this.label = item.label;
    this.component = item.component;
    this.onClick = item.onClick;
    // this._isActive = false;
    this.iconComponentRef = createRef();
  }

  // public activate(): void {
  //   if (this.iconComponentRef.current) {
  //     this.iconComponentRef.current!.on();
  //     this._isActive = true;
  //   } else {
  //     setTimeout(() => this.activate());
  //   }
  // }

  // public deactivate(): void {
  //   this.iconComponentRef.current!.off();
  //   this._isActive = false;
  // }

  // public remove(): void {
  //   this.removeIconComponentFn!();
  // }

  // public get isActive(): boolean {
  //   return this._isActive;
  // }
}
