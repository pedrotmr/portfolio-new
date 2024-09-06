import useTrackCursor from '@/hooks/use-track-cursor';
import { HEADER_ANIMATION_COLOR } from '@/utils';
import { motion, useMotionTemplate } from 'framer-motion';
import { ReactNode } from 'react';

const GradientCursorArea = ({ children }: { children: ReactNode }) => {
  const { mouseX, mouseY, handleMouseMove } = useTrackCursor();

  const cursorShadowStyle = {
    background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, ${HEADER_ANIMATION_COLOR} 0%, transparent 80%)`,
  };

  return (
    <main onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none fixed inset-0 z-10 transition duration-300"
        style={cursorShadowStyle}
      />
      {children}
    </main>
  );
};

export default GradientCursorArea;
