import { Component } from 'preact';
import { KalturaPlayer } from '@playkit-js/kaltura-player-js';

export interface UIPlayerAdapterProps {
  player: KalturaPlayer;
  onMount: (player: KalturaPlayer) => void;
  onUnmount: (player: KalturaPlayer) => void;
}

export class UIPlayerAdapter extends Component<UIPlayerAdapterProps> {
  public static defaultProps = {
    player: null
  };

  public componentDidMount(): void {
    this.props.onMount(this.props.player);
  }

  public componentWillUnmount(): void {
    this.props.onUnmount(this.props.player);
  }

  public render() {
    return null;
  }
}
