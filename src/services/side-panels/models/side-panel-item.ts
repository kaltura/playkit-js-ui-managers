import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from 'kaltura-player-js';
import { UpperBarControlProps } from '../../upper-bar/models/upper-bar-control-dto';

export type PanelComponentProps = {
  isActive: boolean;
};

export interface SidePanelItem {
  readonly label: string;
  readonly iconComponent?: ComponentClass<UpperBarControlProps> | FunctionalComponent<UpperBarControlProps>;
  readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}
