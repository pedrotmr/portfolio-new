import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollPathBar = () => {
  const { scrollYProgress } = useScroll();

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const width = useTransform(springScrollProgress, [0, 1], ['0vw', '100vw']);

  return <motion.div className="fixed top-0 z-50 h-1 bg-sky-900" style={{ width }} />;
};

export default ScrollPathBar;
