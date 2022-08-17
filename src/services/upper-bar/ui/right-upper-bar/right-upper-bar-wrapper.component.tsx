import { h, Component, ComponentChild, RefObject, ComponentClass, FunctionalComponent } from 'preact';
import { ControlWrapper } from '../../models/control-wrapper';
import { UpperBarControlProps } from '../../models/upper-bar-control-dto';
import { RightUpperBarControlWrapper } from '../icon-wrapper/right-upper-bar-control-wrapper.component';
import * as styles from './right-upper-bar-wrapper.component.scss';
import { ui } from 'kaltura-player-js';
import { More } from '../more/more.component';
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
};

/**
 * IconWrapper component
 * @internal
 */
@connect(mapStateToProps, null, null, { forwardRef: true })
export class RightUpperBarWrapper extends Component<RightUpperBarWrapperProps, RightUpperBarWrapperState> {
  private moreIcon: ControlWrapper;
  constructor() {
    super();
    this.state = { controls: [] };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.moreIcon = new ControlWrapper({ component: More, onClick: (): void => {} });
  }

  update(icons: ControlWrapper[]): void {
    this.setState({ controls: icons });
  }

  render(): ComponentChild {
    let displayedControls: ControlWrapper[] = [];
    // const dropdownControls = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    switch (this.props.playerSize) {
      case PLAYER_SIZE.TINY:
        displayedControls = [];
        break;
      case PLAYER_SIZE.EXTRA_SMALL:
      case PLAYER_SIZE.SMALL:
        displayedControls = this.state.controls.slice(0, 2);
        displayedControls.push(this.moreIcon);
        break;
      default:
        displayedControls = this.state.controls.slice(0, 4);
        displayedControls.push(this.moreIcon);
    }
    // eslint-disable-next-line no-console
    console.log('1111', this.props, displayedControls);
    return (
      <div className={styles.rightUpperBarWrapperContainer}>
        {displayedControls.map(({ id, component, onClick, isActive, iconComponentRef }) => {
          const ControlComponent: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps> = component!;
          return (
            <RightUpperBarControlWrapper key={id} ref={iconComponentRef} onClick={onClick}>
              <ControlComponent isActive={isActive} />
            </RightUpperBarControlWrapper>
          );
        })}
      </div>
    );
  }
}
