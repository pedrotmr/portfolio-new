import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

const timing = {
  start: 0,
  step1: 0.2,
  step2: 0.4,
  step3: 0.5,
  step4: 0.6,
  step5: 0.8,
  end: 1,
};

export const useAnimations = (scrollRef: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  });

  const position = useTransform(scrollYProgress, (pos) => (pos >= 1 ? 'relative' : 'sticky'));

  const y = useTransform(
    scrollYProgress,
    [timing.start, timing.step1, timing.step5, timing.end],
    ['0%', '-50%', '-50%', '-50%'],
  );

  const scale = useTransform(
    scrollYProgress,
    [timing.start, timing.step1, timing.step5, timing.end],
    [0.6, 1, 1, 0.6],
  );

  const blur = useTransform(
    scrollYProgress,
    [timing.start, timing.step1, timing.step5, timing.end],
    [40, 0, 0, 40],
  );

  const opacity = useTransform(
    scrollYProgress,
    [timing.start, timing.step1, timing.step5, timing.end],
    [0, 1, 1, 0],
  );

  const textStyle = {
    y,
    filter: useMotionTemplate`blur(${blur}px)`,
    opacity,
    scale,
    position,
  };

  const clip1 = useTransform(scrollYProgress, [timing.step1, timing.step2], [100, -50]);
  const clip2 = useTransform(scrollYProgress, [timing.step2, timing.step3], [100, -50]);
  const clip3 = useTransform(scrollYProgress, [timing.step3, timing.step4], [100, -50]);
  const clip4 = useTransform(scrollYProgress, [timing.step4, timing.step5], [100, -50]);

  return { textStyle, clip1, clip2, clip3, clip4 };
};
