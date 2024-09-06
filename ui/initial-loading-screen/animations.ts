import { AnimationProps } from 'framer-motion';

export const moveUpPageAnimtion: AnimationProps = {
  initial: {
    x: 0,
    // opacity: 1,
    // filter: 'blur(0px)',
  },
  exit: {
    y: '-100vh',
    // opacity: 0,
    // filter: 'blur(100px)',
  },
  transition: {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
    delay: 1.5,
  },
};

export const getSvgPathAnimation = (dimension: { width: number; height: number }) => ({
  initial: {
    d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height + 500} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height + 500} L0 0`,
  },
  animate: {
    d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height + 0} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height + 0} L0 0`,
  },
  transition: {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
    delay: 2,
  },
});

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
