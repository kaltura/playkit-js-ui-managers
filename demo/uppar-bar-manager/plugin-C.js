const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

const ICON_PATH = 'M11.6592 10.245L6.70483 5.29061C6.31701 4.9028 5.68581 4.90476 5.29528 5.29528C4.90204 5.68853 4.90267 6.31688 5.29061 6.70483L10.245 11.6592L5.29061 16.6137C4.9028 17.0015 4.90476 17.6327 5.29528 18.0232C5.68853 18.4165 6.31688 18.4158 6.70483 18.0279L11.6592 13.0735L16.6137 18.0279C17.0015 18.4157 17.6327 18.4137 18.0232 18.0232C18.4165 17.63 18.4158 17.0016 18.0279 16.6137L13.0735 11.6592L18.0279 6.70483C18.4157 6.31701 18.4137 5.68581 18.0232 5.29528C17.63 4.90204 17.0016 4.90267 16.6137 5.29061L11.6592 10.245Z'

class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon, tabIndex: 0 }, 'C');
  }
}

export const pluginName = 'pluginC';

export class PluginC extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.iconId = null;
    this.addUpperBarIcon();
  }

  addUpperBarIcon() {
    this.player.ready().then(() => {
      this.iconId = this.player.getService('upperBarManager').add({
        displayName: 'Plugin-C',
        ariaLabel: 'Plugin-C',
        svgIcon: {path: ICON_PATH},
        component: IconComponent,
        onClick: () => alert('hello from plugin C')
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

registerPlugin(pluginName, PluginC);
