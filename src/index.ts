import {registerPlugin} from 'kaltura-player-js';
import {pluginName, UIManagersPlugin} from './ui-managers';

registerPlugin(pluginName, UIManagersPlugin);

export {
  SidePanelItemDto,
  SidePanelPosition,
  SidePanelMode,
  ReservedPresetName,
} from './services/side-panels/side-panel-item';
