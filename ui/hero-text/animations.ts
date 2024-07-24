import {
  AnimationProps,
  MotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';

export const useAnimations = (scrollYProgress: MotionValue<number>) => {
  const y = useSpring(useTransform(scrollYProgress, [0, 0.3], ['0%', '-100px']), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(scrollYProgress, [0.3, 1], [1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => (pos >= 1 ? 'relative' : 'fixed'));

  const blur = useTransform(scrollYProgress, [0.3, 1], [0, 20]);
  const filter = useMotionTemplate`blur(${blur}px)`;


  const wrapperStyle = {
    y,
    scale,
    filter,
    opacity,
    position,
  };

  return wrapperStyle;
};

export const profilePictureAnimation: AnimationProps = {
  initial: {
    y: '-300px',
    opacity: 0,
    rotate: 180,
  },
  animate: {
    y: 0,
    opacity: 1,
    rotate: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 30,
    duration: 0.8,
    delay: 2.5,
  },
};

export const nameAnimation: AnimationProps = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
  },
  transition: {
    duration: 0.8,
    delay: 2.5,
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
};

export const titleAnimation: AnimationProps = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
  },
  transition: {
    duration: 0.5,
    delay: 2.6,
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
};

export const descriptionAnimation: AnimationProps = {
  initial: {
    opacity: 0,
    filter: 'blur(150px)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
  },
  transition: {
    duration: 0.6,
    delay: 2.4,
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
};
