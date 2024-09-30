'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useCommandMenuStore } from '../command-menu/use-command-menu.store';
import { scrollOrShortcutAnimation } from './animations';

const ScrollOrShortcut = () => {
  const [mounted, setMounted] = useState(false);
  const { openModal } = useCommandMenuStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isMac = navigator.userAgent !== 'undefined' && /(Mac)/i.test(navigator.userAgent);
  const isMobile = navigator.userAgent !== 'undefined' && /iPhone|iPad|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return <Layout onClick={openModal}>scroll down or tap for quick links</Layout>;
  }

  if (isMac) {
    return (
      <Layout>
        scroll down or press{' '}
        <span className="inline-flex gap-1">
          <kbd>⌘</kbd>
          <kbd>A</kbd>
        </span>{' '}
        for quick links
      </Layout>
    );
  }

  return (
    <Layout>
      scroll down or press{' '}
      <span className="inline-flex gap-1">
        <kbd>ctrl</kbd>
        <kbd>A</kbd>
      </span>{' '}
      for quick links
    </Layout>
  );
};

const Layout = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => {
  return (
    <motion.button
      className="absolute bottom-32 z-30 cursor-default place-self-center rounded-2xl border border-beige/20 bg-transparent
        px-4 py-2 font-mono text-xs text-beige mix-blend-difference"
      onClick={onClick}
      {...scrollOrShortcutAnimation}
    >
      {children}
    </motion.button>
  );
};

export default ScrollOrShortcut;
