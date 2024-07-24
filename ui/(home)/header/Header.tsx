import useMediaQuery from '@/hooks/use-media-query';
import '@/styles/glitch.css';
import { HeroText, TileGrid } from '@/ui';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Header = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useMediaQuery();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['end end', 'end center'],
  });

  const margin = useTransform(scrollYProgress, [0, 1], [isMobile ? 18 : 40, 0]);
  const borderRadius = isMobile ? 18 : 32;

  const wrapperStyle = {
    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    marginTop: margin,
    marginRight: margin,
    marginLeft: margin,
  };

  return (
    <motion.section className="h-full bg-beige">
      <motion.div
        ref={scrollRef}
        style={wrapperStyle}
        className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-beige p-16"
      >
        <TileGrid />
        <HeroText scrollYProgress={scrollYProgress} />
      </motion.div>
    </motion.section>
  );
};

export default Header;
