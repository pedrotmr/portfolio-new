'use client';

import { REDUCED_MOTION_QUERY, useMediaMatch } from '@/hooks/use-motion-capabilities';
import { clashFont } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeInTextAnimation, getSvgPathAnimation, moveUpPageAnimtion } from './animations';

export default function InitialLoadingScreen() {
  const reduced = useMediaMatch(REDUCED_MOTION_QUERY);
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const svgPathAnimation = getSvgPathAnimation(dimension);

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      setIsLoading(false);
      return;
    }

    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const timeoutId = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timeoutId);
  }, []);

  // With reduced motion the intro never plays and the page is usable at once.
  if (reduced) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          aria-hidden="true"
          initial={moveUpPageAnimtion.initial}
          exit={moveUpPageAnimtion.exit}
          transition={moveUpPageAnimtion.transition}
          className="intro-overlay pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
        >
          <motion.p
            initial={fadeInTextAnimation.initial}
            animate={fadeInTextAnimation.animate}
            transition={fadeInTextAnimation.transition}
            className={` ${clashFont.className} align-center absolute z-10 block text-4xl text-beige`}
          >
            by pedro
          </motion.p>

          {dimension.width > 0 && (
            <svg className="absolute top-0 w-full" style={{ height: 'calc(100dvh + 700px)' }}>
              <motion.path
                initial={svgPathAnimation.initial}
                animate={svgPathAnimation.animate}
                transition={svgPathAnimation.transition}
                className="fill-slate-900"
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
