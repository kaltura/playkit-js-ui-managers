import { h } from 'preact';
import { FloatingItemData, FloatingItemProps } from '../models/floating-item-data';

import { ManagedComponent } from '../../preset-manager/ui/managed-component';

import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';

export interface FloatingItemOptions {
  kalturaPlayer: KalturaPlayer;
  eventManager: PlaykitUI.EventManager;
  data: FloatingItemData;
}

export class FloatingItem {
  private _options: FloatingItemOptions;
  private _isShown = false;
  private _componentRef: ManagedComponent | null = null;

  constructor(options: FloatingItemOptions) {
    this._options = options;

    this._addPlayerBindings();
  }

  public get data(): FloatingItemData {
    return this._options.data;
  }

  public remove = (): void => {
    this._isShown = false;
    if (!this._componentRef) {
      return;
    }

    this._componentRef.update();
  };

  public add = (): void => {
    this._isShown = true;
    if (!this._componentRef) {
      return;
    }

    this._componentRef.update();
  };

  public update = (): void => {
    if (!this._componentRef) {
      return;
    }

    this._componentRef.update();
  };

  /**
   * destory the ui item
   */
  destroy(): void {
    this.remove();
  }

  renderFloatingChild(props: FloatingItemProps) {
    const { label } = this._options.data;

    return (
      <ManagedComponent
        label={label}
        renderChildren={() => this._options.data.renderContent(props)}
        isShown={() => this._isShown}
        ref={(ref: ManagedComponent | null): void => {
          this._componentRef = ref;
        }}
      />
    );
  }

  private _addPlayerBindings(): void {
    const { kalturaPlayer, data, eventManager } = this._options;

    if (data.mode === 'MediaLoaded') {
      eventManager.listenOnce(kalturaPlayer, kalturaPlayer.Event.Core.MEDIA_LOADED, this.add);
    }

    if (data.mode === 'FirstPlay') {
      eventManager.listenOnce(kalturaPlayer, kalturaPlayer.Event.Core.FIRST_PLAY, this.add);
    }

    if (data.mode === 'Immediate') {
      this.add();
    }
  }
}
