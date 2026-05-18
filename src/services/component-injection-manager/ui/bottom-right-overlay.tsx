// src/services/component-injection-manager/ui/bottom-right-overlay.tsx
import { h, FunctionalComponent, ComponentChild } from 'preact';
import * as styles from './bottom-right-overlay.scss';

export interface BottomRightOverlayProps {
  children?: ComponentChild;
}

export const BottomRightOverlay: FunctionalComponent<BottomRightOverlayProps> = ({ children }) => {
  return (
    <div className={styles.bottomRightOverlay} aria-live="polite">
      {children}
    </div>
  );
};
