import { KalturaPlayer, Logger, ui } from 'kaltura-player-js';
import { hexToHsl } from './color-format-convertors';
export type ThemesManagerConfig = {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    live: string;
    playerBackground: string;
  };
};

type ColorType = keyof ThemesManagerConfig['colors'];

const cssVarNames: ThemesManagerConfig = {
  colors: {
    primary: '--playkit-primary-hsl-hue',
    secondary: '--playkit-secondary-hsl-hue',
    success: '--playkit-success-hsl-hue',
    danger: '--playkit-danger-hsl-hue',
    warning: '--playkit-warning-hsl-hue',
    live: '--playkit-live-color',
    playerBackground: '--playkit-player-background-color'
  }
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
    if (config.colors.primary) {
      // this.setColor(cssVarNames.colors.primary, config.colors.primary);
      this.setSvgFillColor(config.colors.primary);
    }

    for (const color in config.colors) {
      this.setColor(cssVarNames.colors[color as ColorType], config.colors[color as ColorType]);
    }
  }

  private setColor(cssVarName: string, color: string): void {
    const hue = this.getHueComponent(color);
    document.querySelector<HTMLElement>('.playkit-player')!.style.setProperty(cssVarName, `${hue}deg`);
  }

  private setSvgFillColor(color: string): void {
    for (const varName of dynamicColoredIconsSvgUrlVars) {
      const svgUrl = getComputedStyle(document.querySelector(`.${ui.style.player}`)!).getPropertyValue(varName);
      const newColor = color.replace('#', '%23');
      document
        .querySelector<HTMLElement>(`.${ui.style.player}`)!
        .style.setProperty(varName, svgUrl.replace(/fill='%23([a-f0-9]{3}){1,2}\b'/, `fill='${newColor}'`));
    }
  }
}
