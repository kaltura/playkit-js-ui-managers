import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';

type IconWrapperState = {
  on: boolean;
};

type IconWrapperProps = {
  ref: RefObject<IconWrapper>;
  onClick: () => void;
};

/**
 * IconWrapper component
 * @internal
 */
export class IconWrapper extends Component<IconWrapperProps, IconWrapperState> {
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
    return <div onClick={this.props.onClick}>{cloneElement(this.props.children as VNode, { isActive: this.state.on })}</div>;
  }
}
