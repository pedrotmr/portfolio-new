import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { useSlidingMarginsAnimatons } from '@/hooks/use-sliding-margins-animations';
import '@/styles/glitch.css';
import { HeroText, ScrollOrShortcut, TileGrid } from '@/ui';
import { useAnimations } from '@/ui/hero-text/animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Header() {
  const scrollRef = useRef<HTMLElement>(null);
  const { reduced, stage } = useMotionCapabilities();

  // Scroll tracking lives here, not in the children: React attaches this element's ref
  // only after the children's layout effects have run.
  const { initialMarginStyles } = useSlidingMarginsAnimatons(scrollRef);
  const heroStyle = useAnimations(scrollRef, reduced);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['end end', 'end center'] });
  const tileOpacity = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 0]);
  const reducedHeaderStyle = {
    marginTop: 40,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: '32px 32px 0 0',
  };

  const compactHeroStyle = { y: 0, scale: 1, filter: 'blur(0px)', opacity: 1, position: 'static' as const };

  const getHeaderStyle = () => {
    if (!stage) {
      return { marginTop: 0, marginRight: 0, marginLeft: 0, borderRadius: 0 };
    }

    if (reduced) {
      return reducedHeaderStyle;
    }

    return initialMarginStyles;
  };

  return (
    <motion.header
      className={`h-stage relative flex flex-col items-center justify-center overflow-hidden bg-slate-900
        ${stage ? '' : 'hero-compact'}`}
      ref={scrollRef}
      style={getHeaderStyle()}
    >
      {/* The motion preference is only known after hydration. Remounting drops the intro and scroll styles cleanly. */}
      <HeroText key={reduced ? 'still' : 'moving'} style={stage ? heroStyle : compactHeroStyle} />
      <ScrollOrShortcut />
      <TileGrid opacity={tileOpacity} />
    </motion.header>
  );
}
