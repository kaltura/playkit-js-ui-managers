import { h, Component, ComponentChild, createRef, RefObject } from 'preact';
import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';
import { PlaykitUI, ui } from 'kaltura-player-js';
import * as styles from './more-icon.component.scss';
import { IconModel } from '../../models/icon-model';
import { DropdownBar } from '../dropdown-bar/dropdown-bar.component';
import EventManager = PlaykitUI.EventManager;
import { pluginName } from '../../../../ui-managers';

const { Icon, Tooltip } = ui.Components;
const { withEventManager } = ui.Event;
const { withText, Text } = ui.preacti18n;
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
@withText({ moreIconTxt: <Text id="controls.moreIcon">More</Text> })
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

  private handleOnClick = (): void => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  // close icon when click outside
  render(): ComponentChild {
    return (
      <div style={{ position: 'relative' }}>
        <Tooltip label={this.props.moreIconTxt!}>
          <A11yWrapper onClick={this.handleOnClick}>
            <button
              ref={this.moreButtonRef}
              className={`${ui.style.upperBarIcon} ${styles.moreIcon}`}
              tabIndex={0}
              aria-label={this.props.moreIconTxt}
            >
              <Icon id={`${pluginName}-upper-bar-manager`} path={ICON_PATH} viewBox={'0 0 32 32'} />
            </button>
          </A11yWrapper>
        </Tooltip>
        {this.state.toggle && (
          <div>
            <DropdownBar controls={this.props.icons} />
          </div>
        )}
      </div>
    );
  }
}
