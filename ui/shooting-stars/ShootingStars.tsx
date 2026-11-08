'use client';

import { cn } from '@/utils';
import { useEffect, useRef } from 'react';

interface ShootingStarsAnimationProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
}

interface ShootingStarsAppearanceProps {
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

type ShootingStarsProps = ShootingStarsAnimationProps & ShootingStarsAppearanceProps;

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    default:
      return { x: 0, y: offset, angle: 315 };
  }
};

// One star at a time, moved directly on the SVG node so the animation never re-renders React.
export default function ShootingStars({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 3000,
  maxDelay = 6000,
  starColor = '#9E00FF',
  trailColor = '#2EB9DF',
  starWidth = 10,
  starHeight = 1,
  className,
}: ShootingStarsProps) {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const rect = rectRef.current;

    if (!rect) {
      return;
    }

    let frame = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const launch = () => {
      const start = getRandomStartPoint();
      let { x, y } = start;
      const direction = start.angle;
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const radians = (direction * Math.PI) / 180;
      let distance = 0;

      const step = () => {
        x += speed * Math.cos(radians);
        y += speed * Math.sin(radians);

        distance += speed;
        const width = starWidth * (1 + distance / 100);

        if (x < -20 || x > window.innerWidth + 20 || y < -20 || y > window.innerHeight + 20) {
          rect.setAttribute('width', '0');
          return;
        }

        rect.setAttribute('x', String(x));
        rect.setAttribute('y', String(y));
        rect.setAttribute('width', String(width));
        rect.setAttribute('transform', `rotate(${direction}, ${x + width / 2}, ${y + starHeight / 2})`);
        frame = requestAnimationFrame(step);
      };

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(step);
      timeout = setTimeout(launch, Math.random() * (maxDelay - minDelay) + minDelay);
    };

    launch();

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starWidth, starHeight]);

  return (
    <svg aria-hidden="true" className={cn('absolute inset-0 h-full w-full', className)}>
      <rect ref={rectRef} width={0} height={starHeight} fill="url(#shooting-star-gradient)" />
      <defs>
        <linearGradient id="shooting-star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
}
