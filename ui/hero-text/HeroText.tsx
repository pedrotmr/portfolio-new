import '@/styles/glitch.css';
import { GradientText, IgProfilePicture } from '@/ui';
import { clashFont, thunderFont } from '@/utils/fonts';
import { MotionValue, motion } from 'framer-motion';
import {
  descriptionAnimation,
  nameAnimation,
  profilePictureAnimation,
  titleAnimation,
  useAnimations,
} from './animations';

const HeroText = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const wrapperStyle = useAnimations(scrollYProgress);

  return (
    <motion.div style={wrapperStyle} className="flex scale-110 flex-col gap-4 p-6 text-beige">
      <IgProfilePicture
        initial={profilePictureAnimation.initial}
        animate={profilePictureAnimation.animate}
        transition={profilePictureAnimation.transition}
      />

      <div className="mb-2 w-full overflow-hidden">
        <motion.h1
          initial={nameAnimation.initial}
          animate={nameAnimation.animate}
          transition={nameAnimation.transition}
          className={`text-3xl text-beige ${clashFont.className}`}
        >
          Hey, I'm Pedro 👋
        </motion.h1>
      </div>

      <div className="w-full overflow-hidden">
        <motion.h2
          className={`glitch text-9xl font-bold leading-none tracking-normal text-beige ${thunderFont.className}`}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          transition={titleAnimation.transition}
          data-text="Frontend Developer"
        >
          Frontend Developer
        </motion.h2>
      </div>

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
