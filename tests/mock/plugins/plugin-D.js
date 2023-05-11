import { BasePlugin, registerPlugin, ui } from '@playkit-js/kaltura-player-js';
const { h, preact } = ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'D');
  }
}

export const pluginName = 'pluginD';

export class PluginD extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginDId = this.player.getService('upperBarManager').add({
        label: 'pluginD',
        component: IconComponent,
        onClick: () => alert('hello from plugin D')
      });
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginD);
