import { h, Component, ComponentChild, RefObject, cloneElement, VNode, Fragment } from 'preact';
import { Button } from '@playkit-js/common/dist/components/button';
import * as styles from './panel-item-wrapper.component.scss';
import { ui } from '@playkit-js/kaltura-player-js';
import { DraggableWrapper } from '../draggable-wrapper';

const { defaultTransitionTime } = ui.style;
// @ts-ignore
const { createPortal } = KalturaPlayer.ui;

type PanelItemWrapperState = {
  on: boolean;
  detachRef: HTMLDivElement | null;
};

type PanelItemWrapperProps = {
  ref: RefObject<PanelItemWrapper>;
};

/**
 * PanelItemWrapper component
 * @internal
 */
export class PanelItemWrapper extends Component<PanelItemWrapperProps, PanelItemWrapperState> {
  private switchMode: boolean;
  constructor() {
    super();
    this.state = { on: false, detachRef: null };
    this.switchMode = false;
  }

  on(): void {
    this.setState({ on: true });
  }

  off(switchMode: boolean): void {
    this.switchMode = switchMode;
    this.setState({ on: false });
  }

  public isDetached(): boolean {
    return Boolean(this.state.detachRef);
  }

  public detach(detachRef: any): void {
    this.setState({ detachRef });
  }

  public attach = (): void => {
    this.state.detachRef?.remove();
    this.setState({ detachRef: null });
  };

  render(): ComponentChild {
    const node = cloneElement(this.props.children as VNode);
    return (
      <div
        className={[styles.sidePanelWrapper, this.state.on ? styles.activeState : ''].join(' ')}
        style={!this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : ''}
      >
        {this.state.detachRef ? (
          <Fragment>
            {createPortal(<DraggableWrapper detachRef={this.state.detachRef}>{node}</DraggableWrapper>, this.state.detachRef)}
            <Button className={styles.attachButton} onClick={this.attach}>
              Attach
            </Button>
          </Fragment>
        ) : (
          node
        )}
      </div>
    );
  }
}
