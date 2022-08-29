import { h, Component, ComponentChild } from 'preact';

type IconWrapperProps = {
  onClick: () => void;
};

export class IconWrapper extends Component<IconWrapperProps> {
  render(): ComponentChild {
    return <div onClick={this.props.onClick}>{this.props.children}</div>;
  }
}
