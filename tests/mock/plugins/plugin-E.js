import { BasePlugin, registerPlugin, ui } from '@playkit-js/kaltura-player-js';
const { h, preact } = ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'E');
  }
}

export const pluginName = 'pluginE';

export class PluginE extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginEId = this.player.getService('upperBarManager').add({
        label: 'pluginE',
        component: IconComponent,
        onClick: () => alert('hello from plugin E')
      });
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginE);
