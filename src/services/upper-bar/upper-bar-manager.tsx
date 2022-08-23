import { KalturaPlayer, Logger, ui } from 'kaltura-player-js';
import { UpperBarControlDto } from './models/upper-bar-control-dto';
import { ControlWrapper } from './models/control-wrapper';
import { h, RefObject, createRef } from 'preact';
import { RightUpperBarWrapper } from './ui/right-upper-bar-wrapper/right-upper-bar-wrapper.component';
const { ReservedPresetAreas } = ui;

export class UpperBarManager {
  private readonly player: KalturaPlayer;
  private readonly componentsRegistry: Map<number, ControlWrapper>;
  private readonly logger: Logger;
  private componentRef: RefObject<RightUpperBarWrapper>;
  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.componentsRegistry = new Map<number, ControlWrapper>();
    this.logger = logger;
    this.componentRef = createRef();
    this.setRightUpperBarWrapper();
  }

  public addControl(upperBarControl: UpperBarControlDto): number | undefined {
    if (UpperBarManager.validateItem(upperBarControl)) {
      const newItemWrapper: ControlWrapper = new ControlWrapper(upperBarControl);
      this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
      this.logger.debug('Control Added', upperBarControl);
      const controls = Array.from(this.componentsRegistry.values());
      this.componentRef.current!.update(controls);
      return newItemWrapper.id;
    }
    this.logger.warn('Invalid upperBarControl parameters', upperBarControl);
    return undefined;
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

  private setRightUpperBarWrapper(): void {
    this.player.ui.addComponent({
      label: 'Right-Upper-Bar-Wrapper',
      presets: ['Playback', 'Live'],
      area: ReservedPresetAreas.TopBarRightControls,
      get: () => {
        return <RightUpperBarWrapper ref={this.componentRef} />;
      }
    });
  }

  private static validateItem(control: UpperBarControlDto): boolean {
    return typeof control.onClick === 'function' && typeof control.component === 'function';
  }
}
