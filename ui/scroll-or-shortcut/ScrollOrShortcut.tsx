'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useCommandMenuStore } from '../command-menu/use-command-menu.store';
import { scrollOrShortcutAnimation } from './animations';

type Device = 'mac' | 'pc' | 'touch';

const ScrollOrShortcut = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const [reduced, setReduced] = useState(false);
  const { openModal } = useCommandMenuStore();

  useEffect(() => {
    const touch = window.matchMedia('(hover: none)').matches;
    const mac = /Mac|iPhone|iPad/i.test(navigator.userAgent);
    setDevice(touch ? 'touch' : mac ? 'mac' : 'pc');
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (!device) return null;

  return (
    <motion.button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => {
        // Safari does not focus buttons on click, so focus it to give the dialog a place to return to.
        event.currentTarget.focus();
        openModal();
      }}
      className="absolute bottom-[max(2.5rem,env(safe-area-inset-bottom))] z-30 min-h-11 place-self-center rounded-2xl border
        border-beige/20 bg-transparent px-4 py-2 font-mono text-xs text-beige mix-blend-difference sm:bottom-32
        lg:min-h-0 [@media(max-width:1023px)_and_(max-height:560px)]:bottom-4"
      {...(reduced ? { initial: false } : scrollOrShortcutAnimation)}
    >
      {device === 'touch' ? (
        'scroll down or tap for quick links'
      ) : (
        <>
          scroll down or press{' '}
          <span className="inline-flex gap-1">
            <kbd>{device === 'mac' ? '⌘' : 'ctrl'}</kbd>
            <kbd>A</kbd>
          </span>{' '}
          for quick links
        </>
      )}
    </motion.button>
  );
};

export default ScrollOrShortcut;
