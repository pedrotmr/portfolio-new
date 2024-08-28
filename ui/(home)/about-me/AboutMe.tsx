import { GradientText } from '@/ui';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimations } from './animations';

const AboutMe = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(scrollRef);

  const { imageStyles, firstTextStyles, secondTextStyles, thirdTextStyles } =
    useAnimations(scrollRef);

  return (
    <section ref={scrollRef} className="relative z-20 h-[450dvh] w-full">
      <div
        style={{ transform: inView ? 'translateY(-50%)' : 'translateY(0%)' }}
        className="sticky top-1/2 z-20 m-auto flex max-w-6xl items-center justify-center gap-20 text-4xl font-bold leading-tight text-beige"
      >
        <motion.p style={firstTextStyles} className="w-[41%]">
          I'm a<GradientText color="purple">software developer</GradientText> from Brazil with solid
          <br />
          <GradientText color="orange">design chops.</GradientText>
        </motion.p>

        <motion.p style={secondTextStyles} className="w-[40%]">
          I blend design with the
          <GradientText color="purple">technical skills</GradientText> of a
          <GradientText color="orange">software engineer.</GradientText>
        </motion.p>

        <motion.p style={thirdTextStyles} className="w-[41%]">
          Creating solutions that are
          <GradientText color="purple">visually appealing</GradientText> and
          <GradientText color="orange">robust under the hood.</GradientText>
        </motion.p>

        <motion.img
          src="/images/pedro3.jpg"
          alt="pedro's image"
          className="aspect-[3/4] h-auto w-[35%] cursor-none rounded-md object-cover brightness-110 contrast-125 grayscale hover:scale-105"
          width={748}
          height={929}
          style={imageStyles}
        />
      </div>
    </section>
  );
};

export default AboutMe;
