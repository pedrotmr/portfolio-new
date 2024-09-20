'use client';

import { cn } from '@/utils';
import { useCallback, useEffect, useRef, useState } from 'react';

type StarsBackgroundProps = {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
};

type StarProps = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
};

export const StarsBackground = ({
  starDensity = 0.00003,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 2,
  maxTwinkleSpeed = 4,
  className,
}: StarsBackgroundProps) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed],
  );

  useEffect(() => {
    const updateStars = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setStars(generateStars(width, height));
      }
    };
    updateStars();
    const resizeObserver = new ResizeObserver(updateStars);
    const currentRef = containerRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed, generateStars]);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 h-full w-full', className)}>
      <svg preserveAspectRatio="none" className="h-full w-full bg-transparent">
        <rect width="100%" height="100%" fill="none" />
        {stars.map((star, index) => (
          <circle key={index} cx={star.x} cy={star.y} r={star.radius} fill="white" opacity={star.opacity}>
            {star.twinkleSpeed !== null && (
              <animate
                attributeName="opacity"
                values={`${star.opacity};${star.opacity * 0.3};${star.opacity}`}
                dur={`${star.twinkleSpeed}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default StarsBackground;
