import { AnimationProps } from "framer-motion";

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
    delay: 2.4,
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
};