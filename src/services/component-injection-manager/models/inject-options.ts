import { VNode } from 'preact';
import { InjectionPosition } from './injection-position';

export type ComponentFactory = (props?: any) => VNode;

export interface InjectOptions {
  position: InjectionPosition;
  component: ComponentFactory;
  props?: any;
}
