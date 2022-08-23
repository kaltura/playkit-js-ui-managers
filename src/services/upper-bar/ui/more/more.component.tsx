import { h, Component, ComponentChild } from 'preact';
import { ui } from 'kaltura-player-js';
import * as styles from './more.scss';
import { ControlWrapper } from '../../models/control-wrapper';
import { Dropdown } from '../dropdown/dropdown.component';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { Icon } = ui.Components;
const ICON_PATH =
  'M16 22a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z';

type MoreState = {
  show: boolean;
};
type MoreProps = {
  controls: ControlWrapper[];
};

/**
 * IconWrapper component
 * @internal
 */
export class More extends Component<MoreProps, MoreState> {
  constructor() {
    super();
    this.state = { show: false };
  }

  private handleOnClick(): void {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render(): ComponentChild {
    return (
      <div className={ui.style.controlButton + ' ' + styles.moreButton} onClick={() => this.handleOnClick()}>
        <Icon color={'#FFF'} id={'id111'} path={ICON_PATH} viewBox={`0 0 32 32`} />
        {this.state.show && (
          <div>
            <Dropdown controls={this.props.controls} />
          </div>
        )}
      </div>
    );
  }
}
