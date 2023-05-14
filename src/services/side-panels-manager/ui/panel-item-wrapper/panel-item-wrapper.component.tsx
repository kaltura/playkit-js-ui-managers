import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';
import * as styles from './panel-item-wrapper.component.scss';
import { ui } from '@playkit-js/kaltura-player-js';

const { defaultTransitionTime } = ui.style;

type PanelItemWrapperState = {
  on: boolean;
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
    this.state = { on: false };
    this.switchMode = false;
  }

  on(): void {
    this.setState({ on: true });
  }

  off(switchMode: boolean): void {
    this.switchMode = switchMode;
    this.setState({ on: false });
  }

  render(): ComponentChild {
    return (
      <div
        className={[styles.sidePanelWrapper, this.state.on ? styles.activeState : ''].join(' ')}
        style={!this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : ''}
      >
        {cloneElement(this.props.children as VNode)}
      </div>
    );
  }
}
