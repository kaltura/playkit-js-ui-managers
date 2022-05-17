const { BasePlugin, registerPlugin } = KalturaPlayer;

import { AnotherIconComponent, AnotherPanelItemComponent, IconComponent, PanelItemComponent } from './components.js';

export const pluginName = 'somePlugin';

export class somePlugin extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
  }

  loadMedia() {
    const panelItemAId = this.player.getService('sidePanelsManager').addItem({
      label: 'A',
      expandMode: 'alongside',
      renderIcon: IconComponent,
      position: 'left',
      presets: ['Playback', 'Live'],
      renderContent: PanelItemComponent,
    });

    const PanelItemBId = this.player.getService('sidePanelsManager').addItem({
      label: 'B',
      expandMode: 'alongside',
      renderIcon: AnotherIconComponent,
      position: 'left',
      presets: ['Playback', 'Live'],
      renderContent: AnotherPanelItemComponent,
    });

    this.ready.then(() => {
      this.player.getService('sidePanelsManager').activateItem(panelItemAId);

      this.player.getService('sidePanelsManager').isItemActive(panelItemAId);
      // true
      setTimeout(() => {
        this.player.getService('sidePanelsManager').deactivateItem(panelItemAId);

        this.player.getService('sidePanelsManager').isItemActive(panelItemAId);
        // false
      }, 2000);
    });
  }

  static isValid() {
    return true;
  }

  reset() {
    this.player.getService('sidePanelsManager').reset();
    // deactivates and destroy all side panel item components and resets the state
  }
}

registerPlugin(pluginName, somePlugin);
