import { useSlidingMarginsAnimatons } from '@/hooks/use-sliding-margins-animations';
import '@/styles/glitch.css';
import { HeroText, TileGrid } from '@/ui';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Header = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { initialMarginStyles } = useSlidingMarginsAnimatons(scrollRef);

  return (
    <motion.header
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-900"
      ref={scrollRef}
      style={initialMarginStyles}
    >
      {scrollRef.current && (
        <>
          <HeroText scrollRef={scrollRef} />
          <TileGrid scrollRef={scrollRef} />
        </>
      )}
    </motion.header>
  );
};

export default Header;
