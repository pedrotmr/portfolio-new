'use client';

import useTrackCursor from '@/hooks/use-track-cursor';
import { AboutMe, ClipTextExperience, Header, Projects, StarsBackgroundArea, Timeline } from '@/ui';
import { HEADER_ANIMATION_COLOR } from '@/utils';
import { motion, useMotionTemplate } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import GifToLife from './(home)/components/gif-to-life';

const Home = () => {
  const { mouseX, mouseY, handleMouseMove } = useTrackCursor();

  const cursorShadowStyle = {
    background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, ${HEADER_ANIMATION_COLOR} 0%, transparent 80%)`,
  };

  return (
    <ReactLenis root>
      <main onMouseMove={handleMouseMove}>
        <motion.div
          className="pointer-events-none fixed inset-0 z-10 transition duration-300"
          style={cursorShadowStyle}
        />
        <Header />
        <StarsBackgroundArea>
          <AboutMe />
          <ClipTextExperience />
          <Timeline />
          <Projects />
        </StarsBackgroundArea>
      </main>

            {/* <GifToLife url="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif" /> */}
      {/* <GifToLife url="https://media.giphy.com/media/U8mf1vmVzEMmOqU4D8/giphy.gif" />z */}

      {/* <div className="relative z-10 w-full overflow-x-clip"></div> */}

      {/* <div className="noise h-[100dvh] bg-slate-900"></div> */}
      {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="relative flex h-[200dvh] items-center justify-center overflow-hidden "
        >
          <h1 className="font-switzer z-10 text-5xl font-black text-[#292929]">Graingran</h1>
          <div className="animate-blob absolute left-72 h-72 w-72 rounded-full bg-red-400 opacity-60 blur-2xl"></div>
          <div className="animation-delay-1 animate-blob absolute right-72 h-72 w-72 rounded-full bg-blue-400 opacity-60 blur-2xl"></div>
          <div className="animation-delay-2 animate-blob absolute bottom-40 h-72 w-72 rounded-full bg-orange-300 opacity-60 blur-2xl"></div>
          <svg className="pointer-events-none absolute cursor-none">
            <filter id="grainy">
              <feTurbulence type="turbulence" baseFrequency="0.25" />
            </filter>
          </svg>
        </motion.div> */}
    </ReactLenis>
  );
};

export default Home;
