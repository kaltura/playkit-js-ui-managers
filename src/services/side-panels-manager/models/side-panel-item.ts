import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from 'kaltura-player-js';
import { SvgIcon } from '../../upper-bar-manager/models/svg-icon';

export type PanelComponentProps = {
  isActive: boolean;
};

export interface SidePanelItem {
  readonly label: string;
  readonly iconComponent?: {
    component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
    svgIcon: SvgIcon;
  };
  readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}
