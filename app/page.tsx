'use client';

import useTrackCursor from '@/hooks/use-track-cursor';
import {
  AboutMe,
  ClipTextExperience,
  CursorShadow,
  Header,
  ShootingStars,
  StarsBackground,
} from '@/ui';
import { motion, useInView } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';

const Home = () => {
  const { mouseX, mouseY, handleMouseMove } = useTrackCursor();

  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref);

  return (
    <ReactLenis root>
      <main onMouseMove={handleMouseMove} className="bg-slate-900">
        <CursorShadow mouseX={mouseX} mouseY={mouseY} />
        <Header />

        <div ref={ref}>
          <AboutMe />
          <ClipTextExperience />
          <div className="h-screen w-screen bg-slate-900"></div>
          <div className="h-screen w-screen bg-slate-900"></div>
          {inView && <RenderStars />}
        </div>

        {/* <GifToLife url="https://media.giphy.com/media/U8mf1vmVzEMmOqU4D8/giphy.gif" /> */}
        {/* <GifToLife url="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif" /> */}
        {/* <div className="relative z-10 w-full overflow-x-clip"></div> */}

        {/* <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="relative flex h-[200dvh] items-center justify-center overflow-hidden bg-beige"
          >
            <h1 className="font-switzer z-10 text-5xl font-black text-[#292929]">Graingran</h1>
            <div className="animate-blob absolute left-72 h-72 w-72 rounded-full bg-red-400 opacity-60 blur-2xl"></div>
            <div className="animation-delay-1 animate-blob absolute right-72 h-72 w-72 rounded-full bg-blue-400 opacity-60 blur-2xl"></div>
            <div className="animation-delay-2 animate-blob absolute bottom-40 h-72 w-72 rounded-full bg-orange-300 opacity-60 blur-2xl"></div>
            <svg className="pointer-events-none absolute cursor-none">
              <filter id="grainy">
                <feTurbulence type="turbulence" baseFrequency="0.65" />
              </filter>
            </svg>
          </motion.div>
        </div> */}
      </main>
    </ReactLenis>
  );
};

const RenderStars = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
    <ShootingStars className="fixed top-0 z-0 h-screen" />
    <StarsBackground className="fixed top-0 z-0 h-screen" />
  </motion.div>
);

export default Home;
