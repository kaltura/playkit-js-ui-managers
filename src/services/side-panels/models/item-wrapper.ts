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
  private _removeIconComponentFu: () => void;
  public readonly item: SidePanelItem;
  public readonly panelItemComponentRef: RefObject<PanelItemWrapper>;
  private _iconComponentRef: RefObject<IconWrapper> | undefined;
  constructor(item: SidePanelItem, panelItemComponentRef: RefObject<PanelItemWrapper>, removePanelComponentFunc: () => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.removePanelComponentFn = removePanelComponentFunc;
    this._removeIconComponentFu = (): void => {
      return;
    };
    this.panelItemComponentRef = panelItemComponentRef;
    this._iconComponentRef = createRef();
  }

  public set removeIconComponentFn(removeIconComponentFunc: () => void) {
    this._removeIconComponentFu = removeIconComponentFunc;
  }

  public get removeIconComponentFn(): () => void {
    return this._removeIconComponentFu;
  }

  public set iconComponentRef(iconComponentRef: RefObject<IconWrapper> | undefined) {
    this._iconComponentRef = iconComponentRef;
  }

  public get iconComponentRef(): RefObject<IconWrapper> | undefined {
    return this._iconComponentRef;
  }
}
