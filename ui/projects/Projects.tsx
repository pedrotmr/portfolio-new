import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import { useSlidingMarginsAnimatons } from '@/hooks/use-sliding-margins-animations';
import { MagneticWrapper, ProjectCard, TracingBeam } from '@/ui';
import { thunderFont } from '@/utils';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { projects } from './project-data';

const Projects = () => {
  const { containerRef, textRef } = useFitTextToContainer();

  const scrollRef = useRef<HTMLDivElement>(null);

  const { endMarginStyles } = useSlidingMarginsAnimatons(scrollRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const inView = useInView(containerRef);

  return (
    <motion.section style={endMarginStyles} ref={scrollRef} className="bg-slate-900">
      <motion.div
        ref={containerRef}
        className="relative z-30 mx-auto grid w-full max-w-5xl pt-[12rem] text-beige"
      >
        <MagneticWrapper>
          <p
            ref={textRef}
            className={`glitch ${thunderFont.className} mb-20 cursor-none whitespace-nowrap font-bold leading-none`}
            data-text="Featured Projects"
          >
            <span>Featured Projects</span>
            {inView && <TracingBeam containerRef={textRef} isHorizontal />}
          </p>
        </MagneticWrapper>
        {projects.map((project, idx) => (
          <div key={project.name} className="sticky top-[12%] flex h-[88dvh] w-full flex-col justify-start">
            <ProjectCard
              index={idx}
              project={project}
              containerProgress={scrollYProgress}
              range={[idx * (1 / projects.length), 1]}
              targetScale={1 - (projects.length - idx) * 0.05}
            />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
