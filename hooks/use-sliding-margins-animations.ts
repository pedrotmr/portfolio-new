import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';
import useMediaQuery from './use-media-query';

export const useSlidingMarginsAnimatons = (scrollRef: RefObject<HTMLElement>, fixedRows = false) => {
  const { isMobile } = useMediaQuery();

  const margin = isMobile ? 18 : 40;
  const borderRadius = isMobile ? 18 : 32;

  const { scrollYProgress: scrollYStart } = useScroll({
    target: scrollRef,
    offset: ['end end', 'end center'],
  });

  const initialMargin = useTransform(scrollYStart, [0, 1], [margin, 0]);

  const initialMarginStyles = {
    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    marginTop: initialMargin,
    marginRight: initialMargin,
    marginLeft: initialMargin,
  };

  const { scrollYProgress: scrollYEnd } = useScroll({
    target: scrollRef,
    offset: ['end end', 'end center'],
  });

  const endingMargin = useTransform(scrollYEnd, [0, 1], [0, margin]);

  const clipPath = useMotionTemplate`inset(0px ${endingMargin}px 0px ${endingMargin}px round 0px 0px ${borderRadius}px ${borderRadius}px)`;
  // Natural-height mobile cards must not reflow on scroll; desktop keeps its original fixed-row margins.
  const endMarginStyles = fixedRows
    ? {
        clipPath: 'none',
        borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
        marginRight: endingMargin,
        marginLeft: endingMargin,
      }
    : { clipPath };

  return { initialMarginStyles, endMarginStyles };
};
