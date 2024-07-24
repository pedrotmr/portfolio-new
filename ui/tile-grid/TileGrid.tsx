import { BEIGE } from '@/utils/constants';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function calculateTileCount() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const tileSize = 70;
  const columns = Math.ceil(screenWidth / tileSize);
  const rows = Math.ceil(screenHeight / tileSize);
  return columns * rows;
}

const TileGrid = () => {
  const [tileCount, setTileCount] = useState(() => calculateTileCount());

  useEffect(() => {
    const handleResize = () => setTileCount(calculateTileCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute left-0 top-0 grid h-full w-full grid-cols-auto-fill-70 grid-rows-auto-fill-70 overflow-hidden bg-slate-900">
      {Array(tileCount)
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
            style={{
              color: 'rgba(113, 113, 113, 0.05)',
              backgroundImage:
                'linear-gradient(currentcolor 1px, transparent 1px), linear-gradient(to right, currentcolor 1px, transparent 1px)',
            }}
          />
        ))}
    </div>
  );
};

export default TileGrid;
