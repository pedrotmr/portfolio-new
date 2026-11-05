import useMotionCapabilities from '@/hooks/use-motion-capabilities';
import { GradientText } from '@/ui';
import { motion, useInView, type Transition } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';
import { useAnimations } from './animations';

const ImageRippleCanvas = dynamic(() => import('./ImageRipplePortrait'), { ssr: false });

type Statement = (lineBreak: ReactNode) => ReactNode;

const statements: Statement[] = [
  (br) => (
    <>
      I'm a<GradientText color="purple">software developer</GradientText> {br}
      from Brazil with solid
      {br}
      <GradientText color="orange">design skills.</GradientText>
    </>
  ),
  (br) => (
    <>
      I blend UI/UX with the
      {br}
      <GradientText color="purple">technical skills</GradientText> of a {br}
      <GradientText color="orange">software engineer.</GradientText>
    </>
  ),
  (br) => (
    <>
      Creating solutions that {br}
      are <GradientText color="purple">clean, polished</GradientText> and {br}
      <GradientText color="orange">robust under the hood.</GradientText>
    </>
  ),
];

const portrait = {
  src: '/images/pedro.webp',
  alt: 'Portrait of Pedro Ramos in an office',
  width: 1024,
  height: 1365,
};

const AboutMe = () => {
  const { stage, reduced, finePointer } = useMotionCapabilities();

  // Desktop keeps the original pinned scene; smaller screens and reduced motion use normal flow.
  return stage && !reduced ? (
    <AboutMeStage finePointer={finePointer} />
  ) : (
    <AboutMeCompact key={reduced ? 'still' : 'moving'} reduced={reduced} />
  );
};

const AboutMeStage = ({ finePointer }: { finePointer: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const pointerPositionRef = useRef<{ x: number; y: number } | null>(null);
  const inView = useInView(scrollRef);

  const { imageStyles, firstTextStyles, secondTextStyles, thirdTextStyles } = useAnimations(scrollRef);
  const br = <br />;

  useEffect(() => {
    if (!finePointer) return;

    const rememberPointer = (event: MouseEvent) => {
      if (!('pointerType' in event) || event.pointerType !== 'touch') {
        pointerPositionRef.current = { x: event.clientX, y: event.clientY };
      }
    };
    const clearPointer = () => {
      pointerPositionRef.current = null;
    };
    const clearPointerOnExit = (event: PointerEvent) => {
      if (event.relatedTarget === null) clearPointer();
    };

    void import('./ImageRipplePortrait');
    window.addEventListener('pointermove', rememberPointer, { passive: true });
    window.addEventListener('wheel', rememberPointer, { passive: true });
    window.addEventListener('pointerout', clearPointerOnExit, { passive: true });
    window.addEventListener('blur', clearPointer);

    return () => {
      window.removeEventListener('pointermove', rememberPointer);
      window.removeEventListener('wheel', rememberPointer);
      window.removeEventListener('pointerout', clearPointerOnExit);
      window.removeEventListener('blur', clearPointer);
    };
  }, [finePointer]);

  return (
    <section
      id="about"
      aria-label="About me"
      ref={scrollRef}
      className="relative h-[300dvh] w-full overflow-x-clip bg-slate-900"
    >
      <div
        style={{ visibility: inView ? 'visible' : 'hidden' }}
        className="sticky top-1/2 z-20 m-auto flex max-w-6xl -translate-y-1/2 items-center justify-center gap-20
          text-[clamp(10px,3vw,2.25rem)] font-bold leading-tight text-beige"
      >
        <motion.p style={firstTextStyles} className="w-[41%] will-change-transform">
          {statements[0](br)}
        </motion.p>

        <motion.p style={secondTextStyles} className="w-[40%] will-change-transform">
          {statements[1](br)}
        </motion.p>

        <motion.p style={thirdTextStyles} className="w-[42%] will-change-transform">
          {statements[2](br)}
        </motion.p>

        <motion.div
          ref={portraitRef}
          className="relative aspect-[3/4] w-[35%] cursor-none select-none overflow-hidden rounded-md will-change-transform"
          style={imageStyles}
        >
          <img
            {...portrait}
            draggable={false}
            className="absolute inset-0 h-full w-full select-none rounded-md object-cover object-top"
          />
          {finePointer && (
            <ImageRippleCanvas
              active={inView}
              src={portrait.src}
              frameRef={portraitRef}
              pointerPositionRef={pointerPositionRef}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

const spring = { type: 'spring', stiffness: 90, damping: 24 } as const;
const portraitEase: Transition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] };

// Mobile keeps the desktop idea: statements arrive from alternating sides and sharpen out of a blur,
// while the portrait is unveiled between them. Each beat reverses when it leaves the viewport.
const AboutMeCompact = ({ reduced }: { reduced: boolean }) => {
  const enter = (fromLeft: boolean) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { opacity: 0, x: fromLeft ? -56 : 56, filter: 'blur(14px)' },
          whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
          viewport: { once: false, amount: 'some' as const },
          transition: spring,
        };

  const statementClass =
    'text-[clamp(1.75rem,7.4vw,2.75rem)] font-bold leading-[1.15] text-beige text-balance [overflow-wrap:anywhere] md:text-[clamp(2rem,4.2vw,2.75rem)]';

  return (
    <section
      id="about"
      aria-label="About me"
      className="relative overflow-x-clip bg-slate-900 px-6 pb-24 pt-28 sm:px-10 md:pb-36 md:pt-40"
    >
      <div
        className="mx-auto grid max-w-5xl grid-cols-1 gap-y-14 [grid-template-areas:'one'_'photo'_'two'_'three']
          md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-x-14 md:gap-y-28
          md:[grid-template-areas:'one_photo'_'two_photo'_'three_photo']"
      >
        <motion.p className={`${statementClass} [grid-area:one]`} {...enter(true)}>
          {statements[0](' ')}
        </motion.p>

        <motion.figure
          className="relative mx-auto w-[min(78%,20rem)] overflow-hidden rounded-md [grid-area:photo] md:sticky md:top-[18svh]
            md:w-full md:self-start"
          {...(reduced
            ? { initial: false as const }
            : { initial: 'hidden', whileInView: 'shown', viewport: { once: false, amount: 0.35 } })}
        >
          <motion.div variants={{ hidden: { scale: 1.12 }, shown: { scale: 1 } }} transition={portraitEase}>
            <Image
              {...portrait}
              sizes="(min-width: 768px) 40vw, 78vw"
              className="aspect-[3/4] h-auto w-full select-none object-cover object-top"
            />
          </motion.div>
          {/* A curtain lifts off the portrait. The image itself stays unclipped so it lazy-loads and is observed normally. */}
          {!reduced && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 origin-top bg-slate-900"
              variants={{ hidden: { scaleY: 1 }, shown: { scaleY: 0 } }}
              transition={portraitEase}
            />
          )}
        </motion.figure>

        <motion.p className={`${statementClass} text-right [grid-area:two] md:text-left`} {...enter(false)}>
          {statements[1](' ')}
        </motion.p>

        <motion.p className={`${statementClass} [grid-area:three]`} {...enter(true)}>
          {statements[2](' ')}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
