import { ComponentClass, FunctionalComponent } from 'preact';
import { SvgIcon } from './svg-icon';
import { PlaykitUI } from '@playkit-js/kaltura-player-js';

export interface IconDto {
  /**
   * An ID uniquely identify a control (should be the plugin name in case of a plugin icon)
   */
  displayName: string;
  /**
   * The title of the icon. If empty, the title will default to the value of ariaLabel - string | </Text> of preact-i18n Element
   */
  label?: any;
  /**
   * An HTML Aria label attribute that would be attached to the provided icon - string | </Text> of preact-i18n Element
   */
  ariaLabel: any;
  /**
   * The plugin priority order (the lower the number the higher the priority - the order is from left to right - flows from upper bar (max 5 icon) to dropdown bar(the reset and again from top to bottom))
   */
  order: number;
  /**
   * The icon react component
   */
  component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  /**
   * Icon that will appear in the dropdown menu
   */
  svgIcon: SvgIcon | (() => SvgIcon);
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
  /**
   * An indication whether the upper bar should handle the onClick callback of the component or not
   */
  shouldHandleOnClick?: boolean;
}
