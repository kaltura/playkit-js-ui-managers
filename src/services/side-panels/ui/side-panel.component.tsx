import {h, Component, ComponentChild, RefObject} from 'preact';

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
  constructor() {
    super();
    this.state = {on: false};
  }

  toggle(): void {
    this.setState((state: Readonly<ToggleState>) => {
      return {on: !state.on};
    });
  }

  render(): ComponentChild {
    return <div style={{display: this.state.on ? 'block' : 'none'}}>{this.props.children}</div>;
  }
}
