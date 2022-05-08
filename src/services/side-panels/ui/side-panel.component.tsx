import {h, Component, ComponentChild, RenderableProps} from 'preact';

type ToggleState = {
  on: boolean;
};

/**
 * Toggle component rapper
 * @internal
 */
export class Toggle extends Component<any, ToggleState> {
  constructor() {
    super();
    this.state = {on: false};
  }

  toggle(): void {
    this.setState((state: Readonly<ToggleState>) => {
      return {on: !state.on};
    });
  }

  render(props?: RenderableProps<any>, state?: Readonly<ToggleState>, context?: any): ComponentChild {
    return <div style={{display: this.state.on ? 'block' : 'none'}}>{this.props.children}</div>;
  }
}
