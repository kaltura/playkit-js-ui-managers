import { registerPlugin } from '@playkit-js/kaltura-player-js';
import { pluginName, UIManagers } from './ui-managers';

registerPlugin(pluginName, UIManagers);

export { ComponentInjectionManager } from './services/component-injection-manager/component-injection-manager';
export type { ComponentInjectionManagerOptions } from './services/component-injection-manager/component-injection-manager';
export { InjectionPosition, InjectOptions, ComponentFactory } from './services/component-injection-manager/models';
