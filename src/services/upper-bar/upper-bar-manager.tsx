import { KalturaPlayer, Logger, ui } from 'kaltura-player-js';
import { UpperBarControlDto } from './models/upper-bar-control-dto';
import { ControlWrapper } from './models/control-wrapper';
import { h, RefObject, createRef } from 'preact';
import { RightUpperBarWrapper } from './ui/right-upper-bar-wrapper/right-upper-bar-wrapper.component';
import { KalturaPluginNames } from '../../ui-managers';
const { ReservedPresetAreas } = ui;

type UpperBarManagerConfig = { pluginsIconsOrder: { [key in KalturaPluginNames]: number } };

export class UpperBarManager {
  private readonly player: KalturaPlayer;
  private readonly componentsRegistry: Map<number, ControlWrapper>;
  private readonly logger: Logger;
  private componentRef: RefObject<RightUpperBarWrapper>;
  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger, config: UpperBarManagerConfig) {
    this.player = player;
    this.componentsRegistry = new Map<number, ControlWrapper>();
    this.logger = logger;
    this.componentRef = createRef();
    this.setRightUpperBarWrapper(config.pluginsIconsOrder);
  }

  public addControl(upperBarControl: UpperBarControlDto): number | undefined {
    if (UpperBarManager.validateItem(upperBarControl)) {
      const newItemWrapper: ControlWrapper = new ControlWrapper(upperBarControl);
      this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
      const controls = Array.from(this.componentsRegistry.values());
      this.componentRef.current!.update(controls);
      this.logger.debug(`Control Id: '${newItemWrapper.id}' '${newItemWrapper.label}' added`);
      // newItemWrapper.iconComponentRef = this.componentRef.current!.RightUpperBarControlWrapperRef;
      // this.activateControl(newItemWrapper.id);
      return newItemWrapper.id;
    }
    this.logger.warn('Invalid upperBarControl parameters', upperBarControl);
    return undefined;
  }

  public removeControl(itemId: number): void {
    const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
    if (itemWrapper) {
      // itemWrapper.remove();
      this.componentsRegistry.delete(itemId);
      const controls = Array.from(this.componentsRegistry.values());
      this.componentRef.current!.update(controls);
      this.logger.debug(`Control Id: '${itemWrapper.id}' Label: '${itemWrapper.label}' removed`);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  // public activateControl(itemId: number): void {
  //   const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
  //   if (itemWrapper) {
  //     if (this.isItemActive(itemId)) return;
  //     itemWrapper.activate();
  //   } else {
  //     this.logger.warn(`${itemId} is not registered`);
  //   }
  // }
  //
  // public deactivateControl(itemId: number): void {
  //   const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
  //   if (itemWrapper) {
  //     if (!this.isItemActive(itemId)) return;
  //     itemWrapper.deactivate();
  //   } else {
  //     this.logger.warn(`${itemId} is not registered`);
  //   }
  // }
  //
  // public isItemActive(itemId: number): boolean {
  //   const itemWrapper: ControlWrapper | undefined = this.componentsRegistry.get(itemId);
  //   if (itemWrapper) {
  //     return itemWrapper.isActive;
  //   }
  //   this.logger.warn(`${itemId} is not registered`);
  //   return false;
  // }

  private setRightUpperBarWrapper(iconsOrder: { [key in KalturaPluginNames]: number }): void {
    this.player.ui.addComponent({
      label: 'Right-Upper-Bar-Wrapper',
      presets: ['Playback', 'Live'],
      area: ReservedPresetAreas.TopBarRightControls,
      get: () => {
        return <RightUpperBarWrapper ref={this.componentRef} iconsOrder={iconsOrder} />;
      }
    });
  }

  private static validateItem(control: UpperBarControlDto): boolean {
    return typeof control.onClick === 'function' && typeof control.component === 'function';
  }
}
