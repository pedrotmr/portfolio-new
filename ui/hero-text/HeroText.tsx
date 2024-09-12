'use client';

import useFitTextToContainer from '@/hooks/use-fit-text-to-container';
import '@/styles/glitch.css';
import { GradientText, IgProfilePicture, MagneticWrapper } from '@/ui';
import { clashFont, thunderFont } from '@/utils';
import { motion } from 'framer-motion';
import { RefObject } from 'react';
import {
  descriptionAnimation,
  nameAnimation,
  profilePictureAnimation,
  titleAnimation,
  useAnimations,
} from './animations';

const HeroText = ({ scrollRef }: { scrollRef: RefObject<HTMLDivElement> }) => {
  const wrapperStyle = useAnimations(scrollRef);
  const { containerRef, textRef } = useFitTextToContainer();

  return (
    <motion.div
      ref={containerRef}
      style={wrapperStyle}
      className="z-20 mx-auto grid w-full max-w-[70dvw] select-none gap-2 text-beige lg:max-w-3xl"
    >
      <MagneticWrapper ratio={6} className="w-max">
        <motion.div
          className="mb-4 origin-bottom-left scale-50 cursor-grab active:cursor-grabbing sm:scale-100"
          drag
          dragSnapToOrigin
          dragPropagation
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          <IgProfilePicture
            initial={profilePictureAnimation.initial}
            animate={profilePictureAnimation.animate}
            transition={profilePictureAnimation.transition}
          />
        </motion.div>
      </MagneticWrapper>

      <div className="mb-2 w-full overflow-hidden">
        <motion.h1
          initial={nameAnimation.initial}
          animate={nameAnimation.animate}
          transition={nameAnimation.transition}
          className={`text-[clamp(12px,2vw,1.875rem)] leading-tight text-beige ${clashFont.className} `}
        >
          Hey, I'm Pedro{' '}
          <span className="inline-block origin-bottom-right animate-hand-wave">👋</span>
        </motion.h1>
      </div>

      <MagneticWrapper>
        <div className="w-full overflow-hidden">
          <motion.h2
            className={`glitch cursor-none whitespace-nowrap font-bold leading-none tracking-normal text-beige
              ${thunderFont.className}`}
            initial={titleAnimation.initial}
            animate={titleAnimation.animate}
            transition={titleAnimation.transition}
            data-text="Frontend Developer"
            ref={textRef}
          >
            Frontend Developer
          </motion.h2>
        </div>
      </MagneticWrapper>

      <motion.h3
        initial={descriptionAnimation.initial}
        animate={descriptionAnimation.animate}
        transition={descriptionAnimation.transition}
        className={`text-[clamp(10px,2.8vw,2rem)] leading-tight ${clashFont.className} `}
      >
        I craft beautiful and engaging digital experiences, <br /> with a
        <GradientText color="purple">user driven mindset</GradientText> and a
        <GradientText color="orange">big eye for design.</GradientText>
      </motion.h3>
    </motion.div>
  );
};

export default HeroText;
