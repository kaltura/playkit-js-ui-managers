import {registerPlugin} from 'kaltura-player-js';
import {pluginName, UIManagersPlugin} from './ui-managers';

registerPlugin(pluginName, UIManagersPlugin);

export {SidePanelItemDto} from './services/side-panels/side-panel-item-dto';
export {SidePanelPosition, SidePanelMode, ReservedPresetName} from './services/side-panels/types/types';
