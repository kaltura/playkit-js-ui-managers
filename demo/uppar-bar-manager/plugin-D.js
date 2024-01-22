const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

const ICON_PATH = 'M19.7071 9.29289C20.0676 9.65338 20.0953 10.2206 19.7903 10.6129L19.7071 10.7071L14.415 16L19.7071 21.2929C20.0676 21.6534 20.0953 22.2206 19.7903 22.6129L19.7071 22.7071C19.3466 23.0676 18.7794 23.0953 18.3871 22.7903L18.2929 22.7071L12.2929 16.7071C11.9324 16.3466 11.9047 15.7794 12.2097 15.3871L12.2929 15.2929L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289Z';


  class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon, tabIndex: 0 }, 'D');
  }
}

export const pluginName = 'pluginD';

export class PluginD extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.iconId = null;
    this.addUpperBarIcon();
  }

  addUpperBarIcon() {
    this.player.ready().then(() => {
      this.iconId = this.player.getService('upperBarManager').add({
        displayName: 'Plugin-D',
        ariaLabel: 'Plugin-D',
        order: 130,
        component: IconComponent,
        svgIcon: {path: ICON_PATH},
        onClick: () => alert('hello from plugin D')
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

registerPlugin(pluginName, PluginD);
