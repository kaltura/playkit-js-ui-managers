import {registerPlugin} from 'kaltura-player-js';
import {pluginName, UIManagersPlugin} from './ui-managers';

registerPlugin(pluginName, UIManagersPlugin);

export {SidePanelItem, SidePanelPosition, SidePanelMode, ReservedPresetName} from './services/side-panels/side-panel-item';