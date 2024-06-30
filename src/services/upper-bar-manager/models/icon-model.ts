import { ComponentClass, FunctionalComponent, RefObject, createRef } from 'preact';
import { IconDto } from './icon-dto';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';
import { SvgIcon } from './svg-icon';
import { PlaykitUI, ui } from '@playkit-js/kaltura-player-js';
const { ReservedPresetNames } = ui;

export class IconModel {
  private static nextId = 0;
  public readonly id: number;
  public displayName: string;
  public ariaLabel: any;
  public order: number;
  public componentRef: RefObject<IconWrapper>;
  public onClick: (e: MouseEvent | KeyboardEvent) => void;
  public component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
  public svgIcon: SvgIcon | (() => SvgIcon);
  public presets: PlaykitUI.ReservedPresetName[];
  public selfManagement: boolean;
  constructor(item: IconDto) {
    this.id = ++IconModel.nextId;
    this.displayName = item.displayName;
    this.ariaLabel = item.ariaLabel;
    this.order = item.order;
    this.component = item.component;
    this.svgIcon = item.svgIcon;
    this.onClick = item.onClick;
    this.componentRef = createRef();
    this.presets =
      item.presets && item.presets.length > 0 ? item.presets : [ReservedPresetNames.Playback, ReservedPresetNames.Live];
    this.selfManagement = item.selfManagement || false;
  }

  public update(): void {
    this.componentRef.current?.forceUpdate();
  }
}
