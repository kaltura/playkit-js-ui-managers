import { h, Component, ComponentChild, RefObject } from 'preact';
import { IconModel } from '../../models/icon-model';
import { IconWrapper } from '../icon-wrapper/icon-wrapper.component';
import * as styles from './displayed-bar.component.scss';
import { ui } from '@playkit-js/kaltura-player-js';
import { MoreIcon } from '../more-icon/more-icon.component';

const { PLAYER_SIZE } = ui.Components;
const { connect } = ui.redux;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state) => ({
  playerSize: state.shell.playerSize
});

type DisplayedBarState = {
  showDropdown: boolean;
};

type DisplayedBarProps = {
  getControls: () => IconModel[];
  ref: RefObject<DisplayedBar>;
};
type PropsFromRedux = {
  playerSize?: string;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@connect(mapStateToProps, null, null, { forwardRef: true })
export class DisplayedBar extends Component<DisplayedBarProps & PropsFromRedux, DisplayedBarState> {
  constructor() {
    super();
    this.state = { showDropdown: false };
  }

  private handleOnClick = (): void => {
    this.setState((prevState) => ({ showDropdown: !prevState.showDropdown }));
  };

  private closeDropdown(): void {
    this.setState({ showDropdown: false });
  }

  private splitControlsIntoDisplayedAndDropdown(): {
    displayedControls: IconModel[];
    dropdownControls: IconModel[];
  } {
    switch (this.props.playerSize) {
      case PLAYER_SIZE.TINY:
        return { displayedControls: [], dropdownControls: [] };
      case PLAYER_SIZE.EXTRA_SMALL:
      case PLAYER_SIZE.SMALL:
        return this.splitControls(2);
      default:
        return this.splitControls(4);
    }
  }

  public update = (): void => {
    this.forceUpdate();
  };

  private splitControls(numberOfDisplayedIcon: number): {
    displayedControls: IconModel[];
    dropdownControls: IconModel[];
  } {
    let displayedControls: IconModel[];
    let dropdownControls: IconModel[];
    const controls = this.props.getControls();

    if (controls.length > numberOfDisplayedIcon + 1) {
      displayedControls = controls.slice(0, numberOfDisplayedIcon);
      dropdownControls = controls.slice(numberOfDisplayedIcon);
    } else {
      displayedControls = controls;
      dropdownControls = [];
    }
    return { displayedControls, dropdownControls };
  }

  render(): ComponentChild {
    const { displayedControls, dropdownControls } = this.splitControlsIntoDisplayedAndDropdown();
    return (
      <div className={styles.rightUpperBarWrapperContainer}>
        {displayedControls.map(({ id, component, onClick, componentRef }) => {
          const IconWrapperComponent = component!;
          return (
            <IconWrapper
              key={id}
              onClick={(...e): void => {
                onClick(...e);
                this.closeDropdown();
              }}
              ref={componentRef}
            >
              <IconWrapperComponent />
            </IconWrapper>
          );
        })}
        {dropdownControls.length > 0 && (
          <MoreIcon showDropdown={this.state.showDropdown} onClick={this.handleOnClick} icons={dropdownControls} />
        )}
      </div>
    );
  }
}
