import { h, Component, ComponentChild, RefObject } from 'preact';
import * as styles from './toggel.scss';

let zIndex = 0;

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
    this.state = { on: false };
  }

  toggle(): void {
    this.setState((state: Readonly<ToggleState>) => {
      return { on: !state.on };
    });
  }

  render(): ComponentChild {
    return (
      <div className={styles.sidePanel} style={{ 'z-index': ++zIndex }}>
        {this.props.children}
      </div>
    );
  }
}
