import { KalturaPlayer, Logger, ui } from 'kaltura-player-js';
import { hexToHsl } from './color-format-convertors';
export type ThemesManagerConfig = { primaryColor: string; secondaryColor: string };

const cssVarNames = {
  PRIMARY_COLOR: '--playkit-primary-hsl-hue',
  SECONDARY_COLOR: '--playkit-secondary-hsl-hue'
};

const dynamicColoredIconsSvgUrlVars = [
  '--playkit-icon-check-active-url',
  '--playkit-icon-data-url',
  '--playkit-icon-chromecast-url',
  '--playkit-icon-quality-HD-active-url',
  '--playkit-icon-quality-4K-active-url',
  '--playkit-icon-quality-8K-active-url'
];

export class ThemesManager {
  private readonly player: KalturaPlayer;
  private readonly logger: Logger;

  constructor(player: KalturaPlayer, logger: Logger, config?: ThemesManagerConfig) {
    this.player = player;
    this.logger = logger;
    if (config) {
      this.setColors(config);
    }
  }

  private getHueComponent(hex: string): number {
    const hsl = hexToHsl(hex);
    return hsl[0];
  }

  private setColors(config: ThemesManagerConfig): void {
    if (config.primaryColor) {
      this.setColor(cssVarNames.PRIMARY_COLOR, config.primaryColor);
      this.setSvgFillColor(config.primaryColor);
      ui.style.brandColor = config.primaryColor;
    }
    if (config.secondaryColor) {
      this.setColor(cssVarNames.SECONDARY_COLOR, config.secondaryColor);
    }
  }

  private setColor(cssVarName: string, color: string): void {
    const hue = this.getHueComponent(color);
    document.querySelector<HTMLElement>('.playkit-player')!.style.setProperty(cssVarName, `${hue}deg`);
  }

  private setSvgFillColor(color: string): void {
    for (const varName of dynamicColoredIconsSvgUrlVars) {
      const svgUrl = getComputedStyle(document.querySelector(`.${ui.style.player}`)!).getPropertyValue(varName);
      color = color.replace('#', '%23');
      document
        .querySelector<HTMLElement>(`.${ui.style.player}`)!
        .style.setProperty(varName, svgUrl.replace(/fill='%23([a-f0-9]{3}){1,2}\b'/, `fill='${color}'`));
    }
  }
}
