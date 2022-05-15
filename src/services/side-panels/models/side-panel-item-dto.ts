import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from 'kaltura-player-js';

export interface SidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass | FunctionalComponent;
  readonly renderContent: ComponentClass | FunctionalComponent;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}

export class SidePanelItem implements SidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass | FunctionalComponent;
  readonly renderContent: ComponentClass | FunctionalComponent;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;

  constructor(item: SidePanelItemDto) {
    this.label = item.label;
    this.renderIcon = item.renderIcon;
    this.renderContent = item.renderContent;
    this.presets = item.presets;
    this.position = item.position;
    this.expandMode = item.expandMode;
    this.onActivate = item.onActivate;
    this.onDeactivate = item.onDeactivate;
  }
}
