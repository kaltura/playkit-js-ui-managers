# usage guide

- [Getting started](#getting-started)
    - [First step: setup](#first-step-setup)
    - [Second step: access and use the desired service inside the plugin](#second-step-access-and-use-the-desired-service-inside-the-plugin)
- [Configuration](#configuration)
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

Now You can access the desired service by using the player's getService API once the player.ready() promise resolved


```js
export const pluginName = 'somePlugin';

export class somePlugin extends BasePlugin {
  static defaultConfig = {};

  constructor(name, player) {
    super(name, player);
    this.addPanel();
  }

  addPanel() {
    this.ready.then(() => {
      const panelItemId = this.player.getService('sidePanelsManager').add({
        label: 'A',
        panelComponent: PanelItemComponent,
        iconComponent: IconComponent,
        presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
        position: SidePanelPositions.LEFT,
        expandMode: SidePanelModes.ALONGSIDE,
      });
      
      this.player.getService('sidePanelsManager').activateItem(panelItemId);
      console.log(this.player.getService('sidePanelsManager').isItemActive(panelItemAId));
      // true
    });
  }
}
```

## Detach panel

Panel can be detached to new window, API:
### Detach
Detach panel by id with options
```
this.player.getService('sidePanelsManager').detachItem(panelItemId, options);
```
options:
```
  top?: number;
  left?: number;
  width: number;
  height: number;
  title: string;
  maxWidth?: number;
  maxHeight?: number;
  attachPlaceholder?: ComponentClass | FunctionalComponent;
  onDetach?: () => void;
  onAttach?: () => void;
  onDetachResize?: (x: number, y: number) => void;
  onDetachMove?: (x: number, y: number) => void;
```
### Attach
Attach panel by id
```
this.player.getService('sidePanelsManager').attachItem(panelItemId);
```
### isItemDetached
Check if panel currently detached
```
this.player.getService('sidePanelsManager').isItemDetached(panelItemId);
```
### getDetachedRef
Returns detached dom element if panel detached
```
this.player.getService('sidePanelsManager').getDetachedRef(panelItemId);
```

## Configuration

You can see the Ui managers plugin full configuration options [here](https://kaltura.github.io/playkit-js-ui-managers/docs/api/types/types_ui_managers_config.UiManagerConfig.html)

You can find configuration example [here](https://github.com/kaltura/playkit-js-ui-managers/tree/master/demo/uppar-bar-manager/index.html)


## Full working example

[Uppar Bar Manager](https://github.com/kaltura/playkit-js-ui-managers/tree/master/demo/uppar-bar-manager)

[Side Panels Manager](https://github.com/kaltura/playkit-js-ui-managers/tree/master/demo/side-panels-manager)

## API docs

[API docs](https://kaltura.github.io/playkit-js-ui-managers/docs/api/index.html)

## Demo

[demo](https://kaltura.github.io/playkit-js-ui-managers/demo/index.html)