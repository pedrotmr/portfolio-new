'use client';

import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import '@/styles/glitch.css';
import { GradientText, HoverArrow, IgProfilePicture, MagneticWrapper } from '@/ui';
import { clashFont, cn, thunderFont } from '@/utils';
import { AnimationProps, motion, MotionStyle } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { blurAnimation, nameAnimation, profilePictureAnimation, titleAnimation } from './animations';

const GLITCH_MS = 1400;

// The scroll-driven exit (`style`) is built in Header, which owns the element it tracks.
const HeroText = ({ style }: { style: MotionStyle }) => {
  const { reduced, finePointer } = useMotionCapabilities();
  const { containerRef, textRef } = useFitTextToContainer();

  // Touch screens cannot hover, so a tap plays the same glitch the desktop hover does.
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(glitchTimer.current), []);

  const playGlitch = () => {
    if (finePointer || reduced) return;
    setIsGlitching(true);
    clearTimeout(glitchTimer.current);
    glitchTimer.current = setTimeout(() => setIsGlitching(false), GLITCH_MS);
  };

  const intro = (animation: AnimationProps): AnimationProps => (reduced ? { initial: false } : animation);

  return (
    <motion.div
      data-hero-content
      ref={containerRef}
      style={style}
      className="z-20 mx-auto grid w-[calc((100vw-4rem)/1.15)] max-w-[min(48rem,110svh)] select-none gap-2 text-beige
        sm:w-[70dvw] lg:w-full lg:max-w-3xl"
    >
      <MagneticWrapper ratio={4} className="w-max">
        <motion.div
          className="mb-1 origin-bottom-left scale-75 cursor-none sm:mb-4 sm:scale-100
            [@media(max-width:1023px)_and_(max-height:560px)]:mb-0
            [@media(max-width:1023px)_and_(max-height:560px)]:scale-50"
          drag={finePointer && !reduced}
          dragSnapToOrigin
          dragPropagation
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          <IgProfilePicture {...intro(profilePictureAnimation)} />
        </motion.div>
      </MagneticWrapper>

      <div className="mb-2 w-full overflow-hidden">
        <motion.h1
          className={`select-none text-[clamp(1.0625rem,2vw,1.875rem)] leading-tight text-beige ${clashFont.className}`}
          {...intro(nameAnimation)}
        >
          Hey, I'm Pedro <span className="inline-block origin-bottom-right animate-hand-wave">👋</span>
        </motion.h1>
      </div>

      <div className="relative">
        <MagneticWrapper>
          <div className="relative w-full cursor-none overflow-hidden" onPointerDown={playGlitch}>
            <motion.h2
              className={cn(
                `glitch whitespace-nowrap font-bold leading-none tracking-normal text-beige ${thunderFont.className}`,
                isGlitching ? 'is-glitching' : undefined,
              )}
              data-text="Frontend Developer"
              ref={textRef}
              {...intro(titleAnimation)}
            >
              Frontend Developer
            </motion.h2>
          </div>
        </MagneticWrapper>
        <HoverArrow
          className="-top-11 right-1 sm:-right-12 sm:-top-3"
          label={finePointer ? 'hover it...' : 'tap it...'}
          {...intro(blurAnimation)}
        />
      </div>

      <motion.p
        className={`hero-tagline text-[clamp(1.0625rem,2.8vw,2rem)] leading-snug sm:leading-tight
          [@media(max-width:1023px)_and_(max-height:560px)]:text-base ${clashFont.className}`}
        {...intro(blurAnimation)}
      >
        I craft beautiful and engaging digital experiences, <br className="hidden sm:inline" /> with a
        <GradientText color="purple">user driven mindset</GradientText> and a
        <GradientText color="orange">big eye for design.</GradientText>
      </motion.p>
    </motion.div>
  );
};

export default HeroText;
