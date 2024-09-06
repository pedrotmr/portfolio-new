import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipStaggerText = ({ children }: { children: string }) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden"
      // className={`relative mt-[-8px] block max-w-3xl text-3xl overflow-hidden${clashFont.className}`}
      // className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      // style={{ lineHeight: 0.75 }}
    >
      <div>
        {children.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split('').map((char, i) => (
          <motion.span
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
};
export default FlipStaggerText;
