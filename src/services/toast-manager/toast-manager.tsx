import { h } from 'preact';

import { UUID } from '@playkit-js/common/dist/ui-common/uuid';

import { FloatingManager } from '../floating-manager/floating-manager';

import { FloatingItem } from '../floating-manager/ui/floating-item';

import { ToastProps } from './ui/toast/toast';

import { ToastSeverity, ToastType } from './models';

import { ToastsContainer } from './ui/toasts-container/toasts-container';
import { UiManagersEvent } from '../../event-type/ui-managers-event';

export interface ToastManagerOptions {
  floatingManager: FloatingManager;
  dispatchEvent: (event: string) => void;
}

export interface ToastItemData {
  title: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  severity: ToastSeverity;
  duration: number;
  onClick: () => void;
  toastType?: ToastType;
}

interface ManagedToasts {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timerSubscription: any;
  duration: number;
  toastProps: ToastProps;
}

export class ToastManager {
  private _options: ToastManagerOptions;
  private _toasts: ManagedToasts[] = [];
  private _floatingItem: FloatingItem | null = null;
  private _dispatchEvent: (event: string) => void;

  constructor(private options: ToastManagerOptions, private dispatchEvent: (event: string) => void) {
    this._options = options;
    this._dispatchEvent = dispatchEvent;
  }

  public add(data: ToastItemData): void {
    const { duration, toastType, ...props } = data;
    if (!this._floatingItem) this._addToastsContainer(toastType);
    const managedToast = {
      toastProps: {
        ...props,
        id: UUID.uuidV1(),
        onClose: this._remove
      },
      duration: duration,
      timerSubscription: null
    };
    this._toasts.push(managedToast);
    this._updateToastsUI();
    this._startDurationTimer(managedToast);
    this.dispatchEvent(UiManagersEvent.UPDATE_COMPONENTS);
  }

  public reset(): void {
    this._toasts.forEach((managedToast) => {
      this._remove(managedToast.toastProps.id);
    });
  }

  private _startDurationTimer(managedToast: ManagedToasts): void {
    managedToast.timerSubscription = setTimeout(() => {
      this._remove(managedToast.toastProps.id);
    }, managedToast.duration);
  }

  private _remove = (id: string): void => {
    const index = this._findToastIndexById(id);
    if (index === -1) return;

    clearTimeout(this._toasts[index].timerSubscription);
    this._toasts.splice(index, 1);
    this._updateToastsUI();
    if (this._toasts.length === 0) this._removeToastsContainer();
  };

  private _addToastsContainer(toastType?: ToastType): void {
    this._floatingItem = this._options.floatingManager.add({
      label: 'Toasts',
      mode: 'Immediate',
      position: 'InteractiveArea',
      renderContent: () => {
        return (
          <ToastsContainer
            toastType={toastType || ToastType.BottomLeft}
            toasts={this._toasts.map((toast) => {
              return toast.toastProps;
            })}
          />
        );
      }
    });
  }

  private _removeToastsContainer(): void {
    if (!this._floatingItem) return;

    this._options.floatingManager.remove(this._floatingItem);
    this._floatingItem = null;
  }

  private _updateToastsUI(): void {
    if (this._floatingItem) this._floatingItem.update();
  }

  private _findToastIndexById(id: string): number {
    let index = 0;
    while (index < this._toasts.length) {
      if (this._toasts[index].toastProps.id === id) {
        return index;
      }
      index++;
    }
    return -1;
  }
}
