import { VNode } from 'preact';
import { InjectionPosition } from './injection-position';

export type ComponentFactory = (props?: Record<string, unknown>) => VNode;

export interface InjectOptions {
  position: InjectionPosition;
  component: ComponentFactory;
  props?: Record<string, unknown>;
}
