// src/services/component-injection-manager/ui/side-by-side-wrapper.tsx
import { h, FunctionalComponent } from 'preact';
import { useRef, useEffect, useMemo } from 'preact/hooks';
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

  const posterUrl = useMemo(() => {
    return player.sources.poster;
  }, [player]);

  return (
    <div className={styles.sideBySideWrapper}>
      {/* Layer 1: Poster image background */}
      {posterUrl && <div className={styles.posterLayer} style={{ backgroundImage: `url(${posterUrl})` }} aria-hidden="true" />}

      {/* Layer 2: Backdrop overlay */}
      <div className={styles.backdropLayer} aria-hidden="true" />

      {/* Layer 3: Content layer with video and component */}
      <div className={styles.contentLayer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.videoContainer} ref={videoContainerRef} aria-label="Video player" />
          <div className={styles.componentContainer} aria-label="Injected component">
            <InjectedComponent {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};
