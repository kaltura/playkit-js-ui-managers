import { ComponentClass, FunctionalComponent, RefObject, createRef } from 'preact';
import { IconDto } from './icon-dto';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';
import { SvgIcon } from './svg-icon';
import { KalturaPluginNames } from '../../../types/ui-managers-config';
import { PlaykitJS } from 'kaltura-player-js';
import { pluginName } from '../../../ui-managers';

export class IconModel {
  private static nextId = 0;
  private static logger = PlaykitJS.getLogger(pluginName);
  public readonly id: number;
  public label: KalturaPluginNames | string;
  public componentRef: RefObject<IconWrapper>;
  public onClick: (e: MouseEvent | KeyboardEvent) => void;
  public component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  public svgIcon: SvgIcon;
  constructor(item: IconDto) {
    this.id = ++IconModel.nextId;
    this.label = item.label;
    this.component = item.component;
    this.svgIcon = item.svgIcon;
    this.onClick = item.onClick;
    this.componentRef = createRef();
  }

  public update(): void {
    if (this.componentRef.current) {
      this.componentRef.current.forceUpdate();
    } else {
      IconModel.logger.warn(`Icon component of label: ${this.label} id: ${this.id} can not be force updated because the component ref is not set yet`);
    }
  }
}
