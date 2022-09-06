const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon }, 'B');
  }
}

export const pluginName = 'pluginB';

export class PluginB extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginBId = this.player.getService('upperBarManager').add({
        label: 'Plugin B',
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
