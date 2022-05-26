import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from 'kaltura-player-js';

export type renderContentProps = {
  isActive: boolean;
};

export type RenderIconProps = renderContentProps;

export interface SidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass<RenderIconProps> | FunctionalComponent<RenderIconProps>;
  readonly renderContent: ComponentClass<renderContentProps> | FunctionalComponent<renderContentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onToggleIcon?: () => void;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}

export class SidePanelItem implements SidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: ComponentClass<RenderIconProps> | FunctionalComponent<RenderIconProps>;
  readonly renderContent: ComponentClass<renderContentProps> | FunctionalComponent<renderContentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onToggleIcon?: () => void;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;

  constructor(item: SidePanelItemDto) {
    this.label = item.label;
    this.renderIcon = item.renderIcon;
    this.renderContent = item.renderContent;
    this.presets = item.presets;
    this.position = item.position;
    this.expandMode = item.expandMode;
    this.onToggleIcon = item.onToggleIcon;
    this.onActivate = item.onActivate;
    this.onDeactivate = item.onDeactivate;
  }
}
