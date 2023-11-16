import { BasePlugin, KalturaPlayer } from '@playkit-js/kaltura-player-js';
import { SidePanelsManager } from './services/side-panels-manager/side-panels-manager';
import { UpperBarManager } from './services/upper-bar-manager/upper-bar-manager';
import { UiManagerConfig } from './types/ui-managers-config';
import { FloatingManager } from './services/floating-manager/floating-manager';
import { PresetManager } from './services/preset-manager/preset-manager';

export const pluginName = 'uiManagers';

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

  constructor(name: string, player: KalturaPlayer, config?: UiManagerConfig) {
    super(name, player, config);
    player.registerService('sidePanelsManager', new SidePanelsManager(player, this.logger));
    player.registerService('upperBarManager', new UpperBarManager(player, this.logger, this.config.upperBarManager));
    const presetManager = new PresetManager({
      kalturaPlayer: player,
      eventManager: this.eventManager
    });
    player.registerService(
      'floatingManager',
      new FloatingManager({ presetManager, kalturaPlayer: player, eventManager: this.eventManager })
    );
  }

  public static isValid(): boolean {
    return true;
  }
}
