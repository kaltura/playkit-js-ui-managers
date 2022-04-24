import {h, Component, ComponentChild} from 'preact';

type ToggleState = {
  on: boolean;
};

export class Toggle extends Component<any, ToggleState> {
  readonly state: ToggleState;
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