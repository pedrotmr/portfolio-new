import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import useMotionCapabilities, { useMediaMatch } from '@/hooks/use-motion-capabilities';
import { useSlidingMarginsAnimatons } from '@/hooks/use-sliding-margins-animations';
import { MagneticWrapper, ProjectCard, TracingBeam } from '@/ui';
import { cn, thunderFont } from '@/utils';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import ProjectStackItem from './Projects/ProjectStackItem';
import { projects } from './project-data';

export default function Projects() {
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

  const mobileEndStyle = { clipPath: 'none', marginLeft: 0, marginRight: 0, borderRadius: '0 0 28px 28px' };

  const getPanelStyle = () => {
    if (!desktop) {
      return mobileEndStyle;
    }

    if (reduced) {
      return reducedDesktopEndStyle;
    }

    return endMarginStyles;
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const inView = useInView(containerRef);

  return (
    <motion.section
      style={getPanelStyle()}
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
}
