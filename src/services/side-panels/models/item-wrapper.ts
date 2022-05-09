import {RefObject} from 'preact';
import {Toggle} from '../ui/side-panel.component';
import {SidePanelItem} from './side-panel-item-dto';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  readonly id: number;
  readonly removePanelComponentFunc: () => void;
  removeIconComponentFunc: () => void;
  readonly item: SidePanelItem;
  readonly componentRef: RefObject<Toggle>;
  constructor(item: SidePanelItem, componentRef: RefObject<Toggle>, removePanelComponentFunc: () => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.removePanelComponentFunc = removePanelComponentFunc;
    this.removeIconComponentFunc = (): void => {
      return;
    };
    this.componentRef = componentRef;
  }
}
