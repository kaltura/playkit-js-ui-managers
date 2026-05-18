// src/services/component-injection-manager/ui/side-by-side-wrapper.tsx
import { h, FunctionalComponent } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import { KalturaPlayer } from '@playkit-js/kaltura-player-js';
import { ComponentFactory } from '../models';
import * as styles from './side-by-side-wrapper.scss';

export interface SideBySideWrapperProps {
  player: KalturaPlayer;
  component: ComponentFactory;
  componentProps?: Record<string, unknown>;
}

export const SideBySideWrapper: FunctionalComponent<SideBySideWrapperProps> = ({
  player,
  component: InjectedComponent,
  componentProps
}) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = player.getVideoElement();
    const originalParent = videoElement?.parentElement;

    if (videoContainerRef.current && videoElement) {
      // Remove from tab order as video controls are managed by the player
      videoElement.tabIndex = -1;
      videoContainerRef.current.prepend(videoElement);
    }

    // Cleanup: restore video element to original location
    return () => {
      if (videoElement && originalParent) {
        originalParent.appendChild(videoElement);
      }
    };
  }, [player]);

  return (
    <div className={styles.sideBySideWrapper}>
      <div className={styles.videoContainer} ref={videoContainerRef} aria-label="Video player" />
      <div className={styles.componentContainer} aria-label="Injected component">
        <InjectedComponent {...componentProps} />
      </div>
    </div>
  );
};
