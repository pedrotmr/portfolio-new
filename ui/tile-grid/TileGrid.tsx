'use client';

import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { BEIGE } from '@/utils';
import { motion, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const TILE_SIZE = 70;

const gridLines = {
  color: 'rgba(113, 113, 113, 0.05)',
  backgroundImage:
    'linear-gradient(currentcolor 1px, transparent 1px), linear-gradient(to right, currentcolor 1px, transparent 1px)',
};

function calculateTileCount() {
  const columns = Math.ceil(window.innerWidth / TILE_SIZE);
  const rows = Math.ceil(window.innerHeight / TILE_SIZE);
  return columns * rows;
}

const TileGrid = ({ opacity }: { opacity: MotionValue<number> }) => {
  const { finePointer } = useMotionCapabilities();
  const [tileCount, setTileCount] = useState(0);

  useEffect(() => {
    // Hover tiles only make sense with a mouse. Touch screens get the same grid drawn in CSS.
    if (!finePointer) return;
    const handleResize = () => setTileCount(calculateTileCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [finePointer]);

  return (
    <motion.div
      aria-hidden="true"
      className="absolute left-0 top-0 grid h-full w-full grid-cols-auto-fill-70 grid-rows-auto-fill-70 overflow-hidden
        bg-slate-900"
      style={{ opacity }}
    >
      {finePointer ? (
        Array(tileCount)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={i}
              className="bg-slate-900"
              whileHover={{
                backgroundColor: BEIGE,
                transition: { duration: 0 },
              }}
              transition={{ duration: 0.8 }}
              style={gridLines}
            />
          ))
      ) : (
        <div
          className="absolute inset-0"
          style={{ ...gridLines, backgroundSize: `${TILE_SIZE}px ${TILE_SIZE}px` }}
        />
      )}
    </motion.div>
  );
};

export default TileGrid;
