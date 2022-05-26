import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';

type ToggleState = {
  on: boolean;
};

type ToggleProps = {
  ref: RefObject<IconWrapper>;
  onClick: () => void;
};

/**
 * Toggle component rapper
 * @internal
 */
export class IconWrapper extends Component<ToggleProps, ToggleState> {
  constructor() {
    super();
    this.state = { on: false };
  }

  toggle(): void {
    this.setState((state: Readonly<ToggleState>) => {
      return { on: !state.on };
    });
  }

  render(): ComponentChild {
    return <div onClick={this.props.onClick}>{cloneElement(this.props.children as VNode, { isActive: this.state.on })}</div>;
  }
}
