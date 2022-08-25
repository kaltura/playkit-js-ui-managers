// import { h, Component, ComponentChild, RefObject, createRef, ComponentClass, FunctionalComponent } from 'preact';
import { h, Component, ComponentChild, RefObject, ComponentClass, FunctionalComponent } from 'preact';
import { ControlWrapper } from '../../models/control-wrapper';
import { UpperBarControlProps } from '../../models/upper-bar-control-dto';
import { RightUpperBarControlWrapper } from '../right-upper-bar-control-wrapper/right-upper-bar-control-wrapper.component';
import * as styles from './right-upper-bar-wrapper.component.scss';
import { ui } from 'kaltura-player-js';
import { More } from '../more/more.component';
import { KalturaPluginNames } from '../../../../ui-managers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { PLAYER_SIZE } = ui.Components;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { connect } = ui.redux;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mapStateToProps = (state) => ({
  playerSize: state.shell.playerSize
});

type RightUpperBarWrapperState = {
  controls: ControlWrapper[];
};

type RightUpperBarWrapperProps = {
  ref: RefObject<RightUpperBarWrapper>;
  iconsOrder: { [key in KalturaPluginNames | string]: number };
};

/**
 * IconWrapper component
 * @internal
 */
@connect(mapStateToProps, null, null, { forwardRef: true })
export class RightUpperBarWrapper extends Component<RightUpperBarWrapperProps, RightUpperBarWrapperState> {
  // public RightUpperBarControlWrapperRef: RefObject<RightUpperBarControlWrapper> = createRef();
  constructor() {
    super();
    this.state = { controls: [] };
  }

  private splitControlsIntoDisplayedAndDropdown(playerSize: number): {
    displayedControls: ControlWrapper[];
    dropdownControls: ControlWrapper[];
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

  update(icons: ControlWrapper[]): void {
    icons.sort((a, b) => (this.props.iconsOrder[a.label] > this.props.iconsOrder[b.label] ? 1 : -1));
    this.setState({ controls: icons });
  }

  private splitControls(numberOfDisplayedIcon: number): {
    displayedControls: ControlWrapper[];
    dropdownControls: ControlWrapper[];
  } {
    let displayedControls: ControlWrapper[];
    let dropdownControls: ControlWrapper[];

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
        {/*{displayedControls.map(({ id, component, onClick, isActive }) => {*/}
        {displayedControls.map(({ id, component, onClick }) => {
          const ControlComponent: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps> = component!;
          return (
            // <RightUpperBarControlWrapper key={id} ref={this.RightUpperBarControlWrapperRef} onClick={onClick}>
            <RightUpperBarControlWrapper key={id} onClick={onClick}>
              {/*<ControlComponent isActive={isActive} />*/}
              <ControlComponent />
            </RightUpperBarControlWrapper>
          );
        })}
        {dropdownControls.length && <More controls={dropdownControls} />}
      </div>
    );
  }
}