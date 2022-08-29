import { h, Component, ComponentChild } from 'preact';
import { ui } from 'kaltura-player-js';
import * as styles from './more-icon.component.scss';
import { IconModel } from '../../models/icon-model';
import { DropdownBar } from '../dropdown-bar/dropdown-bar.component';

const { Icon } = ui.Components;
const ICON_PATH =
  'M16 22a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z';

type MoreIconState = {
  toggle: boolean;
};
type MoreIconProps = {
  icons: IconModel[];
};

export class MoreIcon extends Component<MoreIconProps, MoreIconState> {
  constructor() {
    super();
    this.state = { toggle: false };
  }

  private handleOnClick(): void {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  }

  render(): ComponentChild {
    return (
      <div className={ui.style.upperBarIcon + ' ' + styles.moreIcon} onClick={() => this.handleOnClick()} tabIndex={0}>
        <Icon color={'#FFF'} id={'id111'} path={ICON_PATH} viewBox={`0 0 32 32`} />
        {this.state.toggle && (
          <div>
            <DropdownBar controls={this.props.icons} />
          </div>
        )}
      </div>
    );
  }
}
