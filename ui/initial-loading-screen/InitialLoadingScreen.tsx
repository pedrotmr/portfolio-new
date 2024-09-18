'use client';

import { clashFont } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import ReactLenis from 'lenis/react';
import { useEffect, useState } from 'react';
import { fadeInTextAnimation, getSvgPathAnimation, moveUpPageAnimtion } from './animations';

const InitialLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const svgPathAnimation = getSvgPathAnimation(dimension);

  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    setDimension({ width: window.innerWidth, height: window.innerHeight });
    
    const timeoutId = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ReactLenis>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={moveUpPageAnimtion.initial}
            exit={moveUpPageAnimtion.exit}
            transition={moveUpPageAnimtion.transition}
            className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-900"
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
    </ReactLenis>
  );
};

export default InitialLoadingScreen;
