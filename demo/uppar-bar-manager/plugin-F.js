const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

const ICON_PATH = 'M8 7H12C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H8C6.89543 15 6 14.1046 6 13V9C6 7.89543 6.89543 7 8 7ZM8 13H12V9H8V13Z M8 18H12C13.1046 18 14 18.8954 14 20V24C14 25.1046 13.1046 26 12 26H8C6.89543 26 6 25.1046 6 24V20C6 18.8954 6.89543 18 8 18ZM8 24H12V20H8V24Z M24 7H20C18.8954 7 18 7.89543 18 9V13C18 14.1046 18.8954 15 20 15H24C25.1046 15 26 14.1046 26 13V9C26 7.89543 25.1046 7 24 7ZM24 13H20V9H24V13Z M20 18H24C25.1046 18 26 18.8954 26 20V24C26 25.1046 25.1046 26 24 26H20C18.8954 26 18 25.1046 18 24V20C18 18.8954 18.8954 18 20 18ZM20 24H24V20H20V24Z';

class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon, tabIndex: 0 }, 'F');
  }
}

export const pluginName = 'pluginF';

export class PluginF extends BasePlugin {
  static defaultConfig = {};


  constructor(name, player) {
    super(name, player);
    this.iconId = null;
    this.addUpperBarIcon();
  }

  addUpperBarIcon() {
    this.player.ready().then(() => {
      this.iconId = this.player.getService('upperBarManager').add({
        displayName: 'Plugin-F',
        ariaLabel: 'Plugin-F',
        order: 150,
        component: IconComponent,
        svgIcon: {path: ICON_PATH},
        onClick: () => alert('hello from plugin F')
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

registerPlugin(pluginName, PluginF);
