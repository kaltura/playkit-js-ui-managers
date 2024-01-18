import { ComponentClass, FunctionalComponent } from 'preact';
import { SvgIcon } from './svg-icon';
import { KalturaPluginNames } from '../../../types/ui-managers-config';
import { PlaykitUI } from '@playkit-js/kaltura-player-js';

export interface IconDto {
  /**
   * An ID (usually the plugin name in case of a plugin) - used for icons order calculations
   * has to be corresponds to the names of the icons (plugins) names in the
   * ui-managers config (under upperBarManager.pluginsIconsOrder)
   */
  displayName: string;
  ariaLabel: any;
  order: number;
  /**
   * The icon react component
   */
  component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  /**
   * Icon that will appear in the dropdown menu
   */
  svgIcon: SvgIcon;
  /**
   * The icon handler
   *
   * @remarks
   * You can also define the handler inside the component itself and send an empty function here
   * (also useful as backwards compatibility for some plugins)
   */
  onClick: (e: MouseEvent | KeyboardEvent) => void;
  /**
   * Relevant presets for the icon
   */
  presets?: PlaykitUI.ReservedPresetName[];
}
