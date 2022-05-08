import {RefObject} from 'preact';
import {Toggle} from './ui/side-panel.component';
import {SidePanelItemDto} from './side-panel-item-dto';

/**
 * Panel item metadata
 * @internal
 */
export class ItemWrapper {
  private static nextId = 0;
  readonly id: number;
  readonly removeComponentFunc: () => void;
  readonly item: SidePanelItemDto;
  readonly componentRef: RefObject<Toggle>;
  constructor(item: SidePanelItemDto, componentRef: RefObject<Toggle>, removeComponentFunc: () => void) {
    this.id = ++ItemWrapper.nextId;
    this.item = item;
    this.removeComponentFunc = removeComponentFunc;
    this.componentRef = componentRef;
  }
}
