import { Component, h } from 'preact';
import * as styles from './banner-container.scss';

import { Icon, IconSize } from '@playkit-js/common/dist/icon';

export interface BannerContainerProps {
  onClose: () => void;
  theme: BannerTheme;
}

interface BannerTheme {
  backgroundColor: string;
  blur: string;
}

export class BannerContainer extends Component<BannerContainerProps> {
  render(props: BannerContainerProps) {
    const { backgroundColor, blur } = this.props.theme;

    return (
      <div className={styles.bannerContainerRoot} aria-live="polite">
        <div
          style={`
                background-color:${backgroundColor}; 
                backdrop-filter: blur(${blur});
             `}
          className={styles.bannerContainer}
        >
          <button className={styles.closeButton} onClick={props.onClose}>
            <div className={styles.small}>
              <Icon size={IconSize.small} name="close" />
            </div>
            <div className={styles.large}>
              <Icon size={IconSize.large} name="close" />
            </div>
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}
