import { createRef, RefObject, ComponentClass, FunctionalComponent } from 'preact';
import { UpperBarControlDto, UpperBarControlProps } from './upper-bar-control-dto';
import { RightUpperBarControlWrapper } from '../ui/right-upper-bar-control-wrapper/right-upper-bar-control-wrapper.component';

/**
 * Panel item metadata
 * @internal
 */
export class ControlWrapper {
  private static nextId = 0;
  public readonly id: number;
  public iconComponentRef: RefObject<RightUpperBarControlWrapper>;
  public onClick: () => void;
  public component: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps>;
  private removeIconComponentFn: (() => void) | undefined;
  private _isActive: boolean;
  constructor(item: UpperBarControlDto) {
    this.id = ++ControlWrapper.nextId;
    this.component = item.component;
    this.onClick = item.onClick;
    this._isActive = false;
    this.iconComponentRef = createRef();
  }

  public activate(): void {
    this.iconComponentRef?.current?.on() || setTimeout(() => this.iconComponentRef!.current!.on());
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
}
