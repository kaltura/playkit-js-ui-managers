import { RefObject } from 'preact';
import { PanelItemWrapper } from '../ui/panel-item-wrapper/panel-item-wrapper.component';
import { IconWrapper } from '../ui/icon-wrapper/icon-wrapper.component';
import { SidePanelItem } from './side-panel-item-dto';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  public readonly id: number;
  public readonly removePanelComponentFn: () => void;
  public readonly removeIconComponentFn: () => void;
  public readonly item: SidePanelItem;
  public readonly panelItemComponentRef: RefObject<PanelItemWrapper>;
  public readonly iconComponentRef: RefObject<IconWrapper> | undefined;
  constructor(
    item: SidePanelItem,
    panelItemComponentRef: RefObject<PanelItemWrapper>,
    removePanelComponentFn: () => void,
    iconComponentRef?: RefObject<IconWrapper>,
    removeIconComponentFn?: () => void
  ) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.removePanelComponentFn = removePanelComponentFn;
    this.removeIconComponentFn =
      removeIconComponentFn ||
      ((): void => {
        return;
      });
    this.panelItemComponentRef = panelItemComponentRef;
    this.iconComponentRef = iconComponentRef;
  }

  public static peekNextId(): number {
    return ItemWrapper.nextId + 1;
  }
}
