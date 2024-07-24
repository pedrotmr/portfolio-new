import useMediaQuery from '@/hooks/use-media-query';
import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

export const useAnimations = (scrollRef: RefObject<HTMLElement>) => {
  const { isMobile } = useMediaQuery();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const margin = useTransform(scrollYProgress, [0.66, 1], [0, isMobile ? 18 : 40]);
  const borderRadius = isMobile ? 18 : 32;

  const wrapperStyle = {
    borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
    marginTop: margin,
    marginRight: margin,
    marginLeft: margin,
  };

  const y = useTransform(scrollYProgress, [0, 0.15], ['0%', '-50%']);
  const blur = useTransform(scrollYProgress, [0, 0.15], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const textStyle = {
    y,
    opacity,
    filter: useMotionTemplate`blur(${blur}px)`,
  };

  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  });

  const clip1 = useTransform(textScrollYProgress, [0, 0.25], [100, -50]);
  const clip2 = useTransform(textScrollYProgress, [0.25, 0.5], [100, -50]);
  const clip3 = useTransform(textScrollYProgress, [0.5, 0.75], [100, -50]);
  const clip4 = useTransform(textScrollYProgress, [0.75, 1], [100, -50]);

  return { wrapperStyle, textStyle, clip1, clip2, clip3, clip4 };
};
