import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import '@/styles/glitch.css';
import { cn } from '@/utils';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

const MagneticWrapper = ({
  children,
  className,
  ratio = 20,
}: {
  children: ReactNode;
  className?: string;
  ratio?: number;
}) => {
  const { reduced, finePointer } = useMotionCapabilities();
  const enabled = finePointer && !reduced;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const transform = useMotionTemplate`translate3d(${mouseX}px, ${mouseY}px, 0)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - (rect.left + rect.width / 2)) / ratio);
    mouseY.set((event.clientY - (rect.top + rect.height / 2)) / ratio);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative select-none', className)}
      style={enabled ? { transform, transition: 'transform 0.1s ease-out' } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
