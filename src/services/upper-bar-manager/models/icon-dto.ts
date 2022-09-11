import { ComponentClass, FunctionalComponent } from 'preact';
import { KalturaPluginNames } from '../../../ui-managers';
import { SvgIcon } from './svg-icon';

export interface IconDto {
  label: KalturaPluginNames | string;
  component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  svgIcon: SvgIcon;
  onClick: () => void;
}
