const { BasePlugin, registerPlugin, ui } = KalturaPlayer;
const { SidePanelModes, SidePanelPositions, ReservedPresetNames } = ui;

const ICON_PATH = 'M318.641 446.219l236.155-142.257c-0.086-1.754-0.129-3.52-0.129-5.295 0-58.91 47.756-106.667 106.667-106.667s106.667 47.756 106.667 106.667c0 58.91-47.756 106.667-106.667 106.667-33.894 0-64.095-15.808-83.633-40.454l-236.467 142.445c-0.132-3.064-0.394-6.095-0.779-9.087l7.271-12.835-0.117 53.333-7.183-12.743c0.399-3.046 0.67-6.131 0.806-9.252l236.467 142.383c19.538-24.648 49.741-40.457 83.636-40.457 58.91 0 106.667 47.756 106.667 106.667s-47.756 106.667-106.667 106.667c-58.91 0-106.667-47.756-106.667-106.667 0-1.775 0.043-3.539 0.129-5.293l-236.19-142.216c-19.528 24.867-49.868 40.841-83.939 40.841-58.91 0-106.667-47.756-106.667-106.667s47.756-106.667 106.667-106.667c34.091 0 64.447 15.993 83.974 40.886zM234.667 554.667c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.667 42.667 42.667zM661.333 341.333c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.667 42.667 42.667zM661.333 768c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.667 42.667 42.667z';


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

      const PanelItemBId = this.player.getService('sidePanelsManager').add({
        label: 'Panel B',
        panelComponent: AnotherPanelItemComponent,
        iconComponent: {component: AnotherIconComponent, svgIcon: {path: ICON_PATH}},
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.LEFT,
        expandMode: SidePanelModes.ALONGSIDE
      });

      const PanelItemCId = this.player.getService('sidePanelsManager').add({
        label: 'Panel C',
        panelComponent: SomePanelItemComponent,
        iconComponent: {component: SomeIconComponent, svgIcon: {path: ICON_PATH}},
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.RIGHT,
        expandMode: SidePanelModes.OVER
      });

      const PanelItemDId = this.player.getService('sidePanelsManager').add({
        label: 'Panel D',
        panelComponent: MorePanelItemComponent,
        iconComponent: {component: MoreIconComponent, svgIcon: {path: ICON_PATH}},
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
