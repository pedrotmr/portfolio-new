import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';
import useMediaQuery from './use-media-query';

export const useSlidingMarginsAnimatons = (scrollRef: RefObject<HTMLElement>) => {
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

  const endMarginStyles = {
    borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
    marginRight: endingMargin,
    marginLeft: endingMargin,
  };

  return { initialMarginStyles, endMarginStyles };
};
