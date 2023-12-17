import { ComponentChild, h } from 'preact';
import { PresetManager, PresetManagerEventTypes } from '../preset-manager/preset-manager';
import { ManagedComponent } from '../preset-manager/ui/managed-component';

import { PlayerSize, VideoSize } from '@playkit-js/common/dist/ui-common/common-types';
import { getPlayerSize, getVideoSize } from '@playkit-js/common/dist/ui-common/player-utils';

import { KalturaPlayer, PlaykitUI, Logger } from '@playkit-js/kaltura-player-js';

import { FloatingItem } from './ui/floating-item';
import { FloatingItemData, FloatingItemProps, FloatingPosition } from './models/floating-item-data';
import { ToastEvent } from '../toast-manager/models';

export interface FloatingManagerOptions {
  kalturaPlayer: KalturaPlayer;
  presetManager: PresetManager;
  eventManager: PlaykitUI.EventManager;
  logger: Logger;
}

const areaToPresetMapping = {
  VideoArea: {
    Live: 'VideoArea',
    Playback: 'VideoArea'
  },
  PresetArea: {
    Live: 'PresetArea',
    Playback: 'PresetArea'
  },
  InteractiveArea: {
    Live: 'InteractiveArea',
    Playback: 'InteractiveArea'
  }
};

export class FloatingManager {
  private _eventManager: PlaykitUI.EventManager;
  private _registered = false;
  private _logger: Logger;

  private _items: Record<FloatingPosition, FloatingItem[]> = {
    VideoArea: [],
    InteractiveArea: [],
    PresetArea: []
  };
  private _componentRef: Record<FloatingPosition, ManagedComponent | null> = {
    InteractiveArea: null,
    VideoArea: null,
    PresetArea: null
  };
  private _cache: {
    canvas: {
      playerSize: PlayerSize;
      videoSize: VideoSize;
    };
  } = {
    canvas: {
      playerSize: { width: 0, height: 0 },
      videoSize: { width: 0, height: 0 }
    }
  };

  constructor(private _options: FloatingManagerOptions) {
    Object.keys(areaToPresetMapping).forEach((areaType) => {
      // add floating manager in every preset
      this._options.presetManager.add({
        label: 'floating-manager',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        presetAreas: areaToPresetMapping[areaType],
        renderChild: () => this._renderChild(areaType as FloatingPosition)
      });
    });
    this._logger = _options.logger;
    this._eventManager = _options.eventManager;
    this._addPlayerBindings();
    this._updateCachedCanvas();
  }

  /**
   * initialize new floating ui item
   * @param item
   */
  //TODO push new item to relevant position array according to its' FloatingPositions value
  public add(data: FloatingItemData): FloatingItem | null {
    const { presetManager } = this._options;

    const itemOptions = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      presetManager,
      ...this._options,
      data
    };

    const item = new FloatingItem(itemOptions);
    this._items[data.position as FloatingPosition].push(item);
    return item;
  }

  public remove(item: FloatingItem) {
    const positionItems = this._items[item.data.position as FloatingPosition];
    const itemIndex = positionItems.indexOf(item);
    if (itemIndex > -1) {
      positionItems[itemIndex].destroy();
      positionItems.splice(itemIndex, 1);
    } else {
      this._logger.warn(`couldn't remove ${item} since it wasn't found`);
    }
  }

  public reset(): void {
    const allItems = [...this._items.VideoArea, ...this._items.InteractiveArea, ...this._items.PresetArea];
    allItems.forEach((item) => {
      try {
        item.destroy();
      } catch (e) {
        this._logger.warn(e);
      }
    });

    this._items.VideoArea = [];
    this._items.PresetArea = [];
    this._items.InteractiveArea = [];
  }

  private _getRendererProps(props: Partial<FloatingItemProps>): FloatingItemProps {
    const { kalturaPlayer } = this._options;

    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      currentTime: typeof props.currentTime !== 'undefined' ? props.currentTime : kalturaPlayer.currentTime * 1000,
      canvas: this._cache.canvas
    };
  }

  private _updateCachedCanvas() {
    this._cache.canvas = {
      playerSize: getPlayerSize(this._options.kalturaPlayer),
      videoSize: getVideoSize(this._options.kalturaPlayer)
    };
  }

  private _renderItems = (position: FloatingPosition) => {
    const props = this._getRendererProps({});
    return this._items[position].map((item) => item.renderFloatingChild(props));
  };

  private _renderChild = (position: FloatingPosition): ComponentChild => {
    return (
      <ManagedComponent
        label={'floating-manager'}
        renderChildren={() => this._renderItems(position)}
        isShown={() => true}
        ref={(ref): void => (this._componentRef[position] = ref)}
      />
    );
  };

  private _updateComponents() {
    if (this._componentRef.InteractiveArea) {
      this._componentRef.InteractiveArea.update();
    }

    if (this._componentRef.PresetArea) {
      this._componentRef.PresetArea.update();
    }

    if (this._componentRef.VideoArea) {
      this._componentRef.VideoArea.update();
    }
  }

  private _onTimeUpdate = () => {
    this._updateComponents();
  };

  private _onMediaLoaded = () => {
    this._updateCachedCanvas();
    this._updateComponents();
  };

  private _onLoadedData = () => {
    this._updateCachedCanvas();
    this._updateComponents();
  };

  private _addPlayerBindings() {
    const { kalturaPlayer } = this._options;

    this._eventManager.listen(kalturaPlayer, kalturaPlayer.Event.Core.TIME_UPDATE, this._onTimeUpdate);
    this._eventManager.listen(kalturaPlayer, kalturaPlayer.Event.Core.MEDIA_LOADED, this._onMediaLoaded);
    this._eventManager.listen(kalturaPlayer, kalturaPlayer.Event.Core.LOADED_DATA, this._onLoadedData);

    this._options.presetManager.on(PresetManagerEventTypes.VideoResizeEvent, () => {
      this._updateCachedCanvas();
      this._updateComponents();
    });

    this._options.presetManager.on(PresetManagerEventTypes.PresetResizeEvent, () => {
      this._updateCachedCanvas();
      this._updateComponents();
    });

    this._eventManager.listen(kalturaPlayer, ToastEvent.SHOW_TOAST, () => this._updateComponents());
  }
}
