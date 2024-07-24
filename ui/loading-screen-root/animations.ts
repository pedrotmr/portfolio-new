import { AnimationProps } from 'framer-motion';

export const moveUpPageAnimtion: AnimationProps = {
  initial: {
    y: 0,
  },
  exit: {
    y: '-120vh',
  },
  transition: {
    duration: 1,
    ease: [0.76, 0, 0.24, 1],
    delay: 1.6,
  },
};

export const fadeInTextAnimation: AnimationProps = {
  initial: {
    opacity: 0,
    filter: 'blur(50px)',
    letterSpacing: '100px',
  },
  animate: {
    opacity: 0.75,
    filter: 'blur(0px)',
    letterSpacing: '3px',
  },
  transition: {
    duration: 1.1,
    ease: [0.25, 0.1, 0.25, 1],
  },
};
