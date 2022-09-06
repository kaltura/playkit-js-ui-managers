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
    this.iconId = null;
    this.addUpperBarIcon();
  }

  addUpperBarIcon() {
    this.player.ready().then(() => {
      this.iconId = this.player.getService('upperBarManager').add({
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

  destroy() {
    this.player.getService('upperBarManager').remove(this.iconId);
  }
}

registerPlugin(pluginName, PluginB);
