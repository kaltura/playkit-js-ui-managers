import { h, Component, ComponentChild } from 'preact';
import * as styles from './dropdown-bar.component.scss';
import { IconModel } from '../../models/icon-model';
import { KalturaPlayer, ui } from '@playkit-js/kaltura-player-js';
import { DropdownBarItem } from '../dropdown-bar-item/dropdown-bar-item';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { Scrollable } = ui.Components;

type DropdownBarProps = {
  controls: IconModel[];
  onDropdownClick: () => void;
  player: KalturaPlayer;
};

const PADDING_FROM_BOTTOM = 16;

export class DropdownBar extends Component<DropdownBarProps> {
  calculateMaxHeight(): number {
    const playerHeight = this.props.player.getVideoElement().clientHeight;
    // taking the topBarMaxHeight from the window because ui-managers repo is not working with updated ui version
    // once aligning ui-managers with latest ui we can import ui and get the topBarMaxHeight from there, instead of window
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return playerHeight - Number(window.KalturaPlayer.ui.style.topBarMaxHeight) - PADDING_FROM_BOTTOM;
  }

  render(): ComponentChild {
    const maxHeightStyle = this.calculateMaxHeight();
    const dropDownProps = {
      className: styles.moreDropdown,
      role: 'menu',
      ariaExpanded: true,
      style: { maxHeight: `${maxHeightStyle}px` }
    };

    const controlsLength = this.props.controls.length;
    return (
      <div {...dropDownProps}>
        <Scrollable isVertical={true}>
          {this.props.controls.map(({ id, displayName, ariaLabel, svgIcon, onClick }: IconModel, index: number) => {
            const icon = typeof svgIcon === 'function' ? svgIcon() : svgIcon;
            const text = typeof ariaLabel === 'function' ? ariaLabel() : ariaLabel;
            return (
              <DropdownBarItem
                key={id}
                displayName={displayName}
                text={text}
                icon={icon}
                onClick={onClick}
                onDropdownClick={this.props.onDropdownClick}
                tooltipPosition={index === controlsLength - 1 ? 'top' : 'bottom'}
              />
            );
          })}
        </Scrollable>
      </div>
    );
  }
}
