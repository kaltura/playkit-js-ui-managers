declare module "services/side-panels/types/types" {
    export type SidePanelPosition = 'top' | 'bottom' | 'right' | 'left';
    export type SidePanelMode = 'alongside' | 'hidden' | 'over';
    export type ReservedPresetName = 'Playback' | 'Live';
}
declare module "services/side-panels/side-panel-item-dto" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { ReservedPresetName, SidePanelPosition, SidePanelMode } from "services/side-panels/types/types";
    export class SidePanelItemDto {
        readonly label: string;
        readonly renderIcon?: ComponentClass | FunctionalComponent;
        readonly renderContent: ComponentClass | FunctionalComponent;
        readonly presets?: ReservedPresetName[];
        readonly position: SidePanelPosition;
        readonly expandMode: SidePanelMode;
        readonly hooks?: {
            onActivate: (() => void) | null;
            onDeactivate: (() => void) | null;
        };
        constructor(item: SidePanelItemDto);
    }
}
declare module "services/side-panels/ui/side-panel.component" {
    import { Component, ComponentChild, RenderableProps } from 'preact';
    type ToggleState = {
        on: boolean;
    };
    export class Toggle extends Component<any, ToggleState> {
        readonly state: ToggleState;
        constructor();
        toggle(): void;
        render(props?: RenderableProps<any>, state?: Readonly<ToggleState>, context?: any): ComponentChild;
    }
}
declare module "services/side-panels/item-metadata" {
    import { RefObject } from 'preact';
    import { Toggle } from "services/side-panels/ui/side-panel.component";
    import { SidePanelItemDto } from "services/side-panels/side-panel-item-dto";
    export class ItemMetadata {
        private static nextId;
        readonly id: number;
        readonly removeComponentFunc: () => void;
        readonly item: SidePanelItemDto;
        readonly componentRef: RefObject<Toggle>;
        constructor(item: SidePanelItemDto, componentRef: RefObject<Toggle>, removeComponentFunc: () => void);
    }
}
declare module "services/side-panels/side-panels-manager" {
    import { KalturaPlayer, Logger } from 'kaltura-player-js';
    import { SidePanelItemDto } from "services/side-panels/side-panel-item-dto";
    export class SidePanelsManager {
        private readonly player;
        private readonly activePanels;
        private readonly componentsRegistry;
        private readonly logger;
        constructor(player: KalturaPlayer, logger: Logger);
        addItem(item: SidePanelItemDto): number;
        removeItem(itemId: number): void;
        activateItem(itemId: number): void;
        deactivateItem(itemId: number): void;
        isItemActive(itemId: number): boolean;
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
    import { BasePlugin, KalturaPlayer } from 'kaltura-player-js';
    export const pluginName = "uiManagers";
    export class UIManagersPlugin extends BasePlugin {
        static defaultConfig: {};
        constructor(name: string, player: KalturaPlayer);
        reset(): void;
        destroy(): void;
        static isValid(): boolean;
    }
}
declare module "index" {
    export { SidePanelItemDto } from "services/side-panels/side-panel-item-dto";
    export { SidePanelPosition, SidePanelMode, ReservedPresetName } from "services/side-panels/types/types";
}
