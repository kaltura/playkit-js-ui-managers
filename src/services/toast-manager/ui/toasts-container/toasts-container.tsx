import { Component, h } from 'preact';
import { Toast, ToastProps } from '../toast/toast';

import * as styles from './toasts-container.scss';
import { ToastType } from '../../models';

export interface ToastsContainerProps {
  toasts: ToastProps[];
  toastType?: ToastType;
}

export class ToastsContainer extends Component<ToastsContainerProps> {
  render() {
    const className = [styles.toastsContainer, styles[`${this.props.toastType || ToastType.BottomLeft}`]];
    return (
      <div className={className.join(' ')} aria-live="polite">
        {this.props.toasts.map((toast) => {
          return (
            <div className={styles.toastRow} key={toast.id}>
              <Toast {...toast} />
            </div>
          );
        })}
      </div>
    );
  }
}
