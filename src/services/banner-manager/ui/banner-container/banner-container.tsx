import { Component, h } from 'preact';
import * as styles from './banner-container.scss';
import { CloseSmall } from './close-small';
import { CloseLarge } from './close-large';

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
            <CloseSmall className={styles.small} />
            <CloseLarge className={styles.large} />
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}
