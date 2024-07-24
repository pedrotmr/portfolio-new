'use client';

import { clashFont } from '@/utils/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import ReactLenis from 'lenis/react';
import { useEffect, useState } from 'react';
import { fadeInTextAnimation, moveUpPageAnimtion } from './animations';

const LoadingScreenRoot = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
            className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-dark"
          >
            <motion.p
              initial={fadeInTextAnimation.initial}
              animate={fadeInTextAnimation.animate}
              transition={fadeInTextAnimation.transition}
              className={`${clashFont.className} align-center absolute z-10 block text-4xl text-beige`}
            >
              pedro.ramos
            </motion.p>

            {dimension.width > 0 && (
              <svg className="absolute top-0 w-full" style={{ height: 'calc(100dvh + 300px)' }}>
                <path
                  d={`M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`}
                  className="fill-dark"
                />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ReactLenis>
  );
};

export default LoadingScreenRoot;
