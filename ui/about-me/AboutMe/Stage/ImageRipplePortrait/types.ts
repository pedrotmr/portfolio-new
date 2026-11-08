import { MutableRefObject } from 'react';

export type PointerPosition = { x: number; y: number } | null;

export interface ImageRipplePortraitProps {
  src: string;
  active: boolean;
  frameRef: MutableRefObject<HTMLDivElement | null>;
  pointerPositionRef: MutableRefObject<PointerPosition>;
  onReady: (ready: boolean) => void;
}
