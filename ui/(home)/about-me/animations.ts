import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

const an = {
  start: 0,
  imagePlaceRight: 0.125,
  imagePanRight: 0.25,
  imagePlaceLeft: 0.375,
  imagePanLeft: 0.5,
  imagePlaceRightSecond: 0.625,
  imagePanRightSecond: 0.75,
  imageStartOut: 0.875,
  imageEndOut: 1,
};

export const useAnimations = (scrollRef: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const allElementsPosition = useTransform(scrollYProgress, (pos) =>
    pos <= 1 ? 'fixed' : 'relative',
  );

  const imageAnimations = {
    blur: useTransform(
      scrollYProgress,
      [an.start, an.imagePlaceRight, an.imageStartOut, an.imageEndOut],
      [40, 0, 0, 40],
    ),
    scale: useTransform(
      scrollYProgress,
      [an.start, an.imagePlaceRight, an.imageStartOut, an.imageEndOut],
      [2.5, 1, 1, 2.5],
    ),
    opacity: useTransform(
      scrollYProgress,
      [an.start, an.imagePlaceRight, an.imageStartOut, an.imageEndOut],
      [0, 1, 1, 0],
    ),
    x: useTransform(
      scrollYProgress,
      [
        an.start,
        an.imagePlaceRight,
        an.imagePanRight,
        an.imagePlaceLeft,
        an.imagePanLeft,
        an.imagePlaceRightSecond,
        an.imagePanRightSecond,
        an.imageStartOut,
        an.imageEndOut,
      ],
      ['300%', '65%', '60%', '-65%', '-60%', '65%', '60%', '80%', '300%'],
    ),
  };

  const imageStyles = {
    x: imageAnimations.x,
    scale: imageAnimations.scale,
    opacity: imageAnimations.opacity,
    position: allElementsPosition,
    filter: useMotionTemplate`grayscale(100%) brightness(110%) contrast(125%) blur(${imageAnimations.blur}px)`,
  };

  const firstTextAnimations = {
    x: useTransform(
      scrollYProgress,
      [an.start, an.imagePlaceRight, an.imagePanRight, an.imagePlaceLeft],
      ['-300%', '-55%', '-50%', '-300%'],
    ),
    opacity: useTransform(
      scrollYProgress,
      [an.start, an.imagePlaceRight, an.imagePanRight, an.imagePlaceLeft - 0.05],
      [0, 1, 1, 0],
    ),
    blur: useTransform(scrollYProgress, [an.start, an.imagePlaceRight], [40, 0]),
  };

  const firstTextStyles = {
    position: allElementsPosition,
    x: firstTextAnimations.x,
    opacity: firstTextAnimations.opacity,
    filter: useMotionTemplate`blur(${firstTextAnimations.blur}px)`,
    scale: imageAnimations.scale,
  };

  const secontTextAnimations = {
    x: useTransform(
      scrollYProgress,
      [an.imagePanRight, an.imagePlaceLeft, an.imagePanLeft, an.imagePlaceRightSecond],
      ['300%', '70%', '65%', '300%'],
    ),
    opacity: useTransform(
      scrollYProgress,
      [an.imagePanRight, an.imagePlaceLeft, an.imagePanLeft, an.imagePlaceRightSecond - 0.05],
      [0, 1, 1, 0],
    ),
  };

  const secondTextStyles = {
    position: allElementsPosition,
    x: secontTextAnimations.x,
    opacity: secontTextAnimations.opacity,
  };

  const thirdTextAnimation = {
    x: useTransform(
      scrollYProgress,
      [
        an.imagePanLeft,
        an.imagePlaceRightSecond,
        an.imagePanRightSecond,
        an.imageStartOut,
        an.imageEndOut,
      ],
      ['-300%', '-55%', '-50%', '-60%', '-300%'],
    ),
    opacity: useTransform(
      scrollYProgress,
      [an.imagePanLeft, an.imagePlaceRightSecond, an.imagePanRightSecond, an.imageEndOut],
      [0, 1, 1, 0],
    ),
    blur: useTransform(scrollYProgress, [an.imageStartOut, an.imageEndOut], [0, 40]),
  };

  const thirdTextStyles = {
    position: allElementsPosition,
    x: thirdTextAnimation.x,
    opacity: thirdTextAnimation.opacity,
    filter: useMotionTemplate`blur(${thirdTextAnimation.blur}px)`,
    scale: imageAnimations.scale,
  };

  return { imageStyles, firstTextStyles, secondTextStyles, thirdTextStyles };
};
