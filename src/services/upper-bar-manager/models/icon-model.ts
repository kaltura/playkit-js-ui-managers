import { ComponentClass, FunctionalComponent, RefObject, createRef } from 'preact';
import { IconDto } from './icon-dto';
import { KalturaPluginNames } from '../../../ui-managers';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';

/**
 * Panel item metadata
 * @internal
 */
export class IconModel {
  private static nextId = 0;
  public readonly id: number;
  public label: KalturaPluginNames | string;
  public componentRef: RefObject<IconWrapper>;
  public onClick: () => void;
  public component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  constructor(item: IconDto) {
    this.id = ++IconModel.nextId;
    this.label = item.label;
    this.component = item.component;
    this.onClick = item.onClick;
    this.componentRef = createRef();
  }

  public update(): void {
    this.componentRef.current!.forceUpdate();
  }
}
