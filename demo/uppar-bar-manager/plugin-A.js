const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { h, preact, style } = KalturaPlayer.ui;

const ICON_PATH = 'M8.378 7.084l5.175 19.314c.134.497-.126 1.005-.594 1.19l-.112.037c-.533.143-1.08-.165-1.225-.71L6.447 7.603c-.134-.497.126-1.005.594-1.19l.112-.037c.533-.143 1.08.165 1.225.71zM21.882 7c1.878 0 2.79 1.622 1.84 3.239l-1.386 2.36 2.94 3.246C26.6 17.31 25.842 19 23.868 19h-10.21c-.452 0-.848-.304-.966-.741l-2.68-10c-.17-.635.31-1.259.967-1.259h10.902zm.211 1.994l-.21.006h-9.6l2.144 8h9.196l-3.263-3.604c-.293-.324-.342-.8-.12-1.178l1.757-2.992c.114-.194.168-.23.096-.232z';

class IconComponent extends preact.Component {
  render() {
    return h('div', { className: 'icon' + ' ' + ui.style.upperBarIcon, tabIndex: 0 }, 'A');
  }
}

export const pluginName = 'pluginA';

export class PluginA extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.iconId = null;
    this.addUpperBarIcon();
  }

  addUpperBarIcon() {
    this.player.ready().then(() => {
      this.iconId = this.player.getService('upperBarManager').add({
        displayName: 'Plugin-A',
        ariaLabel: 'Plugin-A',
        svgIcon: {path: ICON_PATH},
        component: IconComponent,
        onClick: () => alert('hello from plugin A')
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

registerPlugin(pluginName, PluginA);
