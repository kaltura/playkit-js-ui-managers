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
    this.player.ready().then(() => {
      const panelItemAId = this.player.getService('sidePanelsManager').add({
        label: 'Panel A',
        panelComponent: PanelItemComponent,
        iconComponent: IconComponent,
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.LEFT,
        expandMode: SidePanelModes.ALONGSIDE,
        onActivate: () => {
          console.log('panel has now been activated');
        },
        onDeactivate: () => {
          console.log('panel has now been deactivated');
        }
      });

      const PanelItemBId = this.player.getService('sidePanelsManager').add({
        label: 'Panel B',
        panelComponent: AnotherPanelItemComponent,
        iconComponent: AnotherIconComponent,
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.LEFT,
        expandMode: SidePanelModes.ALONGSIDE
      });

      const PanelItemCId = this.player.getService('sidePanelsManager').add({
        label: 'Panel C',
        panelComponent: SomePanelItemComponent,
        iconComponent: SomeIconComponent,
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.RIGHT,
        expandMode: SidePanelModes.OVER
      });

      const PanelItemDId = this.player.getService('sidePanelsManager').add({
        label: 'Panel D',
        panelComponent: MorePanelItemComponent,
        iconComponent: MoreIconComponent,
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.BOTTOM,
        expandMode: SidePanelModes.ALONGSIDE
      });

      this.player.getService('sidePanelsManager').activateItem(panelItemAId);
      console.log(this.player.getService('sidePanelsManager').isItemActive(panelItemAId));
      // true
      setTimeout(() => {
        this.player.getService('sidePanelsManager').deactivateItem(panelItemAId);
        console.log(this.player.getService('sidePanelsManager').isItemActive(panelItemAId));
        // false
      }, 3000);
    });
  }


  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, somePlugin);
