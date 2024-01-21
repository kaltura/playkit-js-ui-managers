import { BasePlugin, registerPlugin, ui } from '@playkit-js/kaltura-player-js';
const { h, preact } = ui;

const ICON_PATH = 'M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm0 9a1 1 0 0 1 1 .99v4.02a.992.992 0 0 1-.883.983L16 21a1 1 0 0 1-1-.99v-4.02c0-.507.383-.926.883-.983L16 15zm0-4.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z'


class IconComponent extends preact.Component {
  render() {
    return h('div', null, 'B');
  }
}

export const pluginName = 'Plugin-B';

export class PluginB extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player, config) {
    super(name, player, config);
    this.player.ready().then(() => {
      this.addUpperBarIcon(config.iconOrder);
    });
  }

  addUpperBarIcon(iconOrder) {
    this.player.getService('upperBarManager').add({
      displayName: pluginName,
      ariaLabel: pluginName,
      order: iconOrder,
      svgIcon: {path: ICON_PATH},
      component: IconComponent,
      onClick: () => {}
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, PluginB);
