'use client';

import { clashFont } from '@/utils';
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
            className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-900"
          >
            <motion.p
              initial={fadeInTextAnimation.initial}
              animate={fadeInTextAnimation.animate}
              transition={fadeInTextAnimation.transition}
              className={`${clashFont.className} align-center absolute z-10 block text-4xl text-beige`}
            >
              pedro.ramos
            </motion.p>

            {/* {dimension.width > 0 && (
              <svg className="absolute top-0 w-full" style={{ height: 'calc(100dvh + 300px)' }}>
                <path
                  d={`M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`}
                  className="fill-dark"
                />
              </svg>

              // <svg className="absolute top-0 w-full" style={{ height: 'calc(100dvh + 300px)' }}>
              //   <defs>
              //     <linearGradient id="loadingGradient" gradientTransform="rotate(99.9)">
              //       <stop offset="0%" stopColor="rgba(0,1,10,1)" />
              //       <stop offset="20%" stopColor="rgba(2,6,30,1)" />
              //       <stop offset="40%" stopColor="rgba(15,8,40,1)" />
              //       <stop offset="60%" stopColor="rgba(40,10,60,1)" />
              //       <stop offset="80%" stopColor="rgba(25,5,45,1)" />
              //       <stop offset="100%" stopColor="rgba(0,1,10,1)" />
              //     </linearGradient>
              //   </defs>
              //   <path
              //     d={`M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`}
              //     fill="url(#loadingGradient)"
              //   />
              // </svg>
            )} */}
            {/* <StarsBackground starDensity={0.00001} /> */}

            {/* <ShootingStars />
            <StarsBackground /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </ReactLenis>
  );
};

export default LoadingScreenRoot;
