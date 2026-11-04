import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { ShootingStars, StarsBackground } from '@/ui';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const StarsBackgroundArea = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const { reduced } = useMotionCapabilities();

  return (
    <div ref={ref} className="relative">
      {inView && (
        <motion.div
          className="relative z-10"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {!reduced && <ShootingStars className="pointer-events-none fixed inset-0" />}
          <StarsBackground twinkle={!reduced} className="pointer-events-none fixed inset-0" />
        </motion.div>
      )}
      {children}
    </div>
  );
};

export default StarsBackgroundArea;
