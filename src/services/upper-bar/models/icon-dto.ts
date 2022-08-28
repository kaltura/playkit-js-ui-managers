import { ComponentClass, FunctionalComponent } from 'preact';
import { KalturaPluginNames } from '../../../ui-managers';

export interface IconDto {
  label: KalturaPluginNames | string;
  component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  onClick: () => void;
}
