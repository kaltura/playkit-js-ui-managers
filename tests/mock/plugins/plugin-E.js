const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon }, 'E');
  }
}

export const pluginName = 'pluginE';

export class PluginE extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.player.ready().then(() => {
      const pluginEId = this.player.getService('upperBarManager').add({
        label: 'Plugin E',
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
