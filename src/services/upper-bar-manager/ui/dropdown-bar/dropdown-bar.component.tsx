import { h, Component, ComponentChild } from 'preact';
import * as styles from './dropdown-bar.component.scss';
import { IconModel } from '../../models/icon-model';
import { ui } from 'kaltura-player-js';
import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';
const { Icon } = ui.Components;

type DropdownBarProps = {
  controls: IconModel[];
};

export class DropdownBar extends Component<DropdownBarProps> {
  render(): ComponentChild {
    return (
      <div className={styles.moreDropdown} role="menu" aria-expanded="true">
        {this.props.controls.map(({ id, label, svgIcon, onClick }, index) => {
          return (
            <A11yWrapper onClick={onClick} role="menuitem">
              <div key={id} className={styles.dropdownItem} tabIndex={0} aria-label={label}>
                <div className={styles.icon}>
                  <Icon id={`icon${index}`} path={svgIcon.path} viewBox={svgIcon.viewBox} />
                </div>
                <span className={styles.dropdownItemDescription}>{label}</span>
              </div>
            </A11yWrapper>
          );
        })}
      </div>
    );
  }
}
