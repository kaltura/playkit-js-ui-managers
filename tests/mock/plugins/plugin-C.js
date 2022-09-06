import { BasePlugin, registerPlugin, ui } from 'kaltura-player-js';
const { h, preact } = ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'C');
  }
}

export const pluginName = 'pluginC';

export class PluginC extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginCId = this.player.getService('upperBarManager').add({
        label: 'pluginC',
        component: IconComponent,
        onClick: () => alert('hello from plugin C')
      });
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginC);
