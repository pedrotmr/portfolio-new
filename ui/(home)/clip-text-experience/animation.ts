import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

export const useAnimations = (scrollRef: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end 0.7'],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ['0%', '-50%']);
  const blur = useTransform(scrollYProgress, [0, 0.1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const textStyle = {
    y,
    filter: useMotionTemplate`blur(${blur}px)`,
    opacity,
  };

  const clip1 = useTransform(scrollYProgress, [0.1, 0.4], [100, -50]);
  const clip2 = useTransform(scrollYProgress, [0.4, 0.6], [100, -50]);
  const clip3 = useTransform(scrollYProgress, [0.6, 0.8], [100, -50]);
  const clip4 = useTransform(scrollYProgress, [0.8, 1], [100, -50]);

  return { textStyle, clip1, clip2, clip3, clip4 };
};
