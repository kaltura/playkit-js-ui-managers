import { PlaykitUI } from "@playkit-js/kaltura-player-js";

declare module "services/upper-bar-manager/models/svg-icon" {
    export interface SvgIcon {
        path: string;
        viewBox?: string;
    }
}
declare module "services/side-panels-manager/models/side-panel-item" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { PlaykitUI } from '@playkit-js/kaltura-player-js';
    import { SvgIcon } from "services/upper-bar-manager/models/svg-icon";
    export type PanelComponentProps = {
        isActive: boolean;
    };
    export interface SidePanelItem {
        readonly label: string;
        readonly iconComponent?: {
            component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
            svgIcon: SvgIcon;
        };
        readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
        readonly presets: PlaykitUI.ReservedPresetName[];
        readonly position: PlaykitUI.SidePanelPosition;
        readonly expandMode: PlaykitUI.SidePanelMode;
        readonly onActivate?: () => void;
        readonly onDeactivate?: () => void;
    }
}
declare module "services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component" { }
declare module "services/upper-bar-manager/models/icon-dto" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { KalturaPluginNames } from "ui-managers";
    import { SvgIcon } from "services/upper-bar-manager/models/svg-icon";
    export interface IconDto {
        label: KalturaPluginNames | string;
        component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
        svgIcon: SvgIcon;
        onClick: () => void;
        presets?: PlaykitUI.ReservedPresetName[];
    }
}
declare module "services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component" {
    import { Component, ComponentChild, RefObject } from 'preact';
    type IconWrapperProps = {
        ref: RefObject<IconWrapper>;
        onClick: () => void;
    };
    export class IconWrapper extends Component<IconWrapperProps> {
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/models/icon-model" {
    import { ComponentClass, FunctionalComponent, RefObject } from 'preact';
    import { IconDto } from "services/upper-bar-manager/models/icon-dto";
    import { KalturaPluginNames } from "ui-managers";
    import { IconWrapper } from "services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component";
    import { SvgIcon } from "services/upper-bar-manager/models/svg-icon";
    export class IconModel {
        private static nextId;
        readonly id: number;
        label: KalturaPluginNames | string;
        componentRef: RefObject<IconWrapper>;
        onClick: () => void;
        component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
        svgIcon: SvgIcon;
        constructor(item: IconDto);
        update(): void;
    }
}
declare module "services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component" {
    import { Component, ComponentChild } from 'preact';
    import { IconModel } from "services/upper-bar-manager/models/icon-model";
    type DropdownBarProps = {
        controls: IconModel[];
    };
    export class DropdownBar extends Component<DropdownBarProps> {
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/ui/more-icon/more-icon.component" {
    import { Component, ComponentChild } from 'preact';
    import { PlaykitUI } from '@playkit-js/kaltura-player-js';
    import { IconModel } from "services/upper-bar-manager/models/icon-model";
    import EventManager = PlaykitUI.EventManager;
    type MoreIconState = {
        toggle: boolean;
    };
    type MoreIconProps = {
        icons: IconModel[];
        moreIconTxt?: string;
        eventManager?: EventManager;
    };
    export class MoreIcon extends Component<MoreIconProps, MoreIconState> {
        private readonly moreButtonRef;
        constructor();
        componentDidMount(): void;
        handleClickOutside(event: PointerEvent): void;
        private handleOnClick;
        private handleOnKeyDown;
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/ui/displayed-bar/displayed-bar.component" {
    import { Component, ComponentChild, RefObject } from 'preact';
    import { IconModel } from "services/upper-bar-manager/models/icon-model";
    import { KalturaPluginNames } from "ui-managers";
    type DisplayedBarState = {
        controls: IconModel[];
    };
    type DisplayedBarProps = {
        ref: RefObject<DisplayedBar>;
        iconsOrder: {
            [key in KalturaPluginNames | string]: number;
        };
    };
    export class DisplayedBar extends Component<DisplayedBarProps, DisplayedBarState> {
        constructor();
        private splitControlsIntoDisplayedAndDropdown;
        update(icons: IconModel[]): void;
        private splitControls;
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/upper-bar-manager" {
    import { KalturaPlayer, Logger } from '@playkit-js/kaltura-player-js';
    import { IconDto } from "services/upper-bar-manager/models/icon-dto";
    import { KalturaPluginNames } from "ui-managers";
    type UpperBarManagerConfig = {
        pluginsIconsOrder: {
            [key in KalturaPluginNames | string]: number;
        };
    };
    export class UpperBarManager {
        private readonly player;
        private readonly logger;
        private readonly componentsRegistry;
        private readonly displayedBarComponentRef;
        /**
         * @ignore
         */
        constructor(player: KalturaPlayer, logger: Logger, config: UpperBarManagerConfig);
        add(icon: IconDto): number | undefined;
        remove(itemId: number): void;
        isActive(itemId: number): boolean;
        update(iconId: number): void;
        private injectDisplayedBarComponentWrapper;
        private static validateItem;
    }
}
declare module "services/side-panels-manager/models/item-wrapper" { }
declare module "services/side-panels-manager/side-panels-manager" {
    import { KalturaPlayer, Logger } from '@playkit-js/kaltura-player-js';
    import { SidePanelItem } from "services/side-panels-manager/models/side-panel-item";
    export class SidePanelsManager {
        private readonly player;
        private readonly activePanels;
        private readonly componentsRegistry;
        private readonly logger;
        /**
         * @ignore
         */
        constructor(player: KalturaPlayer, logger: Logger);
        add(item: SidePanelItem): number | void;
        remove(itemId: number): void;
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
        /**
         * @ignore
         */
        destroy(): void;
        private removeAllItems;
        private toggle;
        private expand;
        private collapse;
        private static getCounterPanelPosition;
        private static validateItem;
    }
}
declare module "ui-managers" {
    export const pluginName = "uiManagers";
    export type KalturaPluginNames = 'Navigation' | 'Q&A' | 'Transcript' | 'Download' | 'Playlist' | 'Related' | 'Share' | 'Info' | 'Moderation';
    export type UiManagerConfig = {
        upperBarManager: {
            pluginsIconsOrder: {
                [key in KalturaPluginNames | string]: number;
            };
        };
    };
}
declare module "index" { }
