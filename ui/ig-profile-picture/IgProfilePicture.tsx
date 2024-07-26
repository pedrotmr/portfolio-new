'use client';

import { cn } from '@/utils';
import { AnimationProps, motion } from 'framer-motion';
import Image from 'next/image';

type IgProfilePictureProps = {
  className?: string;
  style?: any;
  initial?: AnimationProps['initial'];
  animate?: AnimationProps['animate'];
  transition?: AnimationProps['transition'];
};

const IgProfilePicture = ({
  className,
  style,
  initial,
  animate,
  transition,
}: IgProfilePictureProps) => {
  return (
    <motion.div
      className={cn('relative w-[60px] animate-ig-stroke', className)}
      style={style}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="37"
          cy="37"
          r="34"
          stroke="url(#paint0_linear_658_19773)"
          strokeWidth="2.5"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_658_19773"
            x1="3"
            y1="3"
            x2="71"
            y2="71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F58529"></stop>
            <stop offset="0.487847" stopColor="#DD2A7B"></stop>
            <stop offset="1" stopColor="#8134AF"></stop>
          </linearGradient>
        </defs>
      </svg>
      <Image
        className="absolute left-7 top-7 w-full translate-x-[-21px] translate-y-[-21px] rounded-full"
        src="/images/perfil_3.jpg"
        alt="Profile"
        width={300}
        height={300}
      />
    </motion.div>
  );
};

export default IgProfilePicture;
