// eslint-disable-next-line no-undef
const {BasePlugin, registerPlugin} = KalturaPlayer;

import {AnotherIconComponent, AnotherPanelItemComponent, IconComponent, PanelItemComponent} from './components.js';

export const pluginName = 'somePlugin';

export class somePlugin extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
  }

  loadMedia() {
    const aa = this.player.getService('sidePanelsManager').addItem({
      label: 'A',
      expandMode: 'alongside',
      renderIcon: IconComponent,
      position: 'left',
      renderContent: PanelItemComponent,
    });

    // eslint-disable-next-line no-console
    console.log('1212', aa);

    this.player.getService('sidePanelsManager').addItem({
      label: 'B',
      expandMode: 'alongside',
      renderIcon: AnotherIconComponent,
      position: 'right',
      renderContent: AnotherPanelItemComponent,
    });
  }

  static isValid() {
    return true;
  }
}

registerPlugin(pluginName, somePlugin);
