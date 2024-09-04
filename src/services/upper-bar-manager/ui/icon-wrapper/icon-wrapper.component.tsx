import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';
import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';

type IconWrapperProps = {
  ref: RefObject<IconWrapper>;
  onClick: (e: MouseEvent | KeyboardEvent) => void;
};

export class IconWrapper extends Component<IconWrapperProps> {
  render(): ComponentChild {
    return (
      <A11yWrapper role={null} onClick={this.props.onClick}>
        <div>{cloneElement(this.props.children as VNode)}</div>
      </A11yWrapper>
    );
  }
}
