# usage guide

- [Getting started](#getting-started)
    - [First step: setup](#first-step-setup)
    - [Second step: access and use the desired service inside the plugin](#second-step-access-and-use-the-desired-service-inside-the-plugin)
- [Full working example](https://github.com/kaltura/playkit-js-ui-managers/tree/master/demo)

## Getting started

### First step: setup

First include `playkit-ui-managers.js` **after** kaltura-player script in your web page.

```html
  <script src="https://raw.githack.com/kaltura/kaltura-player-js/master/dist/kaltura-ovp-player.js"></script>
  <script src="./playkit-ui-managers.js"></script>
```

Add the ui-managers to the player config under the plugins section along with the rest of plugins.

```js
    const config = {
      targetId: 'player-placeholder',
      provider: {
        partnerId: 1234567,
      },
      plugins: {
        somePlugin: {},
        uiManagers: {}
      }
    };

const player = KalturaPlayer.setup(config);
```

### Second step: access and use the desired service inside the plugin

Now You can access and use the desired service by using the player's API inside the loadMedia() hook of your plugin

```js
export const pluginName = 'somePlugin';

export class somePlugin extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
  }

  loadMedia() {
    const panelItemId = this.player.getService('sidePanelsManager').addItem({
      label: 'A',
      panelComponent: PanelItemComponent,
      iconComponent: IconComponent,
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      position: SidePanelPositions.LEFT,
      expandMode: SidePanelModes.ALONGSIDE,
    });

    this.ready.then(() => {
      this.player.getService('sidePanelsManager').activateItem(panelItemId);

      console.log(this.player.getService('sidePanelsManager').isItemActive(panelItemAId));
      // true
    });
  }
}
```

## Full working example

[Full working example](https://github.com/kaltura/playkit-js-ui-managers/tree/master/demo)

## API docs

[API docs](https://kaltura.github.io/playkit-js-ui-managers/docs/api/index.html)

## Demo

[demo](https://kaltura.github.io/playkit-js-ui-managers/demo/index.html)