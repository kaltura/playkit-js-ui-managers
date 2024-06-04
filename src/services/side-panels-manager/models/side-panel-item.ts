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

export const DETACHED_WINDOW_STYLES = {
  margin: '0px',
  backgroundColor: '#000'
};
export const DETACH_CONTAINER_CLASS = 'playkit-player detach-sidebar-container';
export const CLOSE_DETACH_EVENTS = ['beforeunload', 'popstate'];
export const DETACH_POSITION_INTERVAL = 1000;
