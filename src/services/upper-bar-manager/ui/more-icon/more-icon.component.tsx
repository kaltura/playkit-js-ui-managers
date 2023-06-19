import { h, Component, ComponentChild, createRef, RefObject } from 'preact';
import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';
import { PlaykitUI, ui } from '@playkit-js/kaltura-player-js';
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

type MoreIconProps = {
  icons: IconModel[];
  onClick: () => void;
  showDropdown: boolean;
  moreIconTxt?: string;
  eventManager?: EventManager;
};

@withEventManager
@withText({ moreIconTxt: <Text id="controls.moreIcon">More</Text> })
export class MoreIcon extends Component<MoreIconProps> {
  private readonly moreButtonRef: RefObject<HTMLButtonElement>;
  constructor() {
    super();
    this.moreButtonRef = createRef();
  }

  componentDidMount(): void {
    this.props.eventManager!.listen(document, 'click', (e: PointerEvent) => this.handleClickOutside(e));
  }

  handleClickOutside(event: PointerEvent): void {
    if (this.moreButtonRef && !this.moreButtonRef.current!.contains(event.target as Node)) {
      this.setState({ toggle: false });
    }
  }

  render(): ComponentChild {
    return (
      <div style={{ position: 'relative' }}>
        <Tooltip label={this.props.moreIconTxt!}>
          <A11yWrapper onClick={this.props.onClick}>
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
        {this.props.showDropdown && (
          <div>
            <DropdownBar onDropdownClick={this.props.onClick} controls={this.props.icons} />
          </div>
        )}
      </div>
    );
  }
}
