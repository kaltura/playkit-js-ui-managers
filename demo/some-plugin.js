const { BasePlugin, registerPlugin } = KalturaPlayer;

import {
  PanelItemComponent,
  IconComponent,
  AnotherPanelItemComponent,
  AnotherIconComponent,
  SomePanelItemComponent,
  SomeIconComponent,
  MorePanelItemComponent,
  MoreIconComponent
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
      onToggleIcon: () => {
        this.player.getService('sidePanelsManager').isItemActive(panelItemAId)
          ? this.player.getService('sidePanelsManager').deactivateItem(panelItemAId)
          : this.player.getService('sidePanelsManager').activateItem(panelItemAId);
      }
    });

    const PanelItemBId = this.player.getService('sidePanelsManager').addItem({
      label: 'B',
      expandMode: 'alongside',
      renderIcon: AnotherIconComponent,
      position: 'left',
      presets: ['Playback', 'Live'],
      renderContent: AnotherPanelItemComponent
    });

    const PanelItemCId = this.player.getService('sidePanelsManager').addItem({
      label: 'C',
      expandMode: 'alongside',
      renderIcon: SomeIconComponent,
      position: 'right',
      presets: ['Playback', 'Live'],
      renderContent: SomePanelItemComponent
    });

    const PanelItemDId = this.player.getService('sidePanelsManager').addItem({
      label: 'D',
      expandMode: 'alongside',
      renderIcon: MoreIconComponent,
      position: 'bottom',
      presets: ['Playback', 'Live'],
      renderContent: MorePanelItemComponent
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
