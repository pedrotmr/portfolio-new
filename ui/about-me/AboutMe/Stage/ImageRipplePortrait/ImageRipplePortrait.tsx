'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RippleFallback from './RippleFallback';
import RipplePlane from './RipplePlane';
import type { ImageRipplePortraitProps } from './types';

export default function ImageRipplePortrait(props: ImageRipplePortraitProps) {
  return (
    <RippleFallback onReady={props.onReady}>
      <Canvas
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-12%',
          top: '-12%',
          width: '124%',
          height: '124%',
          pointerEvents: 'none',
        }}
        dpr={[1, 1.5]}
        fallback={null}
        frameloop={props.active ? 'always' : 'demand'}
        resize={{ scroll: false, offsetSize: true, debounce: 0 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
      >
        <Suspense fallback={null}>
          <RipplePlane {...props} />
        </Suspense>
      </Canvas>
    </RippleFallback>
  );
}
