'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type FadeUpComponentProps = {
  className?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
  duration?: number;
  delay?: number;
  children: ReactNode;
};

const FadeUpComponent = ({
  className = '',
  children,
  amount = 1,
  once = true,
  duration = 0.3,
  delay = 0,
}: FadeUpComponentProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount, once }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpComponent;
