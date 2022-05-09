import {registerPlugin} from 'kaltura-player-js';
import {pluginName, UIManagersPlugin} from './services-managers';

registerPlugin(pluginName, UIManagersPlugin);

export * from './services/side-panels/types/types';
export {SidePanelsManager} from './services/side-panels/side-panels-manager';
export {ISidePanelItemDto} from './services/side-panels/models/side-panel-item-dto';
