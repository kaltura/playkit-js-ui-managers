import { ComponentChild } from 'preact';
import { PlayerSize, VideoSize } from '@playkit-js/common/dist/ui-common/common-types';

export type FloatingUIMode = 'MediaLoaded' | 'OnDemand' | 'Immediate' | 'FirstPlay';

export type FloatingPosition = 'VideoArea' | 'PresetArea' | 'InteractiveArea';

export interface FloatingItemData {
  label: string;
  mode: FloatingUIMode;
  renderContent: (floatingItemProps: FloatingItemProps) => ComponentChild;
  className?: string;
  position: FloatingPosition;
}

export interface FloatingItemProps {
  currentTime: number;
  canvas: {
    playerSize: PlayerSize;
    videoSize: VideoSize;
  };
}
