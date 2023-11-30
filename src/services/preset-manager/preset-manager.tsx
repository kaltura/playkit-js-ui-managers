import { h } from 'preact';

import { EventsManager } from '@playkit-js/common/dist/ui-common/events-manager';

import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';

import { UIPlayerAdapter } from './ui-player-adapter';
import { PresetItemData } from './models/preset-item-data';
import { PresetItem } from './ui/preset-item';

export interface PresetManagerOptions {
  kalturaPlayer: KalturaPlayer;
  eventManager: PlaykitUI.EventManager;
}

export enum PresetManagerEventTypes {
  PresetResizeEvent = 'PresetResizeEvent',
  VideoResizeEvent = 'VideoResizeEvent'
}

export interface PresetResizeEvent {
  type: PresetManagerEventTypes.PresetResizeEvent;
}

export interface VideoResizeEvent {
  type: PresetManagerEventTypes.VideoResizeEvent;
}

export type PresetManagerEvents = PresetResizeEvent | VideoResizeEvent;

export class PresetManager {
  private _events: EventsManager<PresetManagerEvents> = new EventsManager<PresetManagerEvents>();
  private _eventManager: PlaykitUI.EventManager;
  private _kalturaPlayer: KalturaPlayer;

  constructor(options: PresetManagerOptions) {
    this._eventManager = options.eventManager;
    this._kalturaPlayer = options.kalturaPlayer;
    this.add({
      label: 'preset-manager',
      presetAreas: { Playback: 'PlayerArea', Live: 'PlayerArea' },
      renderChild: () => (
        <UIPlayerAdapter player={options.kalturaPlayer} onMount={this._registerToPlayer} onUnmount={this._unregisterToPlayer} />
      )
    });
  }

  private _registerToPlayer = () => {
    this._eventManager.listen(this._kalturaPlayer, this._kalturaPlayer.Event.UI.UI_PRESET_RESIZE, this._notifyUIPresetResize);
    this._eventManager.listen(this._kalturaPlayer, this._kalturaPlayer.Event.UI.VIDEO_RESIZE, this._notifyVideoResize);
  };

  private _notifyVideoResize = () => {
    this._events.emit({
      type: PresetManagerEventTypes.VideoResizeEvent
    });
  };

  private _notifyUIPresetResize = () => {
    this._events.emit({
      type: PresetManagerEventTypes.PresetResizeEvent
    });
  };

  private _unregisterToPlayer = () => {
    this._eventManager.unlisten(this._kalturaPlayer, this._kalturaPlayer.Event.UI.UI_PRESET_RESIZE, this._notifyUIPresetResize);
    this._eventManager.unlisten(this._kalturaPlayer, this._kalturaPlayer.Event.UI.VIDEO_RESIZE, this._notifyVideoResize);
  };

  public on: EventsManager<PresetManagerEvents>['on'] = this._events.on.bind(this._events);
  public off: EventsManager<PresetManagerEvents>['off'] = this._events.off.bind(this._events);

  public add(data: PresetItemData): void {
    const component = new PresetItem({
      kalturaPlayer: this._kalturaPlayer,
      data
    });

    const configs = component.playerConfig;
    for (const config of configs) {
      const { label, presets, container, get } = config;

      this._kalturaPlayer.ui.addComponent({
        label,
        presets,
        container,
        get
      });
    }
  }
}
