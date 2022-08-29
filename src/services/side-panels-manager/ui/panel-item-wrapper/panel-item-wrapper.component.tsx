import { h, Component, ComponentChild, RefObject } from 'preact';
import * as styles from './panel-item-wrapper.component.scss';
import { ui } from 'kaltura-player-js';

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
        className={[styles.sidePanel, this.state.on ? styles.active : ''].join(' ')}
        style={!this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : ''}
      >
        {this.props.children}
      </div>
    );
  }
}
