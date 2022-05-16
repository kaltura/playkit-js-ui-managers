import { h, Component, ComponentChild, RefObject } from 'preact';
import * as styles from './toggel.scss';
import { ui } from 'kaltura-player-js';

const { defaultTransitionTime } = ui.style;

type ToggleState = {
  on: boolean;
};

type ToggleProps = {
  ref: RefObject<Toggle>;
};

/**
 * Toggle component rapper
 * @internal
 */
export class Toggle extends Component<ToggleProps, ToggleState> {
  switchMode: boolean;
  constructor() {
    super();
    this.state = { on: false };
    this.switchMode = false;
  }

  toggle(switchMode?: boolean): void {
    this.switchMode = !!switchMode;
    this.setState((state: Readonly<ToggleState>) => {
      return { on: !state.on };
    });
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
