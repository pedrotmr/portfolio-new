import { motion, MotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { GradientText, TagList } from '@/ui';
import { avantGarde } from '@/utils';
import { Project } from '../projects/project-data';
import ProjectLink from './ProjectCard/ProjectLink';
import ProjectMedia from './ProjectCard/ProjectMedia';

interface ProjectCardProps {
  index: number;
  project: Project;
  stacked: boolean;
  stackOffset: number;
  containerProgress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function ProjectCard({
  index,
  project,
  stacked,
  stackOffset,
  containerProgress,
  range,
  targetScale,
}: ProjectCardProps) {
  const cardScale = useTransform(containerProgress, range, [1, targetScale]);

  return (
    <motion.article
      data-project-card
      aria-labelledby={`project-${index}`}
      className="card-wrapper relative h-max w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800
        p-[1px] backdrop-blur-md transition-shadow will-change-transform before:absolute before:left-0 before:top-0
        before:h-full before:w-full before:cursor-none before:content-['']"
      style={
        {
          scale: stacked ? cardScale : 1,
          top: stacked ? `calc(${index * stackOffset}px)` : 0,
          '--x': `${index * 50}deg`,
          '--y': `-${360 - index * 50}deg`,
          boxShadow: 'inset 0 0 2px rgba(255,255,255,0.6), 0 0 2px #3b82f6, 0 0 2px #3b82f6',
        } as CSSProperties
      }
    >
      <div className="relative h-full w-full rounded-3xl bg-slate-800 p-5 pb-7 sm:p-10 lg:p-12">
        <div className="grid h-full gap-7 md:grid-cols-2 md:gap-16">
          <div className="flex min-w-0 flex-col gap-6 md:gap-8">
            <h3
              id={`project-${index}`}
              className={`text-4xl leading-tight [overflow-wrap:anywhere] sm:text-5xl lg:w-max lg:leading-none lg:[overflow-wrap:normal]
                ${avantGarde.className}`}
            >
              <GradientText color="silver" className="pb-2 lg:block lg:w-max" underline>
                {project.name}
              </GradientText>
            </h3>
            <div className="space-y-4 text-base leading-relaxed">
              {project.description.map((description) => (
                <p key={description}>{description}</p>
              ))}
            </div>
            <Link
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-end gap-1 underline underline-offset-4 lg:flex"
            >
              See more
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 -translate-y-0.5 duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5
                  group-hover:text-beige"
              />
            </Link>
            <div className="flex flex-wrap gap-x-6 gap-y-1 lg:hidden">
              {project.link && <ProjectLink href={project.link}>Live project</ProjectLink>}
              <ProjectLink href={project.github}>Source code</ProjectLink>
            </div>
            <TagList tags={project.tags} className="gap-2 sm:gap-3" />
          </div>
          <ProjectMedia project={project} />
        </div>
      </div>
    </motion.article>
  );
}
