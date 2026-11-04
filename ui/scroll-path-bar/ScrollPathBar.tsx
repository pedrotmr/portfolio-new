import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollPathBar = () => {
  const { scrollYProgress } = useScroll();
  const { reduced } = useMotionCapabilities();

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 origin-left bg-sky-900"
      style={{ scaleX: reduced ? scrollYProgress : springScrollProgress }}
    />
  );
};

export default ScrollPathBar;
