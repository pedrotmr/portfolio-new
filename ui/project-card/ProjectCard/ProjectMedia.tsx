import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '../../projects/project-data';

interface ProjectMediaProps {
  project: Project;
}

export default function ProjectMedia({ project }: ProjectMediaProps) {
  const { reduced, finePointer } = useMotionCapabilities();
  const [choice, setChoice] = useState<boolean | null>(null);

  // A looping GIF plays by default only on desktop with motion allowed. Everyone can pause or play it.
  const playing = Boolean(project.animatedImage) && (choice ?? (finePointer && !reduced));
  const src = playing && project.animatedImage ? project.animatedImage : project.image;

  return (
    <div
      className="group/media relative order-first h-max w-full self-center overflow-hidden rounded-2xl sm:rounded-3xl
        md:order-none"
    >
      <Image
        src={src}
        alt={`${project.name} screenshot`}
        className="aspect-[3/2] h-auto w-full object-cover"
        height={1000}
        width={1000}
        sizes="(min-width: 768px) 45vw, 90vw"
        unoptimized={src.endsWith('.gif')}
      />
      {project.animatedImage && (
        <button
          type="button"
          onClick={() => setChoice(!playing)}
          aria-label={playing ? `Pause ${project.name} animation` : `Play ${project.name} animation`}
          className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-full bg-slate-900/75 text-beige
            backdrop-blur transition-colors hover:bg-slate-900 lg:opacity-0 lg:focus-visible:opacity-100
            lg:group-hover/media:opacity-100 [@media(hover:none)]:opacity-100"
        >
          {playing ? (
            <Pause aria-hidden="true" className="size-4" />
          ) : (
            <Play aria-hidden="true" className="size-4" />
          )}
        </button>
      )}
    </div>
  );
}
