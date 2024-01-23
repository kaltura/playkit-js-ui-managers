import { h, Component, ComponentChild, Fragment } from 'preact';
import * as styles from './dropdown-bar.component.scss';
import { IconModel } from '../../models/icon-model';
import { ui } from '@playkit-js/kaltura-player-js';
import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';
const { Icon } = ui.Components;

type DropdownBarProps = {
  controls: IconModel[];
  onDropdownClick: () => void;
};

export class DropdownBar extends Component<DropdownBarProps> {
  render(): ComponentChild {
    return (
      <div className={styles.moreDropdown} role="menu" aria-expanded="true">
        {this.props.controls.map(({ id, displayName, ariaLabel, svgIcon, onClick }) => {
          return (
            <Fragment key={id}>
              <A11yWrapper
                onClick={(e): void => {
                  onClick(e);
                  this.props.onDropdownClick();
                }}
                role="menuitem"
              >
                <div className={styles.dropdownItem} tabIndex={0} aria-label={ariaLabel}>
                  <div className={styles.icon}>
                    <Icon id={displayName} path={svgIcon.path} viewBox={svgIcon.viewBox || '0 0 32 32'} />
                  </div>
                  <span className={styles.dropdownItemDescription}>{displayName}</span>
                </div>
              </A11yWrapper>
            </Fragment>
          );
        })}
      </div>
    );
  }
}
