import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';

type IconWrapperProps = {
  ref: RefObject<IconWrapper>;
  onClick: () => void;
};

// eslint-disable-next-line react/prefer-stateless-function
export class IconWrapper extends Component<IconWrapperProps> {
  render(): ComponentChild {
    return <div onClick={this.props.onClick}>{cloneElement(this.props.children as VNode)}</div>;
  }
}
