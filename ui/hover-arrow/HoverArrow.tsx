import { cn } from '@/utils';
import { AnimationProps, motion } from 'framer-motion';
import HandDrawnArrow from './HandDrawnArrow';

interface HoverArrowProps extends AnimationProps {
  className?: string;
}

const HoverArrow = ({ className, ...animation }: HoverArrowProps) => {
  return (
    <motion.div className={cn('absolute -right-12 -top-3', className)} {...animation}>
      <p className="animate-wiggle text-xs text-pink-400">hover it...</p>
      <HandDrawnArrow className="ml-6 mt-1 fill-pink-400" />
    </motion.div>
  );
};

export default HoverArrow;
