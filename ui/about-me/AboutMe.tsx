import { GradientText } from '@/ui';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimations } from './animations';

const AboutMe = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(scrollRef);

  const { imageStyles, firstTextStyles, secondTextStyles, thirdTextStyles } = useAnimations(scrollRef);

  return (
    <section ref={scrollRef} className="relative h-[300dvh] w-full bg-slate-900">
      {inView && (
        <div
          className="sticky top-1/2 z-20 m-auto flex max-w-6xl -translate-y-1/2 items-center justify-center gap-20
            text-[clamp(10px,3vw,2.25rem)] font-bold leading-tight text-beige"
        >
          <motion.p style={firstTextStyles} className="w-[41%] will-change-transform">
            I'm a<GradientText color="purple">software developer</GradientText> <br />
            from Brazil with solid
            <br />
            <GradientText color="orange">design skills.</GradientText>
          </motion.p>

          <motion.p style={secondTextStyles} className="w-[40%] will-change-transform">
            I blend UI/UX with the
            <br />
            <GradientText color="purple">technical skills</GradientText> of a <br />
            <GradientText color="orange">software engineer.</GradientText>
          </motion.p>

          <motion.p style={thirdTextStyles} className="w-[42%] will-change-transform">
            Creating solutions that <br />
            are <GradientText color="purple">clean, polished</GradientText> and <br />
            <GradientText color="orange">robust under the hood.</GradientText>
          </motion.p>

          <motion.img
            src="/images/pedro.png"
            alt="pedro's image"
            className="aspect-[3/4] h-auto w-[35%] cursor-none select-none rounded-md object-cover will-change-transform"
            width={748}
            height={929}
            style={imageStyles}
          />
        </div>
      )}
    </section>
  );
};

export default AboutMe;
