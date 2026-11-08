import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TracingBeam from '../tracing-beam';
import HorizontalScrollCard from './HorizontalScrollCarousel/HorizontalScrollCard';
import { cards } from './HorizontalScrollCarousel/cards';

export default function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const beamRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-60%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={beamRef} style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <HorizontalScrollCard card={card} key={card.id} />
          ))}
          <TracingBeam containerRef={targetRef} isHorizontal />
        </motion.div>
      </div>
    </section>
  );
}
