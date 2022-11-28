import { h, Component, ComponentChild, RefObject } from 'preact';
import { IconModel } from '../../models/icon-model';
import { IconWrapper } from '../icon-wrapper/icon-wrapper.component';
import * as styles from './displayed-bar.component.scss';
import { ui } from 'kaltura-player-js';
import { MoreIcon } from '../more-icon/more-icon.component';
import { KalturaPluginNames } from '../../upper-bar-manager';

const { PLAYER_SIZE } = ui.Components;
const { connect } = ui.redux;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state) => ({
  playerSize: state.shell.playerSize
});

type DisplayedBarState = {
  controls: IconModel[];
};

type DisplayedBarProps = {
  ref: RefObject<DisplayedBar>;
  iconsOrder: { [key in KalturaPluginNames | string]: number };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@connect(mapStateToProps, null, null, { forwardRef: true })
export class DisplayedBar extends Component<DisplayedBarProps, DisplayedBarState> {
  constructor() {
    super();
    this.state = { controls: [] };
  }

  private splitControlsIntoDisplayedAndDropdown(playerSize: string): {
    displayedControls: IconModel[];
    dropdownControls: IconModel[];
  } {
    switch (playerSize) {
      case PLAYER_SIZE.TINY:
        return { displayedControls: [], dropdownControls: [] };
      case PLAYER_SIZE.EXTRA_SMALL:
      case PLAYER_SIZE.SMALL:
        return this.splitControls(2);
      default:
        return this.splitControls(4);
    }
  }

  update(icons: IconModel[]): void {
    icons.sort((a, b) => (this.props.iconsOrder[a.label] > this.props.iconsOrder[b.label] ? 1 : -1));
    this.setState({ controls: icons });
  }

  private splitControls(numberOfDisplayedIcon: number): {
    displayedControls: IconModel[];
    dropdownControls: IconModel[];
  } {
    let displayedControls: IconModel[];
    let dropdownControls: IconModel[];

    if (this.state.controls.length > numberOfDisplayedIcon + 1) {
      displayedControls = this.state.controls.slice(0, numberOfDisplayedIcon);
      dropdownControls = this.state.controls.slice(numberOfDisplayedIcon);
    } else {
      displayedControls = this.state.controls;
      dropdownControls = [];
    }
    return { displayedControls, dropdownControls };
  }

  render(): ComponentChild {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { displayedControls, dropdownControls } = this.splitControlsIntoDisplayedAndDropdown(this.props.playerSize);
    return (
      <div className={styles.rightUpperBarWrapperContainer}>
        {displayedControls.map(({ id, component, onClick, componentRef }) => {
          const IconWrapperComponent = component!;
          return (
            <IconWrapper key={id} onClick={onClick} ref={componentRef}>
              <IconWrapperComponent />
            </IconWrapper>
          );
        })}
        {dropdownControls.length && <MoreIcon icons={dropdownControls} />}
      </div>
    );
  }
}
