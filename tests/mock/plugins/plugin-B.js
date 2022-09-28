import { BasePlugin, registerPlugin, ui } from 'kaltura-player-js';
const { h, preact } = ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'B');
  }
}

export const pluginName = 'pluginB';

export class PluginB extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginBId = this.player.getService('upperBarManager').add({
        label: 'pluginB',
        component: IconComponent,
        onClick: () => alert('hello from plugin B')
      });
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginB);
