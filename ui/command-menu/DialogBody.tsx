import { motion } from 'framer-motion';
import { KeyboardEvent, ReactNode, useEffect, useRef } from 'react';
import { useShortcut } from 'react-shortcut-keys';
import { FINE_POINTER_QUERY, useMediaMatch } from '@/hooks/use-motion-capabilities';
import { useCommandMenuStore } from './use-command-menu.store';

const DialogBody = ({ children, ariaLabel }: { children: ReactNode; ariaLabel: string }) => {
  const { selectedIndex, setSelectedIndex, filteredCommands, currentView } = useCommandMenuStore();
  const finePointer = useMediaMatch(FINE_POINTER_QUERY);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (finePointer && currentView === 'commands-list') return;
    dialogRef.current?.focus();
  }, [finePointer, currentView]);

  const handleArrowKeys = useShortcut({
    keys: ['ArrowUp', 'ArrowDown'],
    onKey: (key) => handleShortcut(key),
    options: { preventDefault: true },
  });

  const handleShortcut = (key: string) => {
    const size = filteredCommands.length;
    if (size === 0) return;
    if (key === 'ArrowDown') {
      return setSelectedIndex((selectedIndex + 1) % size);
    }
    if (key === 'ArrowUp') {
      return setSelectedIndex((selectedIndex - 1 + size) % size);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    handleArrowKeys?.(event);
    if (event.key !== 'Tab') return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => {
      const style = getComputedStyle(element);
      return (
        element.getClientRects().length > 0 &&
        style.visibility !== 'hidden' &&
        style.display !== 'none' &&
        element.getAttribute('aria-hidden') !== 'true'
      );
    });

    if (focusable.length === 0) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeElement = document.activeElement;
    const focusIsOutside = !dialog.contains(activeElement);

    if (event.shiftKey && (activeElement === dialog || activeElement === first || focusIsOutside)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (activeElement === dialog || activeElement === last || focusIsOutside)) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      ref={dialogRef}
      tabIndex={-1}
      className="relative h-96 w-full max-w-lg rounded-lg bg-gray-100 shadow-lg backdrop-blur-lg focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-sky-800"
      onKeyDown={handleKeyDown}
    >
      <div className="p-4">{children}</div>
    </motion.div>
  );
};

export default DialogBody;
