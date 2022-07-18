declare module "services/side-panels/models/side-panel-item" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { PlaykitUI } from 'kaltura-player-js';
    export type PanelComponentProps = {
        isActive: boolean;
    };
    export type IconComponentProps = PanelComponentProps;
    export interface SidePanelItem {
        readonly label: string;
        readonly iconComponent?: ComponentClass<IconComponentProps> | FunctionalComponent<IconComponentProps>;
        readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
        readonly presets: PlaykitUI.ReservedPresetName[];
        readonly position: PlaykitUI.SidePanelPosition;
        readonly expandMode: PlaykitUI.SidePanelMode;
        readonly onActivate?: () => void;
        readonly onDeactivate?: () => void;
    }
}
declare module "services/side-panels/ui/panel-item-wrapper/panel-item-wrapper.component" { }
declare module "services/side-panels/ui/icon-wrapper/icon-wrapper.component" { }
declare module "services/side-panels/models/item-wrapper" { }
declare module "services/side-panels/side-panels-manager" {
    import { KalturaPlayer, Logger } from 'kaltura-player-js';
    import { SidePanelItem } from "services/side-panels/models/side-panel-item";
    export class SidePanelsManager {
        private readonly player;
        private readonly activePanels;
        private readonly componentsRegistry;
        private readonly logger;
        /**
         * @ignore
         */
        constructor(player: KalturaPlayer, logger: Logger);
        addItem(item: SidePanelItem): number | void;
        removeItem(itemId: number): void;
        activateItem(itemId: number): void;
        deactivateItem(itemId: number): void;
        isItemActive(itemId: number): boolean;
        /**
         * Rerender (uses preact Component.forceUpdate api under the hoods) the side panel item component
         * It's just for backward compatibility you should not use it.
         */
        update(itemId: number): void;
        /**
         * @ignore
         */
        reset(): void;
        private toggle;
        private expand;
        private collapse;
        private static getCounterPanelPosition;
        private static validateItem;
    }
}
declare module "ui-managers" {
    export const pluginName = "uiManagers";
}
declare module "index" { }
