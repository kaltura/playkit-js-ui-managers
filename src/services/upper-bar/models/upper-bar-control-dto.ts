import { ComponentClass, FunctionalComponent } from 'preact';
export type UpperBarControlProps = {
  isActive: boolean;
};

export interface UpperBarControlDto {
  onClick: () => void;
  component: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps>;
}
