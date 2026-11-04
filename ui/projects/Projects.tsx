import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import useMotionCapabilities, { useMediaMatch } from '@/hooks/use-motion-capabilities';
import { useSlidingMarginsAnimatons } from '@/hooks/use-sliding-margins-animations';
import { MagneticWrapper, ProjectCard, TracingBeam } from '@/ui';
import { cn, thunderFont } from '@/utils';
import { motion, useInView, useScroll } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import { projects } from './project-data';

const Projects = () => {
  // The desktop closing frame changes margins; keep the original title size while it closes.
  const { reduced } = useMotionCapabilities();
  const { containerRef, textRef } = useFitTextToContainer(false, reduced);
  const desktop = useMediaMatch('(min-width: 1024px)');
  const stacked = !reduced;

  const scrollRef = useRef<HTMLDivElement>(null);
  const { endMarginStyles } = useSlidingMarginsAnimatons(scrollRef, stacked);
  const reducedDesktopEndStyle = {
    clipPath: 'none',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: '0 0 32px 32px',
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const inView = useInView(containerRef);

  return (
    <motion.section
      style={
        desktop
          ? reduced
            ? reducedDesktopEndStyle
            : endMarginStyles
          : { clipPath: 'none', marginLeft: 0, marginRight: 0, borderRadius: '0 0 28px 28px' }
      }
      ref={scrollRef}
      aria-labelledby="projects-title"
      className="projects-panel bg-slate-900 px-5 pb-16 sm:px-8 lg:overflow-x-clip lg:px-0 lg:pb-0"
    >
      <motion.div
        ref={containerRef}
        className="relative z-30 mx-auto grid w-full max-w-5xl pt-28 text-beige md:pt-[12rem]"
      >
        <MagneticWrapper>
          <h2
            id="projects-title"
            ref={textRef}
            className={`glitch ${thunderFont.className} mb-12 cursor-none whitespace-nowrap font-bold leading-none md:mb-20`}
            data-text="Featured Projects"
          >
            <span>Featured Projects</span>
            {inView && <TracingBeam containerRef={textRef} isHorizontal />}
          </h2>
        </MagneticWrapper>
        <div className={cn('grid', desktop && stacked ? undefined : 'gap-8 md:gap-12')}>
          {projects.map((project, idx) => (
            <ProjectStackItem key={project.name} stacked={stacked} desktop={desktop} index={idx}>
              <ProjectCard
                index={idx}
                project={project}
                stacked={stacked}
                stackOffset={desktop ? 40 : 0}
                containerProgress={scrollYProgress}
                range={[idx * (1 / projects.length), 1]}
                targetScale={1 - (projects.length - idx) * (desktop ? 0.05 : 0.015)}
              />
            </ProjectStackItem>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

const ProjectStackItem = ({
  children,
  stacked,
  desktop,
  index,
}: {
  children: ReactNode;
  stacked: boolean;
  desktop: boolean;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stacked || desktop) return;
    const row = ref.current;
    const card = row?.firstElementChild as HTMLElement | null;
    if (!row || !card) return;
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
      className={cn(
        'w-full',
        stacked
          ? desktop
            ? 'sticky top-[12%] flex h-[88dvh] flex-col justify-start'
            : 'sticky self-start [&:has(:focus-visible)]:z-40'
          : undefined,
      )}
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
};

export default Projects;
