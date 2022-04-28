import {ComponentClass, FunctionalComponent} from 'preact';
import {ui} from 'kaltura-player-js';
import {ReservedPresetName, SidePanelPosition, SidePanelMode} from './types/types';
const {ReservedPresetNames} = ui;

export class SidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass | FunctionalComponent;
  readonly renderContent: ComponentClass | FunctionalComponent;
  readonly presets?: ReservedPresetName[];
  readonly position: SidePanelPosition;
  readonly expandMode: SidePanelMode;
  readonly hooks?: {onActivate: (() => void) | null; onDeactivate: (() => void) | null};

  constructor(item: SidePanelItemDto) {
    this.label = item.label;
    this.renderIcon = item.renderIcon;
    this.renderContent = item.renderContent;
    this.presets = item.presets || Object.values(ReservedPresetNames);
    this.position = item.position;
    this.expandMode = item.expandMode;
    this.hooks = item.hooks || {onActivate: null, onDeactivate: null};
  }
}
