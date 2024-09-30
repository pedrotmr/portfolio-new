import { motion, useScroll, useTransform } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

const TracingBeam = ({
  containerRef,
  isHorizontal = false,
}: {
  containerRef: RefObject<HTMLElement>;
  isHorizontal?: boolean;
}) => {
  const [size, setSize] = useState<number | string>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isHorizontal ? ['start 0.8', 'start 0.1'] : ['start center', 'end center'],
  });

  useEffect(() => {
    if (isHorizontal) return;

    const getHeight = () => {
      if (containerRef.current) {
        const { height } = containerRef.current.getBoundingClientRect();
        setSize(isHorizontal ? '100%' : height);
      }
    };
    getHeight();
    window.addEventListener('resize', getHeight);
    return () => window.removeEventListener('resize', getHeight);
  }, [isHorizontal, containerRef]);

  const widthTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, size]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0], [1, 1]);

  const maskImage = isHorizontal
    ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
    : 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)';

  return (
    <span
      className="absolute overflow-hidden"
      style={{
        maskImage,
        background: isHorizontal
          ? 'linear-gradient(to right, transparent 0%, #555 10%, transparent 90%)'
          : 'linear-gradient(to top, transparent 0%, #555 10%, transparent 90%)',
        ...(isHorizontal
          ? { bottom: '0.5rem', right: 0, height: '2px', width: '100%' }
          : { left: '1rem', top: 0, width: '2px', height: size }),
      }}
    >
      <motion.span
        className="absolute overflow-hidden rounded-full"
        style={{
          maskImage,
          background: isHorizontal
            ? 'linear-gradient(to right, #dd2a7b 0%, #3b82f6 10%, transparent 99%)'
            : 'linear-gradient(to top, #dd2a7b 0%, #3b82f6 10%, transparent 99%)',
          ...(isHorizontal
            ? { insetY: 0, right: 0, height: '2px', width: widthTransform, opacity: opacityTransform }
            : { insetX: 0, top: 0, width: '2px', height: heightTransform, opacity: opacityTransform }),
        }}
      />
    </span>
  );
};

export default TracingBeam;
