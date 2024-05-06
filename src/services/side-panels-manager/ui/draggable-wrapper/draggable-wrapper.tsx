import { h, Component } from 'preact';

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

export class DraggableWrapper extends Component<{detachRef: any}> {

  render() {
    return this.props.children
  }
}
