import { h, Component, ComponentChild, createRef, RefObject, Fragment } from 'preact';
import { ui } from 'kaltura-player-js';
import * as styles from './more-icon.component.scss';
import { IconModel } from '../../models/icon-model';
import { DropdownBar } from '../dropdown-bar/dropdown-bar.component';

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
  eventManager?: any;
};

@withEventManager
@withText({ moreIconTxt: 'controls.moreIcon' })
export class MoreIcon extends Component<MoreIconProps, MoreIconState> {
  private myRef: RefObject<HTMLDivElement>;
  constructor() {
    super();
    this.state = { toggle: false };
    this.myRef = createRef();
  }

  componentDidMount() {
    this.props.eventManager.listen(document, 'click', (e: PointerEvent) => this.handleClickOutside(e));
  }

  handleClickOutside(event: PointerEvent) {
    // @ts-ignore
    if (this.myRef && !this.myRef.current!.contains(event.target)) {
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
            <div
              ref={this.myRef}
              className={`${ui.style.upperBarIcon} ${styles.moreIcon}`}
              onClick={(): void => this.handleOnClick()}
              onKeyDown={(event): void => this.handleOnKeyDown(event)}
              tabIndex={0}
              aria-label={this.props.moreIconTxt}
            >
              <Icon color={'#FFF'} id={'id111'} path={ICON_PATH} viewBox={'0 0 32 32'} />
            </div>
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
