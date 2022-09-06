const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon }, 'A');
  }
}

export const pluginName = 'pluginA';

export class PluginA extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginAId = this.player.getService('upperBarManager').add({
        label: 'Plugin A',
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
