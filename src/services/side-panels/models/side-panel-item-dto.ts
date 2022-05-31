import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from 'kaltura-player-js';

export type PanelComponentProps = {
  isActive: boolean;
};

export type IconComponentProps = PanelComponentProps;

export interface SidePanelItem {
  readonly label: string;
  readonly iconComponent?: ComponentClass<IconComponentProps> | FunctionalComponent<IconComponentProps>;
  readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}
