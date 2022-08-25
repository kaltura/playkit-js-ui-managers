import { ComponentClass, FunctionalComponent } from 'preact';
import { KalturaPluginNames } from '../../../ui-managers';
export type UpperBarControlProps = {
  // isActive: boolean;
};

export interface UpperBarControlDto {
  label: KalturaPluginNames | string;
  component: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps>;
  onClick: () => void;
}
