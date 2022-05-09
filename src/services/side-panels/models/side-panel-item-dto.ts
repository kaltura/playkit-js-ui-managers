import {ComponentClass, FunctionalComponent} from 'preact';
import {ui} from 'kaltura-player-js';
import {ReservedPresetName, SidePanelPosition, SidePanelMode} from '../types/types';
const {ReservedPresetNames} = ui;

export interface ISidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass | FunctionalComponent;
  readonly renderContent: ComponentClass | FunctionalComponent;
  readonly presets?: ReservedPresetName[];
  readonly position: SidePanelPosition;
  readonly expandMode: SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}

export class SidePanelItem implements ISidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass | FunctionalComponent;
  readonly renderContent: ComponentClass | FunctionalComponent;
  readonly presets?: ReservedPresetName[];
  readonly position: SidePanelPosition;
  readonly expandMode: SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;

  constructor(item: ISidePanelItemDto) {
    this.label = item.label;
    this.renderIcon = item.renderIcon;
    this.renderContent = item.renderContent;
    this.presets = item.presets || Object.values(ReservedPresetNames);
    this.position = item.position;
    this.expandMode = item.expandMode;
    this.onActivate = item.onActivate;
    this.onDeactivate = item.onDeactivate;
  }
}
