import { KalturaPlayer, Logger, ui } from '@playkit-js/kaltura-player-js';
import { IconDto } from './models/icon-dto';
import { IconModel } from './models/icon-model';
import { h, RefObject, createRef } from 'preact';
import { DisplayedBar } from './ui/displayed-bar/displayed-bar.component';
import { KalturaPluginsDisplayNames } from '../../types/kaltura-plugins-display-names';
import { MoveControlsManager } from './move-controls-manager';
const { ReservedPresetAreas, ReservedPresetNames, redux } = ui;

const UPPER_BAR_PRESETS = Object.values(ReservedPresetNames).filter(
  (preset) => preset !== ReservedPresetNames.Idle && preset !== ReservedPresetNames.Error
);

type IconsOrder = { [key in KalturaPluginsDisplayNames | string]: number };

export class UpperBarManager {
  private readonly player: KalturaPlayer;
  private readonly logger: Logger;
  private readonly componentsRegistry: Map<number, IconModel>;
  private readonly displayedBarComponentRefs: Record<string, RefObject<DisplayedBar>>;
  private iconsOrder: IconsOrder;
  private moveControlsManager: MoveControlsManager;
  /**
   * @ignore
   */
  constructor(player: KalturaPlayer, logger: Logger) {
    this.player = player;
    this.componentsRegistry = new Map<number, IconModel>();
    this.logger = logger;
    this.displayedBarComponentRefs = {};
    this.iconsOrder = {} as IconsOrder;
    UPPER_BAR_PRESETS.forEach((preset) => (this.displayedBarComponentRefs[preset] = createRef()));
    this.injectDisplayedBarComponentWrapper();
    this.moveControlsManager = new MoveControlsManager(player, logger, this, redux);
  }

  public add(icon: IconDto): number | undefined {
    if (UpperBarManager.validateItem(icon)) {
      const newIcon: IconModel = new IconModel(icon);
      this.componentsRegistry.set(newIcon.id, newIcon);
      this.iconsOrder[icon.displayName] = icon.order;
      newIcon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
      this.logger.debug(`control '${newIcon.displayName}' added, id: '${newIcon.id}' `);
      return newIcon.id;
    }
    this.logger.error('icon cannot be added due to invalid parameters', JSON.stringify(icon));
    return undefined;
  }

  public remove(itemId: number): void {
    const icon: IconModel | undefined = this.componentsRegistry.get(itemId);
    if (icon) {
      this.componentsRegistry.delete(itemId);
      icon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
      this.logger.debug(`control '${icon.displayName}' removed, id: '${icon.id}' `);
    } else {
      this.logger.warn(`control ${itemId} is not registered`);
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
      this.logger.warn(`control ${iconId} is not registered`);
    }
  }

  private getControls(iconsOrder: IconsOrder): IconModel[] {
    const icons = Array.from(this.componentsRegistry.values());
    return icons.sort((a, b) => iconsOrder[a.displayName] - iconsOrder[b.displayName]);
  }

  public getMorePluginButton() {
    const moreElement = this.displayedBarComponentRefs.Playback.current?.moreIconRef?.current?.base as HTMLElement;
    return moreElement?.querySelector('[tabindex="0"]') as HTMLButtonElement;
  }

  public focusPluginButton(pluginId: number, event?: KeyboardEvent) {
    let pluginButton;
    const controls = this.getControls(this.iconsOrder);
    const pluginElement = controls.find((control) => control.id === pluginId)?.componentRef?.current?.base as HTMLElement;
    if (pluginElement) {
      pluginButton = pluginElement.querySelector('[tabindex="0"]') as HTMLElement;
    } else {
      pluginButton = this.getMorePluginButton();
    }
    if (pluginButton) {
      event?.preventDefault();
      pluginButton.focus();
    }
  }
  private injectDisplayedBarComponentWrapper(): void {
    const iconsOrder = this.iconsOrder;
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
              player={this.player}
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
