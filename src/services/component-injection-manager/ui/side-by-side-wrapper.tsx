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
  onExitComplete?: () => void;
}

export const SideBySideWrapper: FunctionalComponent<SideBySideWrapperProps> = ({
  player,
  component: InjectedComponent,
  componentProps,
  onExitComplete
}) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Listen for custom exit event
    const handleExit = () => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.add('exiting');

        // Wait for animation to complete
        const handleAnimationEnd = () => {
          if (onExitComplete) {
            onExitComplete();
          }
        };

        wrapperRef.current.addEventListener('animationend', handleAnimationEnd, { once: true });
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      // Listen on the parent element (the one addComponent creates)
      const parent = wrapper.parentElement;
      if (parent) {
        parent.addEventListener('trigger-exit', handleExit);
        return () => {
          parent.removeEventListener('trigger-exit', handleExit);
        };
      }
    }

    return () => {};
  }, [onExitComplete]);

  const posterUrl = useMemo(() => {
    return player.sources.poster;
  }, [player]);

  return (
    <div ref={wrapperRef} className={styles.sideBySideWrapper}>
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
