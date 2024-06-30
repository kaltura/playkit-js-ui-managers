import { KalturaPlayer, Logger, ui } from '@playkit-js/kaltura-player-js';
import { UpperBarManager } from './upper-bar-manager';
import { IconDto } from './models/icon-dto';

const { redux } = ui;

export class MoveControlsManager {
  private readonly player: KalturaPlayer;
  private readonly logger: Logger;
  private store: any;
  private upperBarManager: UpperBarManager;
  private currentState: any;
  private iconIds: Map<string, number>;

  constructor(player: KalturaPlayer, logger: Logger, upperBarManager: UpperBarManager) {
    this.player = player;
    this.logger = logger;
    this.store = redux.useStore();
    this.upperBarManager = upperBarManager;
    this.store.subscribe(this.handleStoreChange.bind(this));
    this.currentState = this.store.getState();
    this.iconIds = new Map();
  }

  private get bottomBarRegistryManager(): any {
    return (this.player.getService('bottomBarRegistryManager') as any) || undefined;
  }

  private get state(): any {
    return this.store.getState();
  }

  private handleStoreChange(): void {
    const newState = this.state;
    const bottomBarRegistryManager = this.bottomBarRegistryManager;
    if (bottomBarRegistryManager && this.currentState.bottomBar !== newState.bottomBar) {
      this.logger.debug('Removing core controls from upper bar');
      // remove all the core icons and clear map
      [...this.iconIds.values()].forEach((iconId) => this.upperBarManager.remove(iconId));
      this.iconIds.clear();

      const { controlsToMove } = newState.bottomBar;
      if (controlsToMove.length > 0) {
        this.logger.debug('Adding core controls to upper bar: ', controlsToMove);
        controlsToMove.forEach((compName: string) => {
          const comp: IconDto = bottomBarRegistryManager.registry.get(compName);
          if (comp) {
            const iconId = this.upperBarManager.add(comp);
            if (typeof iconId === 'number') {
              this.iconIds.set(compName, iconId);
            }
          }
        });
      }
      this.currentState = newState;
    }
  }
}
