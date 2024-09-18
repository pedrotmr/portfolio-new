import { ShootingStars, StarsBackground } from '@/ui';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const StarsBackgroundArea = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="relative">
      {inView && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <ShootingStars className="fixed top-0 h-screen w-screen" />
          <StarsBackground className="fixed top-0 h-screen w-screen" />
        </motion.div>
      )}
      {children}
    </div>
  );
};

export default StarsBackgroundArea;
