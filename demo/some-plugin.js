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
      panelComponent: PanelItemComponent,
      iconComponent: IconComponent,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      position: SidePanelPositions.LEFT,
      expandMode: SidePanelModes.ALONGSIDE,
      onActivate: () => { console.log('panel has now been activated') },
      onDeactivate: () => { console.log('panel has now been deactivated') }
    });

    const PanelItemBId = this.player.getService('sidePanelsManager').addItem({
      label: 'B',
      panelComponent: AnotherPanelItemComponent,
      iconComponent: AnotherIconComponent,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      position: SidePanelPositions.LEFT,
      expandMode: SidePanelModes.ALONGSIDE
    });

    const PanelItemCId = this.player.getService('sidePanelsManager').addItem({
      label: 'C',
      panelComponent: SomePanelItemComponent,
      iconComponent: SomeIconComponent,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      position: SidePanelPositions.RIGHT,
      expandMode: SidePanelModes.ALONGSIDE
    });

    const PanelItemDId = this.player.getService('sidePanelsManager').addItem({
      label: 'D',
      panelComponent: MorePanelItemComponent,
      iconComponent: MoreIconComponent,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      position: SidePanelPositions.BOTTOM,
      expandMode: SidePanelModes.OVER,
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
