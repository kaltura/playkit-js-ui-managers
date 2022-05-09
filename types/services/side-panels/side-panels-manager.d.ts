import { KalturaPlayer, Logger } from 'kaltura-player-js';
import { ISidePanelItemDto } from './models/side-panel-item-dto';
export declare class SidePanelsManager {
    private readonly player;
    private readonly activePanels;
    private readonly componentsRegistry;
    private readonly logger;
    constructor(player: KalturaPlayer, logger: Logger);
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
