import { cn } from '@/utils';
import { ReactNode, useEffect, useRef } from 'react';

interface ProjectStackItemProps {
  children: ReactNode;
  stacked: boolean;
  desktop: boolean;
  index: number;
}

export default function ProjectStackItem({ children, stacked, desktop, index }: ProjectStackItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const stackedClassName = desktop
    ? 'sticky top-[12%] flex h-[88dvh] flex-col justify-start'
    : 'sticky self-start [&:has(:focus-visible)]:z-40';

  useEffect(() => {
    if (!stacked || desktop) {
      return;
    }

    const row = ref.current;
    const card = row?.firstElementChild as HTMLElement | null;

    if (!row || !card) {
      return;
    }

    const measure = () => row.style.setProperty('--project-height', `${card.offsetHeight}px`);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(card);

    return () => observer.disconnect();
  }, [stacked, desktop]);

  return (
    <div
      ref={ref}
      data-project-stack-item
      className={cn('w-full', stacked ? stackedClassName : undefined)}
      // Tall cards scroll fully into view before pinning their bottom edge; no inner scrolling.
      style={
        stacked && !desktop
          ? { top: `min(calc(12svh + ${index * 8}px), calc(100svh - var(--project-height, 0px) - 24px))` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
