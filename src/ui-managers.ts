import { BasePlugin, KalturaPlayer } from 'kaltura-player-js';
import { SidePanelsManager } from './services/side-panels/side-panels-manager';
import { UpperBarManager } from './services/upper-bar/upper-bar-manager';

export const pluginName = 'uiManagers';

export type KalturaPluginNames =
  | 'Navigation'
  | 'Q&A'
  | 'Transcript'
  | 'Download'
  | 'Playlist'
  | 'Related'
  | 'Share'
  | 'Info'
  | 'Moderation';

export type UiManagerConfig = {
  upperBarManager: {
    pluginsIconsOrder: {
      [key in KalturaPluginNames | string]: number;
    };
  };
};

/**
 * manages the registration of UI services
 * @internal
 */
export class UIManagers extends BasePlugin<UiManagerConfig> {
  protected static defaultConfig: UiManagerConfig = {
    upperBarManager: {
      pluginsIconsOrder: {
        Navigation: 10,
        'Q&A': 20,
        Transcript: 30,
        Download: 40,
        Playlist: 50,
        Related: 60,
        Share: 70,
        Info: 80,
        Moderation: 90
      }
    }
  };

  constructor(name: string, player: KalturaPlayer, config: UiManagerConfig) {
    super(name, player, config);
    player.registerService('sidePanelsManager', new SidePanelsManager(player, this.logger));
    player.registerService('upperBarManager', new UpperBarManager(player, this.logger, this.config.upperBarManager));
  }

  public static isValid(): boolean {
    return true;
  }
}
