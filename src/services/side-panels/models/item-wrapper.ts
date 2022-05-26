import { RefObject, createRef } from 'preact';
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
  public removeIconComponentFunc: () => void;
  public readonly item: SidePanelItem;
  public readonly panelItemComponentRef: RefObject<PanelItemWrapper>;
  public iconComponentRefOb: RefObject<IconWrapper> | undefined;
  constructor(item: SidePanelItem, panelItemComponentRef: RefObject<PanelItemWrapper>, removePanelComponentFunc: () => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.removePanelComponentFn = removePanelComponentFunc;
    this.removeIconComponentFunc = (): void => {
      return;
    };
    this.panelItemComponentRef = panelItemComponentRef;
    this.iconComponentRefOb = createRef();
  }

  set removeIconComponentFn(removeIconComponentFunc: () => void) {
    this.removeIconComponentFunc = removeIconComponentFunc;
  }

  get removeIconComponentFn(): () => void {
    return this.removeIconComponentFunc;
  }

  set iconComponentRef(iconComponentRef: RefObject<IconWrapper> | undefined) {
    this.iconComponentRefOb = iconComponentRef;
  }

  get iconComponentRef(): RefObject<IconWrapper> | undefined {
    return this.iconComponentRefOb;
  }
}
