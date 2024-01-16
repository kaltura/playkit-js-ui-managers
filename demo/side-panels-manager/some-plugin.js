const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { SidePanelModes, SidePanelPositions, ReservedPresetNames } = ui;

const ICON_PATH = 'M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm0 9a1 1 0 0 1 1 .99v4.02a.992.992 0 0 1-.883.983L16 21a1 1 0 0 1-1-.99v-4.02c0-.507.383-.926.883-.983L16 15zm0-4.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z'


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
        label: 'Panel-A',
        panelComponent: PanelItemComponent,
        iconComponent: {component: IconComponent, svgIcon: {path: ICON_PATH}},
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

      this.addUpperBarIcon('Panel-A', panelItemAId, IconComponent);

      const PanelItemBId = this.player.getService('sidePanelsManager').add({
        label: 'Panel-B',
        panelComponent: AnotherPanelItemComponent,
        iconComponent: {component: AnotherIconComponent, svgIcon: {path: ICON_PATH}},
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.LEFT,
        expandMode: SidePanelModes.ALONGSIDE
      });

      this.addUpperBarIcon('Panel-B', PanelItemBId, AnotherIconComponent);

      const PanelItemCId = this.player.getService('sidePanelsManager').add({
        label: 'Panel-C',
        panelComponent: SomePanelItemComponent,
        iconComponent: {component: SomeIconComponent, svgIcon: {path: ICON_PATH}},
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.RIGHT,
        expandMode: SidePanelModes.OVER
      });

      this.addUpperBarIcon('Panel-C', PanelItemCId, SomeIconComponent);

      const PanelItemDId = this.player.getService('sidePanelsManager').add({
        label: 'Panel-D',
        panelComponent: MorePanelItemComponent,
        iconComponent: {component: MoreIconComponent, svgIcon: {path: ICON_PATH}},
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.BOTTOM,
        expandMode: SidePanelModes.ALONGSIDE
      });

      this.addUpperBarIcon('Panel-D', PanelItemDId, MoreIconComponent);

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

  addUpperBarIcon(pluginName, panelItemAIconId, IconComponent) {
    this.player.getService('upperBarManager').add({
      displayName: pluginName,
      ariaLabel: pluginName,
      svgIcon: {path: ICON_PATH},
      component: IconComponent,
      onClick: () => this.toggle(panelItemAIconId)
    });
  }

  toggle(panelItemId) {
    if (this.player.getService('sidePanelsManager').isItemActive(panelItemId)) {
      this.player.getService('sidePanelsManager').deactivateItem(panelItemId);
    } else {
      this.player.getService('sidePanelsManager').activateItem(panelItemId);
    }
  }


  static isValid() {
    return true;
  }

  reset() {}
}

registerPlugin(pluginName, somePlugin);
