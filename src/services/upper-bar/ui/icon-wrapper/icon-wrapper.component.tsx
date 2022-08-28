import { h, Component, ComponentChild } from 'preact';
import * as styles from './icon-wrapper.component.scss';

type IconWrapperWrapperState = {
  on: boolean;
};

type IconWrapperProps = {
  onClick: () => void;
};

export class IconWrapper extends Component<IconWrapperProps, IconWrapperWrapperState> {
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
      <div className={styles.upperBarIconWrapper} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}
