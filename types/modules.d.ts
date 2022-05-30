declare module "services/side-panels/models/side-panel-item-dto" {
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
        readonly label: string;
        readonly iconComponent?: ComponentClass<IconComponentProps> | FunctionalComponent<IconComponentProps>;
        readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
        readonly presets: PlaykitUI.ReservedPresetName[];
        readonly position: PlaykitUI.SidePanelPosition;
        readonly expandMode: PlaykitUI.SidePanelMode;
        readonly onActivate?: () => void;
        readonly onDeactivate?: () => void;
        constructor(item: SidePanelItemDto);
    }
}
declare module "services/side-panels/ui/panel-item-wrapper/panel-item-wrapper.component" { }
declare module "services/side-panels/ui/icon-wrapper/icon-wrapper.component" { }
declare module "services/side-panels/models/item-wrapper" { }
declare module "services/side-panels/side-panels-manager" {
    import { KalturaPlayer, Logger } from 'kaltura-player-js';
    import { SidePanelItemDto } from "services/side-panels/models/side-panel-item-dto";
    export class SidePanelsManager {
        private readonly player;
        private readonly activePanels;
        private readonly componentsRegistry;
        private readonly logger;
        constructor(player: KalturaPlayer, logger: Logger);
        addItem(item: SidePanelItemDto): number | void;
        removeItem(itemId: number): void;
        activateItem(itemId: number): void;
        deactivateItem(itemId: number, switchMode?: boolean): void;
        isItemActive(itemId: number): boolean;
        update(itemId: number): void;
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
declare module "ui-managers" {
    export const pluginName = "uiManagers";
}
declare module "index" { }
