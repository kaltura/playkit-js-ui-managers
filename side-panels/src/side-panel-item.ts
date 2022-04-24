import {FunctionalComponent, RefObject} from 'preact';
import {Toggle} from './components/side-panel.component';
import {ui} from 'kaltura-player-js';
const {ReservedPresetNames} = ui;

export type SidePanelPosition = 'top' | 'bottom' | 'right' | 'left';
export type SidePanelMode = 'alongside' | 'hidden' | 'over';
export type ReservedPresetName = 'Playback' | 'Live';

export class SidePanelItem {
  public renderIcon?: FunctionalComponent;
  public renderContent: FunctionalComponent;
  public presets: ReservedPresetName[];
  public position: SidePanelPosition;
  public expandMode: SidePanelMode;

  constructor(item: SidePanelItem) {
    this.renderIcon = item.renderIcon;
    this.renderContent = item.renderContent;
    this.presets = item.presets || Object.values(ReservedPresetNames);
    this.position = item.position;
    this.expandMode = item.expandMode;
  }
}

export class PanelItemData {
  public static nextId = 0;
  public id: number;
  public removeComponentFunc: () => void;
  public item: SidePanelItem;
  public componentRef: RefObject<Toggle>;
  constructor(item: SidePanelItem, componentRef: RefObject<Toggle>, removeComponentFunc: () => void) {
    this.id = ++PanelItemData.nextId;
    this.item = item;
    this.removeComponentFunc = removeComponentFunc;
    this.componentRef = componentRef;
  }
}
