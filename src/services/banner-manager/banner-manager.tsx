import { FloatingItem } from '../floating-manager/ui/floating-item';
import { FloatingManager } from '../floating-manager/floating-manager';
import { FloatingItemProps } from '../floating-manager/models/floating-item-data';
import { ComponentChild, h } from 'preact';
import { Banner } from './ui/banner';
import { BannerContainerProps, BannerContainer } from './ui/banner-container/banner-container';
import { getPlayerSize } from '@playkit-js/common/dist/ui-common/player-utils';

import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
import { BannerContent } from './models/banner-content';

export interface BannerConfig {
  theme: {
    backgroundColor: string;
    blur: string;
  };
}

export interface BannerOptions {
  content: BannerContent;
  autoClose?: boolean;
  duration?: number;
  renderContent?: (content: BannerContent, floatingItemProps: FloatingItemProps) => ComponentChild;
}

export interface BannerManagerOptions {
  floatingManager: FloatingManager;
  kalturaPlayer: KalturaPlayer;
}

export interface BannerState {
  visibilityMode: VisibilityMode;
}

export enum VisibilityMode {
  VISIBLE = 'VISIBLE',
  HIDDEN = 'HIDDEN'
}

const MinPlayerWidth = 480;
const DefaultDuration: number = 60 * 1000;
const MinDuration: number = 5 * 1000;

/**
 * banner manager manages the display (add / remove) of a single banner in the player.
 */
export class BannerManager {
  private _options: BannerManagerOptions;
  private _floatingItem: FloatingItem | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _timerSubscription: any | undefined = undefined;
  private _bannerConfig: BannerConfig;

  constructor(private options: BannerManagerOptions) {
    this._options = options;

    this._bannerConfig = {
      theme: {
        backgroundColor: 'rgba(0, 0, 0, .7)',
        blur: '10px'
      }
    };
  }

  public add(props: BannerOptions): BannerState {
    if (this._floatingItem) {
      this.remove();
    }
    this._floatingItem = this._options.floatingManager.add({
      label: 'Banner',
      mode: 'Immediate',
      position: 'InteractiveArea',
      renderContent: this._createRenderBanner(props, {
        onClose: this._handleCloseEvent.bind(this),
        theme: this._bannerConfig.theme
      })
    });
    if (props.autoClose) {
      this._startDurationTimer(props.duration);
    }
    return this._getState();
  }

  public remove(): void {
    if (this._floatingItem) {
      if (this._timerSubscription) clearTimeout(this._timerSubscription);
      this._options.floatingManager.remove(this._floatingItem);
      this._floatingItem = null;
    }
  }

  public reset(): void {
    this.remove();
  }

  private _createRenderBanner({ content, renderContent }: BannerOptions, { onClose, theme }: BannerContainerProps) {
    function _renderContent(floatingItemProps: FloatingItemProps) {
      return (
        <BannerContainer onClose={onClose} theme={theme}>
          {renderContent ? renderContent(content, floatingItemProps) : <Banner content={content} />}
        </BannerContainer>
      );
    }
    return _renderContent;
  }

  private _handleCloseEvent(): void {
    this.remove();
  }

  private _startDurationTimer(displayDuration: number = DefaultDuration): void {
    this._timerSubscription = setTimeout(this.remove.bind(this), Math.max(MinDuration, displayDuration));
  }

  private _getState(): BannerState {
    const playerSize = getPlayerSize(this._options.kalturaPlayer);
    return {
      visibilityMode: !playerSize || playerSize.width < MinPlayerWidth ? VisibilityMode.HIDDEN : VisibilityMode.VISIBLE
    };
  }
}
