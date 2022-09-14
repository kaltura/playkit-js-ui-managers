import { h, Component, ComponentChild, createRef, RefObject, Fragment } from 'preact';
import { PlaykitUI, ui } from 'kaltura-player-js';
import * as styles from './more-icon.component.scss';
import { IconModel } from '../../models/icon-model';
import { DropdownBar } from '../dropdown-bar/dropdown-bar.component';
import EventManager = PlaykitUI.EventManager;

const { Icon, Tooltip } = ui.Components;
const { withEventManager } = ui.Event;
const { withText } = ui.preacti18n;
const ICON_PATH =
  // eslint-disable-next-line max-len
  'M16 22a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z';

type MoreIconState = {
  toggle: boolean;
};
type MoreIconProps = {
  icons: IconModel[];
  moreIconTxt?: string;
  eventManager?: EventManager;
};

@withEventManager
@withText({ moreIconTxt: 'controls.moreIcon' })
export class MoreIcon extends Component<MoreIconProps, MoreIconState> {
  private readonly moreButtonRef: RefObject<HTMLButtonElement>;
  constructor() {
    super();
    this.state = { toggle: false };
    this.moreButtonRef = createRef();
  }

  componentDidMount(): void {
    this.props.eventManager!.listen(document, 'click', (e: PointerEvent) => this.handleClickOutside(e));
  }

  handleClickOutside(event: PointerEvent): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this.moreButtonRef && !this.moreButtonRef.current!.contains(event.target)) {
      this.setState({ toggle: false });
    }
  }

  private handleOnClick(): void {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  }

  private handleOnKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({ toggle: true });
    }
  }

  // close icon when click outside
  render(): ComponentChild {
    return (
      <>
        <div style={{ position: 'relative' }}>
          <Tooltip label={this.props.moreIconTxt!}>
            <button
              ref={this.moreButtonRef}
              className={`${ui.style.upperBarIcon} ${styles.moreIcon}`}
              onClick={(): void => this.handleOnClick()}
              onKeyDown={(event): void => this.handleOnKeyDown(event)}
              tabIndex={0}
              aria-label={this.props.moreIconTxt}
            >
              <Icon color={'#FFF'} id={'id111'} path={ICON_PATH} viewBox={'0 0 32 32'} />
            </button>
          </Tooltip>
          {this.state.toggle && (
            <div>
              <DropdownBar controls={this.props.icons} />
            </div>
          )}
        </div>
      </>
    );
  }
}
