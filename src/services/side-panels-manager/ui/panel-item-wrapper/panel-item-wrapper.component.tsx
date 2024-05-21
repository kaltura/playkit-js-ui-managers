import {
  h,
  Component,
  ComponentChild,
  RefObject,
  cloneElement,
  VNode,
  Fragment,
  ComponentClass,
  FunctionalComponent
} from 'preact';
import * as styles from './panel-item-wrapper.component.scss';
import { ui } from '@playkit-js/kaltura-player-js';
const { defaultTransitionTime } = ui.style;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { createPortal } = ui;

type PanelItemWrapperState = {
  on: boolean;
  detachRef: HTMLDivElement | null;
  attachPlaceholder: ComponentClass | FunctionalComponent;
};

type PanelItemWrapperProps = {
  ref: RefObject<PanelItemWrapper>;
};

/**
 * PanelItemWrapper component
 * @internal
 */
export class PanelItemWrapper extends Component<PanelItemWrapperProps, PanelItemWrapperState> {
  private switchMode: boolean;
  constructor() {
    super();
    this.state = {
      on: false,
      detachRef: null,
      attachPlaceholder: () => null
    };
    this.switchMode = false;
  }

  on(): void {
    this.setState({ on: true });
  }

  off(switchMode: boolean): void {
    this.switchMode = switchMode;
    this.setState({ on: false });
  }

  public detach = (detachRef: HTMLDivElement, attachPlaceholder: ComponentClass | FunctionalComponent): void => {
    this.setState({ detachRef, attachPlaceholder });
  };

  public attach = (): void => {
    this.setState({ detachRef: null, attachPlaceholder: () => null });
  };

  public get detachRef() {
    return this.state.detachRef;
  }

  render(): ComponentChild {
    const node = cloneElement(this.props.children as VNode);
    return (
      <div
        className={[styles.sidePanelWrapper, this.state.on ? styles.activeState : ''].join(' ')}
        style={!this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : ''}
      >
        {this.detachRef ? (
          <Fragment>
            {createPortal(node, this.detachRef)}
            <this.state.attachPlaceholder />
          </Fragment>
        ) : (
          node
        )}
      </div>
    );
  }
}
