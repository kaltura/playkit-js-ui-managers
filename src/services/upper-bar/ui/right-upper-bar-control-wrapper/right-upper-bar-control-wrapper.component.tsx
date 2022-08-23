import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';
import * as styles from './right-upper-bar-control-wrapper.scss';

type RightUpperBarControlWrapperState = {
  on: boolean;
};

type RightUpperBarControlWrapperProps = {
  ref: RefObject<RightUpperBarControlWrapper>;
  onClick: () => void;
};

/**
 * IconWrapper component
 * @internal
 */
export class RightUpperBarControlWrapper extends Component<RightUpperBarControlWrapperProps, RightUpperBarControlWrapperState> {
  constructor() {
    super();
    this.state = { on: false };
  }

  on(): void {
    this.setState({ on: true });
  }

  off(): void {
    this.setState({ on: false });
  }

  render(): ComponentChild {
    return (
      <div className={styles.upperBarControlWrapper} onClick={this.props.onClick}>
        {cloneElement(this.props.children as VNode, { isActive: this.state.on })}
      </div>
    );
  }
}
