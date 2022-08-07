import { KalturaPlayer, Logger } from 'kaltura-player-js';
import { UpperBarControlDto } from './models/upper-bar-control-dto';
import { ControlWrapper } from './models/control-wrapper';
import {ItemWrapper} from "../side-panels/models/item-wrapper";

export class UpperBarManager {
  private readonly player: KalturaPlayer;
  private readonly componentsRegistry: Map<number, ControlWrapper>;
  private readonly logger: Logger;
  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.componentsRegistry = new Map<number, ControlWrapper>();
    this.logger = logger;
  }

  public addControl(upperBarControl: UpperBarControlDto): number {
    const newItemWrapper: ControlWrapper = new ControlWrapper(upperBarControl, this.player);
    this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
    this.logger.debug('New Panel Item Added', upperBarControl);
    return newItemWrapper.id;
  }

  public removeControl(itemId: number): void {
    const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      itemWrapper.remove();
      this.componentsRegistry.delete(itemId);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public activateControl(itemId: number): void {
    const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      if (this.isItemActive(itemId)) return;
      itemWrapper.activate();
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public deactivateControl(itemId: number): void {
    const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      if (!this.isItemActive(itemId)) return;
      itemWrapper.deactivate();
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public isItemActive(itemId: number): boolean {
    const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      return itemWrapper.isActive;
    }
    this.logger.warn(`${itemId} is not registered`);
    return false;
  }
}
