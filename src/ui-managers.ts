import { BasePlugin, KalturaPlayer } from 'kaltura-player-js';
import { SidePanelsManager } from './services/side-panels/side-panels-manager';
import { UpperBarManager } from './services/upper-bar/upper-bar-manager';

export const pluginName = 'uiManagers';

/**
 * manages the registration of UI services
 * @internal
 */
export class UIManagers extends BasePlugin {
  protected static defaultConfig = {};

  constructor(name: string, player: KalturaPlayer) {
    super(name, player);
    player.registerService('sidePanelsManager', new SidePanelsManager(player, this.logger));
    player.registerService('upperBarManager', new UpperBarManager(player, this.logger));
  }

  public static isValid(): boolean {
    return true;
  }
}
