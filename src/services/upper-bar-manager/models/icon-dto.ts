import { ComponentClass, FunctionalComponent } from 'preact';
import { SvgIcon } from './svg-icon';
import { KalturaPluginNames } from '../../../types/ui-managers-config';

export interface IconDto {
  label: KalturaPluginNames | string;
  component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  svgIcon: SvgIcon;
  onClick: () => void;
}
