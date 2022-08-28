import { h, Component, ComponentChild } from 'preact';
import * as styles from './dropdown-bar.component.scss';
import { IconModel } from '../../models/icon-model';
import { IconWrapper } from '../icon-wrapper/icon-wrapper.component';

type DropdownBarProps = {
  controls: IconModel[];
};

export class DropdownBar extends Component<DropdownBarProps> {
  render(): ComponentChild {
    return (
      <div className={styles.moreDropdown}>
        {this.props.controls.map(({ id, label, component, onClick }) => {
          const ControlComponent = component!;
          return (
            <div key={id} className={styles.dropdownItem} onClick={onClick}>
              <IconWrapper
                onClick={(): void => {
                  return;
                }}
              >
                <ControlComponent />
              </IconWrapper>
              <span className={styles.dropdownItemDescription}>{label}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
