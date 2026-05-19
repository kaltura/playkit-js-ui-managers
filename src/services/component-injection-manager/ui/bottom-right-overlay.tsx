// src/services/component-injection-manager/ui/bottom-right-overlay.tsx
import { h, FunctionalComponent, ComponentChild } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import * as styles from './bottom-right-overlay.scss';

export interface BottomRightOverlayProps {
  children?: ComponentChild;
  onExitComplete?: () => void;
}

export const BottomRightOverlay: FunctionalComponent<BottomRightOverlayProps> = ({ children, onExitComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for custom exit event
    const handleExit = () => {
      if (containerRef.current) {
        containerRef.current.classList.add('exiting');

        // Wait for animation to complete
        const handleAnimationEnd = () => {
          if (onExitComplete) {
            onExitComplete();
          }
        };

        containerRef.current.addEventListener('animationend', handleAnimationEnd, { once: true });
      }
    };

    const container = containerRef.current;
    if (container) {
      // Listen on the parent element (the one addComponent creates)
      const parent = container.parentElement;
      if (parent) {
        parent.addEventListener('trigger-exit', handleExit);
        return () => {
          parent.removeEventListener('trigger-exit', handleExit);
        };
      }
    }

    return () => {};
  }, [onExitComplete]);

  return (
    <div ref={containerRef} className={styles.bottomRightOverlay} aria-live="polite">
      {children}
    </div>
  );
};
