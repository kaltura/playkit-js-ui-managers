import {BasePlugin} from 'kaltura-player-js';
import {SidePanelsManager} from './services/side-panels/side-panels-manager';

export const pluginName = 'uiManagers';
export class UIManagersPlugin extends BasePlugin {
  static defaultConfig = {};

  constructor(name: string, player: any) {
    super(name, player);
    player.registerService('sidePanelsManager', new SidePanelsManager(player, this.logger));
  }

  reset(): void {
    return;
  }

  destroy(): void {
    return;
  }

  static isValid(): boolean {
    return true;
  }
}
