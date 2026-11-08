import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useAnimations } from '../../animations';
import { portrait, statements } from '../../about-me-content';
import type { PointerPosition } from './ImageRipplePortrait/types';

interface AboutMeStageProps {
  finePointer: boolean;
}

const ImageRippleCanvas = dynamic(() => import('./ImageRipplePortrait/ImageRipplePortrait'), { ssr: false });

export default function AboutMeStage({ finePointer }: AboutMeStageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const pointerPositionRef = useRef<PointerPosition>(null);
  const [rippleReady, setRippleReady] = useState(false);
  const inView = useInView(scrollRef);
  const { imageStyles, firstTextStyles, secondTextStyles, thirdTextStyles } = useAnimations(scrollRef);
  const br = <br />;

  useEffect(() => {
    if (!finePointer) {
      return;
    }

    const rememberPointer = (event: MouseEvent) => {
      if (!('pointerType' in event) || event.pointerType !== 'touch') {
        pointerPositionRef.current = { x: event.clientX, y: event.clientY };
      }
    };

    const clearPointer = () => {
      pointerPositionRef.current = null;
    };

    const clearPointerOnExit = (event: PointerEvent) => {
      if (event.relatedTarget === null) {
        clearPointer();
      }
    };

    void import('./ImageRipplePortrait/ImageRipplePortrait');
    window.addEventListener('pointermove', rememberPointer, { passive: true });
    window.addEventListener('wheel', rememberPointer, { passive: true });
    window.addEventListener('pointerout', clearPointerOnExit, { passive: true });
    window.addEventListener('blur', clearPointer);

    return () => {
      window.removeEventListener('pointermove', rememberPointer);
      window.removeEventListener('wheel', rememberPointer);
      window.removeEventListener('pointerout', clearPointerOnExit);
      window.removeEventListener('blur', clearPointer);
    };
  }, [finePointer]);

  return (
    <section
      id="about"
      aria-label="About me"
      ref={scrollRef}
      className="relative h-[300dvh] w-full overflow-x-clip bg-slate-900"
    >
      <div
        style={{ visibility: inView ? 'visible' : 'hidden' }}
        className="sticky top-1/2 z-20 m-auto flex max-w-6xl -translate-y-1/2 items-center justify-center gap-20
          text-[clamp(10px,3vw,2.25rem)] font-bold leading-tight text-beige"
      >
        <motion.p style={firstTextStyles} className="w-[41%] will-change-transform">
          {statements[0](br)}
        </motion.p>

        <motion.p style={secondTextStyles} className="w-[40%] will-change-transform">
          {statements[1](br)}
        </motion.p>

        <motion.p style={thirdTextStyles} className="w-[42%] will-change-transform">
          {statements[2](br)}
        </motion.p>

        <motion.div
          ref={portraitRef}
          className="relative aspect-[3/4] w-[35%] cursor-none select-none rounded-md will-change-transform"
          style={imageStyles}
        >
          <img
            {...portrait}
            draggable={false}
            className="absolute inset-0 h-full w-full select-none rounded-md object-cover object-top"
            style={{ opacity: finePointer && rippleReady ? 0 : 1 }}
          />
          {finePointer && (
            <ImageRippleCanvas
              active={inView}
              src={portrait.src}
              frameRef={portraitRef}
              pointerPositionRef={pointerPositionRef}
              onReady={setRippleReady}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
