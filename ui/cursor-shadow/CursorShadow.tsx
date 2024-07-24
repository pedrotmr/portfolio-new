'use client';

import { HEADER_ANIMATION_COLOR } from '@/utils/constants';
import { MotionValue, motion, useMotionTemplate } from 'framer-motion';
import { useEffect, useState } from 'react';

const CursorShadow = ({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDisplay(true), 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  const cursorShadowStyle = {
    background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, ${HEADER_ANIMATION_COLOR} 0%, transparent 80%)`,
  };

  if (!display) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 transition duration-300"
      style={cursorShadowStyle}
    />
  );
};

export default CursorShadow;
