declare module "services/side-panels-manager/models/side-panel-item" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { PlaykitUI } from '@playkit-js/kaltura-player-js';
    export type PanelComponentProps = {
        isActive: boolean;
    };
    export interface SidePanelItem {
        readonly label: string;
        readonly panelComponent: ComponentClass<PanelComponentProps> | FunctionalComponent<PanelComponentProps>;
        readonly presets: PlaykitUI.ReservedPresetName[];
        readonly position: PlaykitUI.SidePanelPosition;
        readonly expandMode: PlaykitUI.SidePanelMode;
    }
    export const DETACHED_WINDOW_STYLES: {
        margin: string;
        backgroundColor: string;
    };
    export const DETACH_CONTAINER_CLASS = "playkit-player detach-sidebar-container";
    export const CLOSE_DETACH_EVENTS: string[];
    export const DETACH_POSITION_INTERVAL = 1000;
}
declare module "services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component" { }
declare module "services/side-panels-manager/models/item-wrapper" {
    import { FunctionalComponent, ComponentClass } from 'preact';
    export interface DetachWindowOptions {
        onDetachWindowClose: () => void;
        top?: number;
        left?: number;
        width: number;
        height: number;
        title: string;
        maxWidth?: number;
        maxHeight?: number;
        attachPlaceholder?: ComponentClass | FunctionalComponent;
        onDetachResize?: (x: number, y: number) => void;
        onDetachMove?: (x: number, y: number) => void;
    }
}
declare module "services/side-panels-manager/side-panels-manager" {
    import { KalturaPlayer, Logger } from '@playkit-js/kaltura-player-js';
    import { SidePanelItem } from "services/side-panels-manager/models/side-panel-item";
    import { DetachWindowOptions } from "services/side-panels-manager/models/item-wrapper";
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
        isItemDetached(itemId: number): boolean;
        detachItem(itemId: number, options: DetachWindowOptions): void;
        attachItem(itemId: number): void;
        getDetachedRef(itemId: number): HTMLDivElement;
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
declare module "services/upper-bar-manager/models/svg-icon" {
    export interface SvgIcon {
        path: string;
        viewBox?: string;
    }
}
declare module "services/upper-bar-manager/models/icon-dto" {
    import { ComponentClass, FunctionalComponent } from 'preact';
    import { SvgIcon } from "services/upper-bar-manager/models/svg-icon";
    import { PlaykitUI } from '@playkit-js/kaltura-player-js';
    export interface IconDto {
        /**
         * An ID uniquely identify a control (should be the plugin name in case of a plugin icon)
         */
        displayName: string;
        /**
         * The title of the icon. If empty, the title will default to the value of ariaLabel - string | </Text> of preact-i18n Element
         */
        label?: string | (() => string);
        /**
         * An HTML Aria label attribute that would be attached to the provided icon - string | </Text> of preact-i18n Element
         */
        ariaLabel: string | (() => string);
        /**
         * The plugin priority order (the lower the number the higher the priority - the order is from left to right - flows from upper bar (max 5 icon) to dropdown bar(the reset and again from top to bottom))
         */
        order: number;
        /**
         * The icon react component
         */
        component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
        /**
         * Icon that will appear in the dropdown menu
         */
        svgIcon: SvgIcon | (() => SvgIcon);
        /**
         * The icon handler
         *
         * @remarks
         * You can also define the handler inside the component itself and send an empty function here
         * (also useful as backwards compatibility for some plugins)
         */
        onClick: (e: MouseEvent | KeyboardEvent) => void;
        /**
         * Relevant presets for the icon
         */
        presets?: PlaykitUI.ReservedPresetName[];
        /**
         * An indication whether the upper bar should handle the onClick callback of the component or not
         */
        shouldHandleOnClick?: boolean;
        /**
         * An indication whether the icon is disabled or not
         */
        isDisabled?: boolean | (() => boolean);
    }
}
declare module "services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component" {
    import { Component, ComponentChild, RefObject } from 'preact';
    type IconWrapperProps = {
        ref: RefObject<IconWrapper>;
        onClick: (e: MouseEvent | KeyboardEvent) => void;
    };
    export class IconWrapper extends Component<IconWrapperProps> {
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/models/icon-model" {
    import { ComponentClass, FunctionalComponent, RefObject } from 'preact';
    import { IconDto } from "services/upper-bar-manager/models/icon-dto";
    import { IconWrapper } from "services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component";
    import { SvgIcon } from "services/upper-bar-manager/models/svg-icon";
    import { PlaykitUI } from '@playkit-js/kaltura-player-js';
    export class IconModel {
        private static nextId;
        readonly id: number;
        displayName: string;
        label: string | (() => string);
        ariaLabel: any;
        order: number;
        componentRef: RefObject<IconWrapper>;
        onClick: (e: MouseEvent | KeyboardEvent) => void;
        component: ComponentClass<Record<string, never>> | FunctionalComponent<Record<string, never>>;
        svgIcon: SvgIcon | (() => SvgIcon);
        presets: PlaykitUI.ReservedPresetName[];
        shouldHandleOnClick: boolean;
        isDisabled: boolean | (() => boolean);
        constructor(item: IconDto);
        update(): void;
    }
}
declare module "services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item" {
    import { h } from 'preact';
    import { SvgIcon } from "services/upper-bar-manager/models/svg-icon";
    type DropdownBarItemProps = {
        displayName: string;
        text: string;
        ariaLabel: string;
        isDisabled?: boolean;
        icon: SvgIcon;
        onClick: (e: KeyboardEvent | MouseEvent) => void;
        onDropdownClick: () => void;
        tooltipPosition: string;
    };
    const DropdownBarItem: ({ displayName, text, ariaLabel, isDisabled, icon, onClick, onDropdownClick, tooltipPosition }: DropdownBarItemProps) => h.JSX.Element;
    export { DropdownBarItem };
}
declare module "services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component" {
    import { Component, ComponentChild } from 'preact';
    import { IconModel } from "services/upper-bar-manager/models/icon-model";
    import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
    type DropdownBarProps = {
        controls: IconModel[];
        onDropdownClick: () => void;
        player: KalturaPlayer;
    };
    export class DropdownBar extends Component<DropdownBarProps> {
        calculateMaxHeight(): number;
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/ui/more-icon/more-icon.component" {
    import { Component, ComponentChild } from 'preact';
    import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';
    import { IconModel } from "services/upper-bar-manager/models/icon-model";
    import EventManager = PlaykitUI.EventManager;
    type MoreIconProps = {
        icons: IconModel[];
        onClick: () => void;
        showDropdown: boolean;
        moreIconTxt?: string;
        eventManager?: EventManager;
        player: KalturaPlayer;
    };
    export class MoreIcon extends Component<MoreIconProps> {
        private readonly moreButtonRef;
        constructor();
        componentDidMount(): void;
        handleClickOutside(event: PointerEvent): void;
        render(): ComponentChild;
    }
}
declare module "services/upper-bar-manager/ui/displayed-bar/displayed-bar.component" {
    import { Component, ComponentChild, RefObject } from 'preact';
    import { IconModel } from "services/upper-bar-manager/models/icon-model";
    import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
    import { MoreIcon } from "services/upper-bar-manager/ui/more-icon/more-icon.component";
    type DisplayedBarState = {
        showDropdown: boolean;
    };
    type DisplayedBarProps = {
        getControls: () => IconModel[];
        ref: RefObject<DisplayedBar>;
        player: KalturaPlayer;
    };
    type PropsFromRedux = {
        playerSize?: string;
    };
    export class DisplayedBar extends Component<DisplayedBarProps & PropsFromRedux, DisplayedBarState> {
        moreIconRef: RefObject<MoreIcon>;
        constructor();
        private handleOnClick;
        private closeDropdown;
        private splitControlsIntoDisplayedAndDropdown;
        update: () => void;
        private splitControls;
        render(): ComponentChild;
    }
}
declare module "types/kaltura-plugins-display-names" {
    export type KalturaPluginsDisplayNames = 'Navigation' | 'Q&A' | 'Transcript' | 'Download' | 'Playlist' | 'Related' | 'Share' | 'Info' | 'Moderation';
}
declare module "services/upper-bar-manager/move-controls-manager" {
    import { KalturaPlayer, Logger } from '@playkit-js/kaltura-player-js';
    import { UpperBarManager } from "services/upper-bar-manager/upper-bar-manager";
    export class MoveControlsManager {
        private readonly player;
        private readonly logger;
        private store;
        private upperBarManager;
        private currentState;
        private iconIds;
        constructor(player: KalturaPlayer, logger: Logger, upperBarManager: UpperBarManager, redux: any);
        private get bottomBarRegistryManager();
        private get state();
        private handleStoreChange;
    }
}
declare module "services/upper-bar-manager/upper-bar-manager" {
    import { KalturaPlayer, Logger } from '@playkit-js/kaltura-player-js';
    import { IconDto } from "services/upper-bar-manager/models/icon-dto";
    export class UpperBarManager {
        private readonly player;
        private readonly logger;
        private readonly componentsRegistry;
        private readonly displayedBarComponentRefs;
        private iconsOrder;
        private moveControlsManager;
        /**
         * @ignore
         */
        constructor(player: KalturaPlayer, logger: Logger);
        add(icon: IconDto): number | undefined;
        remove(itemId: number): void;
        isActive(itemId: number): boolean;
        update(iconId: number): void;
        private getControls;
        getMorePluginButton(): HTMLButtonElement;
        focusPluginButton(pluginId: number, event?: KeyboardEvent): void;
        private injectDisplayedBarComponentWrapper;
        private static validateItem;
    }
}
declare module "services/preset-manager/ui-player-adapter" {
    import { Component } from 'preact';
    import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
    export interface UIPlayerAdapterProps {
        player: KalturaPlayer;
        onMount: (player: KalturaPlayer) => void;
        onUnmount: (player: KalturaPlayer) => void;
    }
    export class UIPlayerAdapter extends Component<UIPlayerAdapterProps> {
        static defaultProps: {
            player: any;
        };
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): any;
    }
}
declare module "services/preset-manager/models/preset-item-data" {
    import { ComponentChild } from 'preact';
    export enum ReservedPresetNames {
        Playback = "Playback",
        Live = "Live"
    }
    export enum ReservedPresetAreas {
        'PresetFloating' = "PresetFloating",
        'BottomBarLeftControls' = "BottomBarLeftControls",
        'BottomBarRightControls' = "BottomBarRightControls",
        'TopBarLeftControls' = "TopBarLeftControls",
        'TopBarRightControls' = "TopBarRightControls",
        'SidePanelTop' = "SidePanelTop",
        'SidePanelLeft' = "SidePanelLeft",
        'SidePanelRight' = "SidePanelRight",
        'SidePanelBottom' = "SidePanelBottom",
        'PresetArea' = "PresetArea",
        'InteractiveArea' = "InteractiveArea",
        'PlayerArea' = "PlayerArea",
        'VideoArea' = "VideoArea"
    }
    export enum RelativeToTypes {
        Before = "Before",
        After = "After",
        Replace = "Replace"
    }
    export interface PresetItemData {
        label: string;
        fillContainer?: boolean;
        isolateComponent?: boolean;
        presetAreas: Record<ReservedPresetNames | string, ReservedPresetAreas | string>;
        renderChild: () => ComponentChild;
        relativeTo?: {
            type: RelativeToTypes;
            name: string;
        };
    }
}
declare module "services/preset-manager/ui/managed-component" {
    import { h, Component, ComponentChildren } from 'preact';
    type ManagedComponentState = {
        toggler: boolean;
    };
    type ManagedComponentProps = {
        isShown: () => boolean;
        renderChildren: (playerSize: string) => ComponentChildren;
        label: string;
        fillContainer: boolean;
        playerSize?: string;
        updateOnPlayerSizeChanged?: boolean;
    };
    export class ManagedComponent extends Component<ManagedComponentProps, ManagedComponentState> {
        static defaultProps: {
            fillContainer: boolean;
        };
        update(): void;
        shouldComponentUpdate(prevProps: Readonly<ManagedComponentProps>): boolean;
        componentDidMount(): void;
        render(): h.JSX.Element;
    }
}
declare module "services/preset-manager/ui/preset-item" {
    import { ComponentChild } from 'preact';
    import { PresetItemData } from "services/preset-manager/models/preset-item-data";
    import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
    import { ManagedComponent } from "services/preset-manager/ui/managed-component";
    export interface PresetItemOptions {
        kalturaPlayer: KalturaPlayer;
        data: PresetItemData;
    }
    export interface KalturaPlayerPresetComponent {
        label: string;
        presets: string[];
        container: string;
        get: () => () => ManagedComponent | ComponentChild;
        afterComponent?: string;
        beforeComponent?: string;
        replaceComponent?: string;
    }
    export class PresetItem {
        private _options;
        constructor(options: PresetItemOptions);
        get playerConfig(): KalturaPlayerPresetComponent[];
        private _render;
        private _onDestroy;
        private _onCreate;
    }
}
declare module "services/preset-manager/preset-manager" {
    import { EventsManager } from '@playkit-js/common/dist/ui-common/events-manager';
    import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';
    import { PresetItemData } from "services/preset-manager/models/preset-item-data";
    export interface PresetManagerOptions {
        kalturaPlayer: KalturaPlayer;
        eventManager: PlaykitUI.EventManager;
    }
    export enum PresetManagerEventTypes {
        PresetResizeEvent = "PresetResizeEvent",
        VideoResizeEvent = "VideoResizeEvent"
    }
    export interface PresetResizeEvent {
        type: PresetManagerEventTypes.PresetResizeEvent;
    }
    export interface VideoResizeEvent {
        type: PresetManagerEventTypes.VideoResizeEvent;
    }
    export type PresetManagerEvents = PresetResizeEvent | VideoResizeEvent;
    export class PresetManager {
        private _events;
        private _eventManager;
        private _kalturaPlayer;
        constructor(options: PresetManagerOptions);
        private _registerToPlayer;
        private _notifyVideoResize;
        private _notifyUIPresetResize;
        private _unregisterToPlayer;
        on: EventsManager<PresetManagerEvents>['on'];
        off: EventsManager<PresetManagerEvents>['off'];
        add(data: PresetItemData): void;
    }
}
declare module "services/floating-manager/models/floating-item-data" {
    import { ComponentChild } from 'preact';
    import { PlayerSize, VideoSize } from '@playkit-js/common/dist/ui-common/common-types';
    export type FloatingUIMode = 'MediaLoaded' | 'OnDemand' | 'Immediate' | 'FirstPlay';
    export type FloatingPosition = 'VideoArea' | 'PresetArea' | 'InteractiveArea';
    export interface FloatingItemData {
        label: string;
        mode: FloatingUIMode;
        renderContent: (floatingItemProps: FloatingItemProps) => ComponentChild;
        className?: string;
        position: FloatingPosition;
    }
    export interface FloatingItemProps {
        currentTime: number;
        canvas: {
            playerSize: PlayerSize;
            videoSize: VideoSize;
        };
    }
}
declare module "services/floating-manager/ui/floating-item" {
    import { h } from 'preact';
    import { FloatingItemData, FloatingItemProps } from "services/floating-manager/models/floating-item-data";
    import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';
    export interface FloatingItemOptions {
        kalturaPlayer: KalturaPlayer;
        eventManager: PlaykitUI.EventManager;
        data: FloatingItemData;
    }
    export class FloatingItem {
        private _options;
        private _isShown;
        private _componentRef;
        constructor(options: FloatingItemOptions);
        get data(): FloatingItemData;
        remove: () => void;
        add: () => void;
        update: () => void;
        /**
         * destory the ui item
         */
        destroy(): void;
        renderFloatingChild(props: FloatingItemProps): h.JSX.Element;
        private _addPlayerBindings;
    }
}
declare module "event-type/ui-managers-event" {
    export const UiManagersEvent: {
        UPDATE_COMPONENTS: string;
    };
}
declare module "services/floating-manager/floating-manager" {
    import { PresetManager } from "services/preset-manager/preset-manager";
    import { KalturaPlayer, PlaykitUI, Logger } from '@playkit-js/kaltura-player-js';
    import { FloatingItem } from "services/floating-manager/ui/floating-item";
    import { FloatingItemData } from "services/floating-manager/models/floating-item-data";
    export interface FloatingManagerOptions {
        kalturaPlayer: KalturaPlayer;
        presetManager: PresetManager;
        eventManager: PlaykitUI.EventManager;
        logger: Logger;
    }
    export class FloatingManager {
        private _options;
        private _eventManager;
        private _registered;
        private _logger;
        private _items;
        private _componentRef;
        private _cache;
        constructor(_options: FloatingManagerOptions);
        /**
         * initialize new floating ui item
         * @param item
         */
        add(data: FloatingItemData): FloatingItem | null;
        remove(item: FloatingItem): void;
        reset(): void;
        private _getRendererProps;
        private _updateCachedCanvas;
        private _renderItems;
        private _renderChild;
        private _updateComponents;
        private _onTimeUpdate;
        private _onMediaLoaded;
        private _onLoadedData;
        private _addPlayerBindings;
    }
}
declare module "services/toast-manager/models/toast-severity" {
    export type ToastSeverity = 'Info' | 'Success' | 'Warning' | 'Error';
}
declare module "services/toast-manager/models/toast-type" {
    export enum ToastType {
        TopRight = "topRight",
        TopLeft = "topLeft",
        BottomRight = "bottomRight",
        BottomLeft = "bottomLeft"
    }
}
declare module "services/toast-manager/models/index" {
    import { ToastSeverity } from "services/toast-manager/models/toast-severity";
    import { ToastType } from "services/toast-manager/models/toast-type";
    export { ToastSeverity, ToastType };
}
declare module "services/toast-manager/ui/toast/toast" {
    import { Component, h } from 'preact';
    import { ToastSeverity } from "services/toast-manager/models/index";
    export interface ToastProps {
        id: string;
        title: string;
        text: string;
        icon: any;
        severity: ToastSeverity;
        onClose: (id: string) => void;
        onClick: () => void;
    }
    interface ToastState {
        isShown: boolean;
    }
    export class Toast extends Component<ToastProps, ToastState> {
        state: {
            isShown: boolean;
        };
        private _onClick;
        private _onClose;
        private _getToastSeverityClass;
        render(): h.JSX.Element;
    }
}
declare module "services/toast-manager/ui/toasts-container/toasts-container" {
    import { Component, h } from 'preact';
    import { ToastProps } from "services/toast-manager/ui/toast/toast";
    import { ToastType } from "services/toast-manager/models/index";
    export interface ToastsContainerProps {
        toasts: ToastProps[];
        toastType?: ToastType;
    }
    export class ToastsContainer extends Component<ToastsContainerProps> {
        render(): h.JSX.Element;
    }
}
declare module "services/toast-manager/toast-manager" {
    import { FloatingManager } from "services/floating-manager/floating-manager";
    import { ToastSeverity, ToastType } from "services/toast-manager/models/index";
    export interface ToastManagerOptions {
        floatingManager: FloatingManager;
        dispatchEvent: (event: string) => void;
    }
    export interface ToastItemData {
        title: string;
        text: string;
        icon: any;
        severity: ToastSeverity;
        duration: number;
        onClick: () => void;
        toastType?: ToastType;
    }
    export class ToastManager {
        private options;
        private dispatchEvent;
        private _options;
        private _toasts;
        private _floatingItem;
        private _dispatchEvent;
        constructor(options: ToastManagerOptions, dispatchEvent: (event: string) => void);
        add(data: ToastItemData): void;
        reset(): void;
        private _startDurationTimer;
        private _remove;
        private _addToastsContainer;
        private _removeToastsContainer;
        private _updateToastsUI;
        private _findToastIndexById;
    }
}
declare module "services/banner-manager/models/banner-content" {
    export interface BannerContent {
        text: string;
        title?: string;
        icon?: any;
    }
}
declare module "services/banner-manager/ui/banner/someone-asks-large" {
    import { h } from 'preact';
    export const SomeoneAsksLarge: (props: any) => h.JSX.Element;
}
declare module "services/banner-manager/ui/banner/someone-asks-small" {
    import { h } from 'preact';
    export const SomeoneAsksSmall: (props: any) => h.JSX.Element;
}
declare module "services/banner-manager/ui/banner/banner" {
    import { Component, h } from 'preact';
    import { BannerContent } from "services/banner-manager/models/banner-content";
    export interface BannerProps {
        content: BannerContent;
    }
    export class Banner extends Component<BannerProps> {
        render({ content }: BannerProps): h.JSX.Element;
        private _defaultIcon;
    }
}
declare module "services/banner-manager/ui/banner/index" {
    export { Banner } from "services/banner-manager/ui/banner/banner";
}
declare module "services/banner-manager/ui/banner-container/banner-container" {
    import { Component, h } from 'preact';
    export interface BannerContainerProps {
        onClose: () => void;
        theme: BannerTheme;
    }
    interface BannerTheme {
        backgroundColor: string;
        blur: string;
    }
    export class BannerContainer extends Component<BannerContainerProps> {
        render(props: BannerContainerProps): h.JSX.Element;
    }
}
declare module "services/banner-manager/banner-manager" {
    import { FloatingManager } from "services/floating-manager/floating-manager";
    import { FloatingItemProps } from "services/floating-manager/models/floating-item-data";
    import { ComponentChild } from 'preact';
    import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
    import { BannerContent } from "services/banner-manager/models/banner-content";
    export interface BannerConfig {
        theme: {
            backgroundColor: string;
            blur: string;
        };
    }
    export interface BannerOptions {
        content: BannerContent;
        autoClose?: boolean;
        duration?: number;
        renderContent?: (content: BannerContent, floatingItemProps: FloatingItemProps) => ComponentChild;
    }
    export interface BannerManagerOptions {
        floatingManager: FloatingManager;
        kalturaPlayer: KalturaPlayer;
    }
    export interface BannerState {
        visibilityMode: VisibilityMode;
    }
    export enum VisibilityMode {
        VISIBLE = "VISIBLE",
        HIDDEN = "HIDDEN"
    }
    /**
     * banner manager manages the display (add / remove) of a single banner in the player.
     */
    export class BannerManager {
        private options;
        private _options;
        private _floatingItem;
        private _timerSubscription;
        private _bannerConfig;
        constructor(options: BannerManagerOptions);
        add(props: BannerOptions): BannerState;
        remove(): void;
        reset(): void;
        private _createRenderBanner;
        private _handleCloseEvent;
        private _startDurationTimer;
        private _getState;
    }
}
declare module "services/component-injection-manager/models/injection-position" {
    export enum InjectionPosition {
        BottomRight = "bottom-right",
        SideBySide = "side-by-side"
    }
}
declare module "services/component-injection-manager/models/inject-options" {
    import { VNode } from 'preact';
    import { InjectionPosition } from "services/component-injection-manager/models/injection-position";
    export type ComponentFactory = (props?: Record<string, unknown>) => VNode;
    export interface InjectOptions {
        position: InjectionPosition;
        component: ComponentFactory;
        props?: Record<string, unknown>;
    }
}
declare module "services/component-injection-manager/models/index" {
    export { InjectionPosition } from "services/component-injection-manager/models/injection-position";
    export { InjectOptions, ComponentFactory } from "services/component-injection-manager/models/inject-options";
}
declare module "services/component-injection-manager/ui/bottom-right-overlay" {
    import { FunctionalComponent, ComponentChild } from 'preact';
    export interface BottomRightOverlayProps {
        children?: ComponentChild;
    }
    export const BottomRightOverlay: FunctionalComponent<BottomRightOverlayProps>;
}
declare module "services/component-injection-manager/ui/side-by-side-wrapper" {
    import { FunctionalComponent } from 'preact';
    import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
    import { ComponentFactory } from "services/component-injection-manager/models/index";
    export interface SideBySideWrapperProps {
        player: KalturaPlayer;
        component: ComponentFactory;
        componentProps?: Record<string, unknown>;
    }
    export const SideBySideWrapper: FunctionalComponent<SideBySideWrapperProps>;
}
declare module "services/component-injection-manager/ui/index" {
    export { BottomRightOverlay } from "services/component-injection-manager/ui/bottom-right-overlay";
    export { SideBySideWrapper } from "services/component-injection-manager/ui/side-by-side-wrapper";
}
declare module "services/component-injection-manager/component-injection-manager" {
    import { KalturaPlayer, PlaykitUI } from '@playkit-js/kaltura-player-js';
    import { InjectionPosition, InjectOptions } from "services/component-injection-manager/models/index";
    export interface ComponentInjectionManagerOptions {
        kalturaPlayer: KalturaPlayer;
        eventManager: PlaykitUI.EventManager;
    }
    export class ComponentInjectionManager {
        private _kalturaPlayer;
        private _eventManager;
        private _currentComponent;
        constructor(options: ComponentInjectionManagerOptions);
        inject(options: InjectOptions): void;
        switchPosition(position: InjectionPosition): void;
        remove(): void;
        getCurrentPosition(): InjectionPosition | null;
        destroy(): void;
        private _removeCurrentComponent;
        private _renderComponent;
    }
}
declare module "ui-managers" {
    export const pluginName = "uiManagers";
}
declare module "index" {
    export { ComponentInjectionManager } from "services/component-injection-manager/component-injection-manager";
    export type { ComponentInjectionManagerOptions } from "services/component-injection-manager/component-injection-manager";
    export { InjectionPosition, InjectOptions, ComponentFactory } from "services/component-injection-manager/models/index";
}
