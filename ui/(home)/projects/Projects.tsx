import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import { MagneticWrapper, ProjectCard, TracingBeam } from '@/ui';
import { thunderFont } from '@/utils';
import { motion, useScroll } from 'framer-motion';
import { projects } from './project-data';

const Projects = () => {
  const { containerRef, textRef } = useFitTextToContainer();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <motion.section
      ref={containerRef}
      className="mx-auto grid w-full max-w-5xl pt-[12rem] text-beige"
    >
      <MagneticWrapper>
        <p
          ref={textRef}
          className={`glitch ${thunderFont.className} mb-20 cursor-none whitespace-nowrap font-bold leading-none`}
          data-text="Personal Projects"
        >
          <span>Personal Projects</span>
          <TracingBeam containerRef={textRef} isHorizontal />
        </p>
      </MagneticWrapper>

      {projects.map((project, idx) => (
        <div
          key={project.name}
          className="sticky top-[12%] flex h-screen w-full flex-col justify-start"
        >
          <ProjectCard
            index={idx}
            project={project}
            containerProgress={scrollYProgress}
            range={[idx * (1 / projects.length), 1]}
            targetScale={1 - (projects.length - idx) * 0.05}
          />
        </div>
      ))}
    </motion.section>
  );
};

export default Projects;
