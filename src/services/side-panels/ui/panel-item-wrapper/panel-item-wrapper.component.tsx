import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';
import * as styles from './panel-item-wrapper.component.scss';
import { ui } from 'kaltura-player-js';

const { defaultTransitionTime } = ui.style;

type ToggleState = {
  on: boolean;
};

type ToggleProps = {
  ref: RefObject<PanelItemWrapper>;
};

/**
 * Toggle component rapper
 * @internal
 */
export class PanelItemWrapper extends Component<ToggleProps, ToggleState> {
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
        {cloneElement(this.props.children as VNode, { isActive: this.state.on })}
      </div>
    );
  }
}
