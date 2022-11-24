import { h, Component, ComponentChild } from 'preact';
import * as styles from './dropdown-bar.component.scss';
import { IconModel } from '../../models/icon-model';
import { ui } from 'kaltura-player-js';
const { Icon } = ui.Components;
const { KeyMap } = ui.utils;

type DropdownBarProps = {
  controls: IconModel[];
};

export class DropdownBar extends Component<DropdownBarProps> {
  private handleOnKeyDown(event: KeyboardEvent, onClick: () => void): void {
    if (event.keyCode === KeyMap.ENTER || event.keyCode === KeyMap.SPACE) {
      event.preventDefault();
      onClick();
    }
  }
  render(): ComponentChild {
    return (
      <div className={styles.moreDropdown}>
        {this.props.controls.map(({ id, label, svgIcon, onClick }, index) => {
          return (
            <div
              key={id}
              className={styles.dropdownItem}
              onClick={onClick}
              tabIndex={0}
              onKeyDown={(event): void => this.handleOnKeyDown(event, onClick)}
            >
              <div className={styles.icon}>
                <Icon id={`icon${index}`} path={svgIcon.path} viewBox={svgIcon.viewBox} />
              </div>
              <span className={styles.dropdownItemDescription}>{label}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
