import { h, Component, ComponentChild, RefObject, cloneElement, VNode } from 'preact';
import { ui } from 'kaltura-player-js';
const { KeyMap } = ui.utils;

type IconWrapperProps = {
  ref: RefObject<IconWrapper>;
  onClick: () => void;
};

// eslint-disable-next-line react/prefer-stateless-function
export class IconWrapper extends Component<IconWrapperProps> {
  private handleOnKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === KeyMap.ENTER || event.keyCode === KeyMap.SPACE) {
      event.preventDefault();
      this.props.onClick();
    }
  }

  render(): ComponentChild {
    return (
      <div onClick={this.props.onClick} onKeyDown={(event): void => this.handleOnKeyDown(event)}>
        {cloneElement(this.props.children as VNode)}
      </div>
    );
  }
}
