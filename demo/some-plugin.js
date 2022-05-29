const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { SidePanelModes, SidePanelPositions, ReservedPresetNames } = ui;

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
      expandMode: SidePanelModes.ALONGSIDE,
      renderIcon: IconComponent,
      position: SidePanelPositions.LEFT,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      renderContent: PanelItemComponent,
      onActivate: () => { console.log('panel has now been activated') },
      onDeactivate: () => { console.log('panel has now been deactivated') }
    });

    const PanelItemBId = this.player.getService('sidePanelsManager').addItem({
      label: 'B',
      expandMode: SidePanelModes.ALONGSIDE,
      renderIcon: AnotherIconComponent,
      position: SidePanelPositions.LEFT,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      renderContent: AnotherPanelItemComponent
    });

    const PanelItemCId = this.player.getService('sidePanelsManager').addItem({
      label: 'C',
      expandMode: SidePanelModes.ALONGSIDE,
      renderIcon: SomeIconComponent,
      position: SidePanelPositions.RIGHT,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      renderContent: SomePanelItemComponent
    });

    const PanelItemDId = this.player.getService('sidePanelsManager').addItem({
      label: 'D',
      expandMode: SidePanelModes.OVER,
      renderIcon: MoreIconComponent,
      position: SidePanelPositions.BOTTOM,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
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
