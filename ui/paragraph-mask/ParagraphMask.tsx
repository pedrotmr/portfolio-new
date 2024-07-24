'use client';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParagraphMask = ({
  paragraph,
  outsideScrollProgress,
}: {
  paragraph: string;
  outsideScrollProgress?: MotionValue<number>;
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['end end', 'start center'],
  });

  const words = paragraph.split(' ');

  return (
    <div ref={container} className="select-none">
      <p className="hidden">{paragraph}</p>

      {paragraph.split(' ').map((word, i) => {
        const progress = outsideScrollProgress ?? scrollYProgress;
        const start = i / words.length;
        const end = start + 1 / words.length;
        const amount = end - start;
        const step = amount / word.length;

        return (
          <span key={i} className="mr-2 inline-block">
            {word.split('').map((char, charIndex) => {
              const charStart = start + charIndex * step;
              const charEnd = start + (charIndex + 1) * step;
              const opacity = useTransform(progress, [charStart, charEnd], [0, 1]);

              return (
                <span key={charIndex} className="relative inline-block">
                  <span className="absolute opacity-10">{char}</span>
                  <motion.span style={{ opacity }}>{char}</motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

export default ParagraphMask;
