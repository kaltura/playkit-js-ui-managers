import { h, Component, ComponentChild, ComponentClass, FunctionalComponent } from 'preact';
import * as styles from './dropdown.scss';
import { ControlWrapper } from '../../models/control-wrapper';
import { RightUpperBarControlWrapper } from '../right-upper-bar-control-wrapper/right-upper-bar-control-wrapper.component';
import { UpperBarControlProps } from '../../models/upper-bar-control-dto';

type DropdownProps = {
  controls: ControlWrapper[];
};

/**
 * IconWrapper component
 * @internal
 */
export class Dropdown extends Component<DropdownProps> {
  render(): ComponentChild {
    return (
      <div className={styles.moreDropdown}>
        {/*{this.props.controls.map(({ id, label, component, onClick, isActive, iconComponentRef }) => {*/}
        {this.props.controls.map(({ id, label, component, onClick, iconComponentRef }) => {
          const ControlComponent: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps> = component!;
          return (
            <div key={id} className={styles.dropdownItem} onClick={onClick}>
              <RightUpperBarControlWrapper
                ref={iconComponentRef}
                onClick={(): void => {
                  return;
                }}
              >
                {/*<ControlComponent isActive={isActive} />*/}
                <ControlComponent />
              </RightUpperBarControlWrapper>
              <span className={styles.dropdownItemDescription}>{label}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
