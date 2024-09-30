import { GradientText, TagList } from '@/ui';
import { avantGarde } from '@/utils';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Project } from '../projects/project-data';

type ProjectCardProps = {
  index: number;
  project: Project;
  containerProgress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const ProjectCard = ({ index, project, containerProgress, range, targetScale }: ProjectCardProps) => {
  const cardRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: cardRef,
  //   offset: ['start end', 'start 0.3'],
  // });

  const cardScale = useTransform(containerProgress, range, [1, targetScale]);
  // const imageScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="card-wrapper relative h-max w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800
        p-[1px] backdrop-blur-md transition-shadow will-change-transform before:absolute before:left-0 before:top-0
        before:h-full before:w-full before:cursor-none before:content-['']"
      style={
        {
          scale: cardScale,
          top: `calc(${index * 40}px)`,
          '--x': `${index * 50}deg`,
          '--y': `-${360 - index * 50}deg`,
          boxShadow: 'inset 0 0 2px rgba(255,255,255,0.6), 0 0 2px #3b82f6, 0 0 2px #3b82f6',
        } as any
      }
    >
      <div className="relative h-full w-full rounded-3xl bg-slate-800 p-12">
        <div className="grid h-full gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <GradientText color="silver" className={`w-max pb-2 text-5xl ${avantGarde.className}`} underline>
              {project.name}
            </GradientText>
            <div className="space-y-4 text-base leading-relaxed">
              {project.description.map((description, idx) => (
                <p key={idx}>{description}</p>
              ))}
            </div>
            <Link
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-end gap-1 underline underline-offset-4"
            >
              See more
              <ArrowUpRight
                className="size-5 -translate-y-0.5 duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5
                  group-hover:text-beige md:block"
              />
            </Link>
            <TagList tags={project.tags} />
          </div>
          <div className="relative h-max w-full self-center overflow-hidden rounded-3xl">
            {/* <motion.div style={{ scale: imageScale }} className="h-full w-full"> */}
            <Image
              src={project.image}
              alt={project.name}
              className="aspect-[3/2] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
