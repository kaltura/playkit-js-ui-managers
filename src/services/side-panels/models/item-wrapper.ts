import { RefObject } from 'preact';
import { Toggle } from '../ui/toggel';
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
  public readonly componentRef: RefObject<Toggle>;
  constructor(item: SidePanelItem, componentRef: RefObject<Toggle>, removePanelComponentFunc: () => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.removePanelComponentFn = removePanelComponentFunc;
    this.removeIconComponentFunc = (): void => {
      return;
    };
    this.componentRef = componentRef;
  }

  set removeIconComponentFn(removeIconComponentFunc: () => void) {
    this.removeIconComponentFunc = removeIconComponentFunc;
  }

  get removeIconComponentFn(): () => void {
    return this.removeIconComponentFunc;
  }
}
