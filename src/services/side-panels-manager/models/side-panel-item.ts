import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from '@playkit-js/kaltura-player-js';

export type PanelComponentProps = {
  isActive: boolean;
};

export interface SidePanelItem {
  readonly label: string;
  readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
}
