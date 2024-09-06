'use client';

import {
  AboutMe,
  ClipTextExperience,
  GradientCursorArea,
  Header,
  StarsBackgroundArea,
  Timeline,
} from '@/ui';
import { ReactLenis } from 'lenis/react';

const Home = () => {
  return (
    <ReactLenis root>
      <GradientCursorArea>
        <Header />
        <StarsBackgroundArea>
          <AboutMe />
          <ClipTextExperience />
          {/* <Timeline /> */}
          <div className="h-screen w-screen bg-blue-900"></div>
          <div className="h-screen w-screen bg-slate-900"></div>
        </StarsBackgroundArea>
      </GradientCursorArea>

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
    </ReactLenis>
  );
};

export default Home;
