import '@/styles/glitch.css';
import { cn } from '@/utils';
import { motion } from 'framer-motion';
import { MouseEvent, ReactNode, useState } from 'react';

const MagneticWrapper = ({
  children,
  className,
  ratio = 20,
}: {
  children: ReactNode;
  className?: string;
  ratio?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / ratio;
    const y = (clientY - (rect.top + rect.height / 2)) / ratio;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const { x, y } = mousePosition;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn('relative select-none', className)}
      style={{
        transition: 'transform 0.1s ease-out',
        transform: isHovering ? `translate3d(${x}px, ${y}px, 0) ` : 'translate3d(0px, 0px, 0) ',
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
