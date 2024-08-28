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

  return (
    <motion.div style={wrapperStyle} className="z-20 flex scale-110 flex-col gap-4 p-6 text-beige">
      <MagneticWrapper ratio={4}>
        <IgProfilePicture
          initial={profilePictureAnimation.initial}
          animate={profilePictureAnimation.animate}
          transition={profilePictureAnimation.transition}
          className="cursor-none select-none"
        />
      </MagneticWrapper>

      <div className="mb-2 w-full overflow-hidden">
        <motion.h1
          initial={nameAnimation.initial}
          animate={nameAnimation.animate}
          transition={nameAnimation.transition}
          className={`text-3xl text-beige ${clashFont.className}`}
        >
          Hey, I'm Pedro{' '}
          <span className="inline-block origin-bottom-right animate-hand-wave select-none">👋</span>
        </motion.h1>
      </div>

      <MagneticWrapper>
        <div className="w-full overflow-hidden">
          <motion.h2
            className={`glitch cursor-none text-9xl font-bold leading-none tracking-normal text-beige ${thunderFont.className}`}
            initial={titleAnimation.initial}
            animate={titleAnimation.animate}
            transition={titleAnimation.transition}
            data-text="Frontend Developer"
          >
            Frontend Developer
          </motion.h2>
        </div>
      </MagneticWrapper>

      <motion.h3
        initial={descriptionAnimation.initial}
        animate={descriptionAnimation.animate}
        transition={descriptionAnimation.transition}
        className={`mt-[-8px] max-w-3xl text-3xl ${clashFont.className}`}
      >
        I craft beautiful and engaging digital experiences, <br /> with a
        <GradientText color="purple">user driven mindset</GradientText> and a
        <GradientText color="orange">big eye for design.</GradientText>
      </motion.h3>
    </motion.div>
  );
};

export default HeroText;
