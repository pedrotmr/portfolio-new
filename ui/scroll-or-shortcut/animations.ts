import { INTRO_DELAY } from '@/utils/constants';
import { AnimationProps } from 'framer-motion';

export const scrollOrShortcutAnimation: AnimationProps = {
  initial: {
    opacity: 1,
    y: 300,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1.6,
    delay: INTRO_DELAY,
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
};
