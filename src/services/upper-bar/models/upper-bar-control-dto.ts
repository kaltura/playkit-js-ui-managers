import { ComponentClass, FunctionalComponent } from 'preact';
export type UpperBarControlProps = {
  isActive: boolean;
};

export interface UpperBarControlDto {
  label: string;
  onClick: () => void;
  component: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps>;
}
