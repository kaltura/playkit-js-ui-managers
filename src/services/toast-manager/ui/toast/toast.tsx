import { Component, h } from 'preact';
import * as styles from './toast.scss';
import { ToastSeverity } from '../../models/toast-severity';
import { Icon, IconSize } from '@playkit-js/common/dist/icon';

export interface ToastProps {
  id: string;
  title: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  severity: ToastSeverity;
  onClose: (id: string) => void;
  onClick: () => void;
}

interface ToastState {
  isShown: boolean;
}

export class Toast extends Component<ToastProps, ToastState> {
  public state = {
    isShown: true
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _onClick = (e: any) => {
    this.props.onClick();
    this._onClose(e);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _onClose = (e: any) => {
    e.stopPropagation();
    this.setState({ isShown: false });
    this.props.onClose(this.props.id);
  };

  private _getToastSeverityClass(): string {
    switch (this.props.severity) {
      case 'Success':
        return styles.successToast;
      case 'Warning':
        return styles.warnToast;
      case 'Error':
        return styles.errorToast;
      default:
        //info
        return styles.infoToast;
    }
  }

  render() {
    const { text, title, icon } = this.props;

    return (
      <div className={styles.toastWrapper + ' ' + this._getToastSeverityClass()} onClick={this._onClick}>
        <button className={styles.closeButton} onClick={this._onClose}>
          {/* <CloseIcon /> */}

          <Icon size={IconSize.small} name="close" />
        </button>
        <div className={styles.title}>{title}</div>
        <div className={styles.toastBody}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>{icon}</div>
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    );
  }
}
