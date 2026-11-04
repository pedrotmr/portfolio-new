import { cn } from '@/utils';
import { AnimationProps, motion } from 'framer-motion';
import HandDrawnArrow from './HandDrawnArrow';

interface HoverArrowProps extends AnimationProps {
  className?: string;
  label?: string;
}

const HoverArrow = ({ className, label = 'hover it...', ...animation }: HoverArrowProps) => {
  return (
    <motion.div aria-hidden="true" className={cn('absolute -right-12 -top-3', className)} {...animation}>
      <p className="animate-wiggle text-xs text-pink-400">{label}</p>
      <HandDrawnArrow className="ml-6 mt-1 fill-pink-400" />
    </motion.div>
  );
};

export default HoverArrow;
