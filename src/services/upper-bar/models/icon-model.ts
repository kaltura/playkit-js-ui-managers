import { ComponentClass, FunctionalComponent } from 'preact';
import { IconDto } from './icon-dto';
import { KalturaPluginNames } from '../../../ui-managers';

/**
 * Panel item metadata
 * @internal
 */
export class IconModel {
  private static nextId = 0;
  public readonly id: number;
  public label: KalturaPluginNames | string;
  public onClick: () => void;
  public component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  constructor(item: IconDto) {
    this.id = ++IconModel.nextId;
    this.label = item.label;
    this.component = item.component;
    this.onClick = item.onClick;
  }
}
