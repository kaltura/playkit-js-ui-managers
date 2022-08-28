import { KalturaPlayer, Logger, ui } from 'kaltura-player-js';
import { IconDto } from './models/icon-dto';
import { IconModel } from './models/icon-model';
import { h, RefObject, createRef } from 'preact';
import { DisplayedBar } from './ui/displayed-bar/displayed-bar.component';
import { KalturaPluginNames } from '../../ui-managers';
const { ReservedPresetAreas, ReservedPresetNames } = ui;

type UpperBarManagerConfig = { pluginsIconsOrder: { [key in KalturaPluginNames]: number } };

export class UpperBarManager {
  private readonly player: KalturaPlayer;
  private readonly logger: Logger;
  private readonly componentsRegistry: Map<number, IconModel>;
  private readonly displayedBarComponentRef: RefObject<DisplayedBar>;
  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger, config: UpperBarManagerConfig) {
    this.player = player;
    this.componentsRegistry = new Map<number, IconModel>();
    this.logger = logger;
    this.displayedBarComponentRef = createRef();
    this.injectDisplayedBarComponentWrapper(config.pluginsIconsOrder);
  }

  public add(icon: IconDto): number | undefined {
    if (UpperBarManager.validateItem(icon)) {
      const newIcon: IconModel = new IconModel(icon);
      this.componentsRegistry.set(newIcon.id, newIcon);
      const icons = Array.from(this.componentsRegistry.values());
      this.displayedBarComponentRef.current!.update(icons);
      this.logger.debug(`Icon Id: '${newIcon.id}' '${newIcon.label}' added`);
      return newIcon.id;
    }
    this.logger.warn('Invalid Icon parameters', icon);
    return undefined;
  }

  public remove(itemId: number): void {
    const icon: IconModel | undefined = this.componentsRegistry.get(itemId);
    if (icon) {
      this.componentsRegistry.delete(itemId);
      const icons = Array.from(this.componentsRegistry.values());
      this.displayedBarComponentRef.current!.update(icons);
      this.logger.debug(`Icon Id: '${icon.id}' Label: '${icon.label}' removed`);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public isActive(itemId: number): boolean {
    return !!this.componentsRegistry.get(itemId);
  }

  private injectDisplayedBarComponentWrapper(iconsOrder: { [key in KalturaPluginNames]: number }): void {
    this.player.ui.addComponent({
      label: 'Right-Upper-Bar-Wrapper',
      presets: [ReservedPresetNames.Playback, ReservedPresetNames.Live],
      area: ReservedPresetAreas.TopBarRightControls,
      get: () => {
        return <DisplayedBar ref={this.displayedBarComponentRef} iconsOrder={iconsOrder} />;
      }
    });
  }

  private static validateItem(icon: IconDto): boolean {
    return typeof icon.onClick === 'function' && typeof icon.component === 'function';
  }
}
