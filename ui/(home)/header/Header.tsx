import { useSlidingMarginsAnimatons } from '@/hooks/use-sliding-margins-animations';
import '@/styles/glitch.css';
import { HeroText, TileGrid } from '@/ui';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Header = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { initialMarginStyles } = useSlidingMarginsAnimatons(scrollRef);

  return (
    <motion.section className="h-full bg-beige">
      <motion.div
        ref={scrollRef}
        style={initialMarginStyles}
        className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-900 p-16"
      >
        <TileGrid scrollRef={scrollRef} />
        <HeroText scrollRef={scrollRef} />
      </motion.div>
    </motion.section>
  );
};

export default Header;
