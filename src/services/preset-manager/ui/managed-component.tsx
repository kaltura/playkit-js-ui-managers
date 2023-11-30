import { h, Component, ComponentChildren } from 'preact';
import * as styles from './managed-component.scss';
import { ui } from '@playkit-js/kaltura-player-js';
const { connect } = ui.redux;

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

const mapStateToProps = (state: Record<string, any>) => ({
  playerSize: state.shell.playerSize
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@connect(mapStateToProps, null, null, { forwardRef: true })
export class ManagedComponent extends Component<ManagedComponentProps, ManagedComponentState> {
  public static defaultProps = {
    fillContainer: false
  };

  update() {
    this.setState((prev: ManagedComponentState) => {
      return {
        toggler: !prev.toggler
      };
    });
  }

  shouldComponentUpdate(prevProps: Readonly<ManagedComponentProps>): boolean {
    const { updateOnPlayerSizeChanged, playerSize } = this.props;
    return (updateOnPlayerSizeChanged && prevProps.playerSize !== playerSize) || prevProps.playerSize === playerSize;
  }

  componentDidMount(): void {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      toggler: false
    });
  }

  render() {
    const { fillContainer, isShown, playerSize } = this.props;
    if (!isShown()) {
      return null;
    }

    return (
      <div data-contrib-item={this.props.label} className={`${fillContainer ? styles.fillContainer : ''}`}>
        {this.props.renderChildren(playerSize!)}
      </div>
    );
  }
}
