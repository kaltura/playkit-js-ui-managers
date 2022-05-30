import { ComponentClass, FunctionalComponent } from 'preact';
import { PlaykitUI } from 'kaltura-player-js';

export type PanelComponentProps = {
  isActive: boolean;
};

export type IconComponentProps = PanelComponentProps;

export interface SidePanelItemDto {
  readonly label: string;
  readonly iconComponent?: ComponentClass<IconComponentProps> | FunctionalComponent<IconComponentProps>;
  readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
  readonly presets: PlaykitUI.ReservedPresetName[];
  readonly position: PlaykitUI.SidePanelPosition;
  readonly expandMode: PlaykitUI.SidePanelMode;
  readonly onActivate?: () => void;
  readonly onDeactivate?: () => void;
}

export class SidePanelItem implements SidePanelItemDto {
  public readonly label: string;
  public readonly iconComponent?: ComponentClass<IconComponentProps> | FunctionalComponent<IconComponentProps>;
  public readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
  public readonly presets: PlaykitUI.ReservedPresetName[];
  public readonly position: PlaykitUI.SidePanelPosition;
  public readonly expandMode: PlaykitUI.SidePanelMode;
  public readonly onActivate?: () => void;
  public readonly onDeactivate?: () => void;

  constructor(item: SidePanelItemDto) {
    this.label = item.label;
    this.iconComponent = item.iconComponent;
    this.panelComponent = item.panelComponent;
    this.presets = item.presets;
    this.position = item.position;
    this.expandMode = item.expandMode;
    this.onActivate = item.onActivate;
    this.onDeactivate = item.onDeactivate;
  }
}
