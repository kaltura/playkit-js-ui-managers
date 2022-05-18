const { BasePlugin, registerPlugin } = KalturaPlayer;

import {
  AnotherIconComponent,
  AnotherPanelItemComponent,
  IconComponent,
  PanelItemComponent,
  SomeIconComponent, SomePanelItemComponent
} from './components.js';

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

    const PanelItemCId = this.player.getService('sidePanelsManager').addItem({
      label: 'B',
      expandMode: 'alongside',
      renderIcon: SomeIconComponent,
      position: 'bottom',
      presets: ['Playback', 'Live'],
      renderContent: SomePanelItemComponent,
    });

    this.ready.then(() => {
      this.player.getService('sidePanelsManager').activateItem(panelItemAId);

      console.log(this.player.getService('sidePanelsManager').isItemActive(panelItemAId));
      // true
      setTimeout(() => {
        this.player.getService('sidePanelsManager').deactivateItem(panelItemAId);

        console.log(this.player.getService('sidePanelsManager').isItemActive(panelItemAId));
        // false
      }, 2000);
    });
  }

  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, somePlugin);
