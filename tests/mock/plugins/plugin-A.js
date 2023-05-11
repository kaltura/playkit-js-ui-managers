import { BasePlugin, registerPlugin, ui } from '@playkit-js/kaltura-player-js';
const { h, preact } = ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'A');
  }
}

export const pluginName = 'pluginA';

export class PluginA extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginAId = this.player.getService('upperBarManager').add({
        label: 'pluginA',
        component: IconComponent,
        onClick: () => alert('hello from plugin A')
      });
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginA);
