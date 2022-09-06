import { BasePlugin, registerPlugin, ui } from 'kaltura-player-js';
const { h, preact } = ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'F');
  }
}

export const pluginName = 'pluginF';

export class PluginF extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginFId = this.player.getService('upperBarManager').add({
        label: 'pluginF',
        component: IconComponent,
        onClick: () => alert('hello from plugin F')
      });
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginF);
