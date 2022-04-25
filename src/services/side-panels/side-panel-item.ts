import {FunctionalComponent, RefObject} from 'preact';
import {Toggle} from './components/side-panel.component';
import {ui} from 'kaltura-player-js';
const {ReservedPresetNames} = ui;

export type SidePanelPosition = 'top' | 'bottom' | 'right' | 'left';
export type SidePanelMode = 'alongside' | 'hidden' | 'over';
export type ReservedPresetName = 'Playback' | 'Live';

export class SidePanelItemDto {
  readonly label: string;
  readonly renderIcon?: FunctionalComponent;
  readonly renderContent: FunctionalComponent;
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

export class ItemMetadata {
  private static nextId = 0;
  readonly id: number;
  readonly removeComponentFunc: () => void;
  readonly item: SidePanelItemDto;
  readonly componentRef: RefObject<Toggle>;
  constructor(item: SidePanelItemDto, componentRef: RefObject<Toggle>, removeComponentFunc: () => void) {
    this.id = ++ItemMetadata.nextId;
    this.item = item;
    this.removeComponentFunc = removeComponentFunc;
    this.componentRef = componentRef;
  }
}
