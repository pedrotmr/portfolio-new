import { useMotionValue, useSpring } from 'framer-motion';

export const useAnimations = () => {
  const x = useMotionValue(0);

  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return { translateX, handleMouseMove };
};

export const previewAnimation = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.6,
  },
};
