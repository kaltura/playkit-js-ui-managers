// src/services/component-injection-manager/ui/corner-overlay.tsx
import { h, FunctionalComponent, ComponentChild } from 'preact';
import { InjectionPosition } from '../models';
import * as styles from './corner-overlay.scss';

export interface CornerOverlayProps {
  children?: ComponentChild;
  position: InjectionPosition;
}

export const CornerOverlay: FunctionalComponent<CornerOverlayProps> = ({ children, position }) => {
  const positionClass = {
    [InjectionPosition.TopLeft]: styles.topLeft,
    [InjectionPosition.TopRight]: styles.topRight,
    [InjectionPosition.BottomLeft]: styles.bottomLeft,
    [InjectionPosition.BottomRight]: styles.bottomRight,
    [InjectionPosition.SideBySide]: '' // Not used for corner overlay
  }[position];

  return (
    <div className={`${styles.cornerOverlay} ${positionClass}`} aria-live="polite">
      {children}
    </div>
  );
};
