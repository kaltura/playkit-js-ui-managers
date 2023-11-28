import { Component, h } from 'preact';
import { BannerContent } from '../../models/banner-content';
import * as styles from './banner.scss';
import { SomeoneAsksLarge } from './someone-asks-large';
import { SomeoneAsksSmall } from './someone-asks-small';

export interface BannerProps {
  content: BannerContent;
}

export class Banner extends Component<BannerProps> {
  render({ content }: BannerProps) {
    const { text, title = 'Audience asks:', icon = this._defaultIcon() } = content;

    return (
      <div className={styles.defaultBannerRoot + ' ' + styles.bannerWrapper}>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>{icon}</div>
        </div>
        <div className={styles.bannerBody}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    );
  }

  private _defaultIcon() {
    return (
      <div className={styles.iconImage}>
        <SomeoneAsksLarge className={styles.large} />
        <SomeoneAsksSmall className={styles.small} />
      </div>
    );
  }
}
