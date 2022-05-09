import { ComponentClass, FunctionalComponent } from 'preact';
import { ReservedPresetName, SidePanelPosition, SidePanelMode } from '../types/types';
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
export declare class SidePanelItem implements ISidePanelItemDto {
    readonly label: string;
    readonly renderIcon?: ComponentClass | FunctionalComponent;
    readonly renderContent: ComponentClass | FunctionalComponent;
    readonly presets?: ReservedPresetName[];
    readonly position: SidePanelPosition;
    readonly expandMode: SidePanelMode;
    readonly onActivate?: () => void;
    readonly onDeactivate?: () => void;
    constructor(item: ISidePanelItemDto);
}
