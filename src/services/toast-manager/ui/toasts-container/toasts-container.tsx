import { Component, h } from 'preact';
import { Toast, ToastProps } from '../toast/toast';

import * as styles from './toasts-container.scss';

export interface ToastsContainerProps {
  toasts: ToastProps[];
}

export class ToastsContainer extends Component<ToastsContainerProps> {
  render() {
    return (
      <div className={styles.toastsContainer} aria-live="polite">
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
