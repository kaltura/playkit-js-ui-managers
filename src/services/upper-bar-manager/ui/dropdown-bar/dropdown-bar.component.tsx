import { h, Component, ComponentChild, createRef, RefObject } from 'preact';
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
  onReturnFocusToButton: () => void;
};

type DropdownBarState = {
  focusedIndex: number;
};

const PADDING_FROM_BOTTOM = 16;

export class DropdownBar extends Component<DropdownBarProps, DropdownBarState> {
  private itemRefs: RefObject<HTMLDivElement>[] = [];
  private containerRef: RefObject<HTMLDivElement> = createRef();

  constructor(props: DropdownBarProps) {
    super(props);
    this.state = { focusedIndex: 0 };
    this.itemRefs = props.controls.map(() => createRef());
  }

  componentDidUpdate(prevProps: DropdownBarProps): void {
    // Rebuild refs if controls array length changes
    if (prevProps.controls.length !== this.props.controls.length) {
      this.itemRefs = this.props.controls.map(() => createRef());
      // Reset focus index if it's now out of bounds
      if (this.state.focusedIndex >= this.props.controls.length) {
        this.setState({ focusedIndex: 0 }, () => {
          // Focus first item after render completes with new refs
          this.itemRefs[0]?.current?.focus();
        });
      }
    }
  }

  public focusFirstItem = (): void => {
    this.setState({ focusedIndex: 0 }, () => {
      this.itemRefs[0]?.current?.focus();
    });
  };

  private handleKeyDown = (e: KeyboardEvent): void => {
    const { focusedIndex } = this.state;
    const itemCount = this.props.controls.length;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.moveFocus((focusedIndex + 1) % itemCount);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.moveFocus((focusedIndex - 1 + itemCount) % itemCount);
        break;
      case 'Escape':
        e.preventDefault();
        this.props.onDropdownClick(); // Close dropdown
        this.props.onReturnFocusToButton();
        break;
      case 'Tab':
        // Close dropdown and let default tab behavior happen
        this.props.onDropdownClick();
        break;
    }
  };

  private moveFocus = (newIndex: number): void => {
    this.setState({ focusedIndex: newIndex }, () => {
      this.itemRefs[newIndex]?.current?.focus();
    });
  };
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
      style: { maxHeight: `${maxHeightStyle}px` },
      ref: this.containerRef,
      tabIndex: -1,
      onKeyDown: this.handleKeyDown
    };

    const controlsLength = this.props.controls.length;
    return (
      <div {...dropDownProps}>
        <Scrollable isVertical={true}>
          {this.props.controls.map(
            ({ id, displayName, label, ariaLabel, svgIcon, onClick, isDisabled }: IconModel, index: number) => {
              const icon = typeof svgIcon === 'function' ? svgIcon() : svgIcon;
              const text = typeof label === 'function' ? label() : label;
              const ariaLabelText = typeof ariaLabel === 'function' ? ariaLabel() : ariaLabel;
              const isDisabledValue = typeof isDisabled === 'function' ? isDisabled() : isDisabled;
              return (
                <DropdownBarItem
                  key={id}
                  ref={this.itemRefs[index]}
                  displayName={displayName}
                  text={text}
                  ariaLabel={ariaLabelText}
                  isDisabled={isDisabledValue}
                  icon={icon}
                  onClick={onClick}
                  onDropdownClick={this.props.onDropdownClick}
                  tooltipPosition={index === controlsLength - 1 ? 'top' : 'bottom'}
                />
              );
            }
          )}
        </Scrollable>
      </div>
    );
  }
}
