'use client';

import useMotionCapabilities from '@/hooks/use-motion-capabilities';
// Direct imports: `lines` builds JSX at module load, before the `@/ui` barrel finishes initialising.
import GradientText from '@/ui/gradient-text';
import HoverArrow from '@/ui/hover-arrow';
import LinkPreview from '@/ui/link-preview';
import { avantGarde, cn } from '@/utils';
import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useAnimations } from './animation';

interface Line {
  ghost: string;
  content: ReactNode;
}

const lines: Line[] = [
  {
    ghost: "Throughout my career, I've had the privilege",
    content: "Throughout my career, I've had the privilege",
  },
  {
    ghost: 'of building software for a NFT marketplace,',
    content: (
      <>
        of building software for a{' '}
        <LinkPreview url="https://app.gonnamakeit.com/" isStatic imageSrc="/images/sites/gonna-make-it.jpeg">
          <GradientText color="green" underline>
            NFT marketplace,
          </GradientText>
        </LinkPreview>
        <HoverArrow className="right-5 top-5 [@media(hover:none)]:hidden" />
      </>
    ),
  },
  {
    ghost: 'an e-commerce startup, a sales agency,',
    content: (
      <>
        an{' '}
        <LinkPreview url="https://www.getvendo.com/" isStatic imageSrc="/images/sites/vendo.jpeg">
          <GradientText color="lightGreen" underline>
            e-commerce startup
          </GradientText>
        </LinkPreview>
        , a{' '}
        <LinkPreview url="https://hellooutbound.com/" isStatic imageSrc="/images/sites/hello-outbound.jpeg">
          <GradientText color="sky" underline>
            sales agency,
          </GradientText>
        </LinkPreview>
      </>
    ),
  },
  {
    ghost: 'and an award-winning news media company.',
    content: (
      <>
        and an{' '}
        <LinkPreview url="https://www.gmgvegas.com" isStatic imageSrc="/images/sites/greenspun-media.jpeg">
          <GradientText color="yellow" underline>
            award-winning news media
          </GradientText>
        </LinkPreview>{' '}
        company.
      </>
    ),
  },
];

export default function ClipTextExperience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { reduced } = useMotionCapabilities();

  const { textStyle, clipPaths } = useAnimations(scrollRef);

  return (
    <motion.section
      ref={scrollRef}
      aria-label="Career summary"
      className={cn(
        `${avantGarde.className} mx-auto bg-slate-900 px-6 sm:px-10 lg:px-0`,
        reduced ? 'py-24' : '-mb-[30svh] h-[210svh] lg:-mb-[22rem] lg:h-[280dvh]',
      )}
    >
      {/* Remount when the motion preference resolves so no scroll-driven style is left behind. */}
      <motion.div
        key={reduced ? 'still' : 'moving'}
        style={reduced ? undefined : textStyle}
        className="top-1/2 z-20 mx-auto flex justify-center text-left text-[clamp(1.625rem,7.2vw,2.25rem)] font-normal
          leading-snug text-beige will-change-transform sm:text-[clamp(2rem,3.8vw,4rem)] sm:leading-normal"
      >
        {/* Each line stacks its faded copy and its revealed copy in one grid cell, so they wrap the same at any width. */}
        <div className="relative z-20 min-w-0 [overflow-wrap:anywhere]">
          {lines.map((line, index) => (
            <div key={line.ghost} className="grid-full">
              <span aria-hidden="true" className="opacity-20">
                {line.ghost}
              </span>
              <motion.div className="relative" style={reduced ? undefined : { clipPath: clipPaths[index] }}>
                {line.content}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
