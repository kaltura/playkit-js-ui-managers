declare module "services/side-panels/types/types" {
    export type SidePanelPosition = 'top' | 'bottom' | 'right' | 'left';
    export type SidePanelMode = 'alongside' | 'hidden' | 'over';
    export type ReservedPresetName = 'Playback' | 'Live';
}
declare module "services/side-panels/side-panel-item-dto" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { ReservedPresetName, SidePanelPosition, SidePanelMode } from "services/side-panels/types/types";
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
    export class SidePanelItemDto implements ISidePanelItemDto {
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
}
declare module "services/side-panels/ui/side-panel.component" { }
declare module "services/side-panels/item-wrapper" { }
declare module "services/side-panels/side-panels-manager" {
    import { KalturaPlayer, Logger } from 'kaltura-player-js';
    import { ISidePanelItemDto } from "services/side-panels/side-panel-item-dto";
    /**
     * Class representing a socket connection.
     *
     * @class
     */
    export class SidePanelsManager {
        private readonly player;
        private readonly activePanels;
        private readonly componentsRegistry;
        private readonly logger;
        constructor(player: KalturaPlayer, logger: Logger);
        /**
         * Represents a book.
         * @param {SidePanelItemDto} item - The title of the book.
         */
        addItem(item: ISidePanelItemDto): number;
        removeItem(itemId: number): void;
        activateItem(itemId: number): void;
        deactivateItem(itemId: number): void;
        isItemActive(itemId: number): boolean;
        reset(): void;
        private toggle;
        private expand;
        private collapse;
        private injectIconComponent;
        private injectPanelComponent;
        private static getPanelArea;
        private static getOppositePanelPosition;
        private static validateItem;
    }
}
declare module "services-managers" {
    export const pluginName = "uiManagers";
}
declare module "index" { }
