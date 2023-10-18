import { KalturaPlayer, Logger, ui } from '@playkit-js/kaltura-player-js';
import { IconDto } from './models/icon-dto';
import { IconModel } from './models/icon-model';
import { h, RefObject, createRef } from 'preact';
import { DisplayedBar } from './ui/displayed-bar/displayed-bar.component';
import { KalturaPluginNames } from '../../types/ui-managers-config';
const { ReservedPresetAreas, ReservedPresetNames } = ui;

const UPPER_BAR_PRESETS = Object.values(ReservedPresetNames).filter(
  (preset) => preset !== ReservedPresetNames.Idle && preset !== ReservedPresetNames.Error
);

type UpperBarManagerConfig = { pluginsIconsOrder: { [key in KalturaPluginNames | string]: number } };
type IconsOrder = { [key in KalturaPluginNames | string]: number };

export class UpperBarManager {
  private readonly player: KalturaPlayer;
  private readonly logger: Logger;
  private readonly componentsRegistry: Map<number, IconModel>;
  private readonly displayedBarComponentRefs: Record<string, RefObject<DisplayedBar>>;
  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger, config: UpperBarManagerConfig) {
    this.player = player;
    this.componentsRegistry = new Map<number, IconModel>();
    this.logger = logger;
    this.displayedBarComponentRefs = {};
    UPPER_BAR_PRESETS.forEach((preset) => (this.displayedBarComponentRefs[preset] = createRef()));
    this.injectDisplayedBarComponentWrapper(config.pluginsIconsOrder);
  }

  public add(icon: IconDto): number | undefined {
    if (UpperBarManager.validateItem(icon)) {
      const newIcon: IconModel = new IconModel(icon);
      this.componentsRegistry.set(newIcon.id, newIcon);
      newIcon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
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
      icon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
      this.logger.debug(`Icon Id: '${icon.id}' Label: '${icon.label}' removed`);
    } else {
      this.logger.warn(`${itemId} is not registered`);
    }
  }

  public isActive(itemId: number): boolean {
    return !!this.componentsRegistry.get(itemId);
  }

  public update(iconId: number): void {
    const icon: IconModel | undefined = this.componentsRegistry.get(iconId);
    if (icon) {
      icon.update();
    } else {
      this.logger.warn(`${iconId} is not registered`);
    }
  }

  private getControls(iconsOrder: IconsOrder): IconModel[] {
    const icons = Array.from(this.componentsRegistry.values());
    return icons.sort((a, b) => (iconsOrder[a.label] > iconsOrder[b.label] ? 1 : -1));
  }

  private injectDisplayedBarComponentWrapper(iconsOrder: IconsOrder): void {
    for (const preset of UPPER_BAR_PRESETS) {
      this.player.ui.addComponent({
        label: 'Right-Upper-Bar-Wrapper',
        presets: [preset],
        area: ReservedPresetAreas.TopBarRightControls,
        get: () => {
          return (
            <DisplayedBar
              ref={this.displayedBarComponentRefs[preset]}
              getControls={(): IconModel[] => this.getControls(iconsOrder).filter((icon) => icon.presets.includes(preset))}
            />
          );
        }
      });
    }
  }

  private static validateItem(icon: IconDto): boolean {
    return typeof icon.onClick === 'function' && typeof icon.component === 'function';
  }
}
