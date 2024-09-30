import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useShortcut } from 'react-shortcut-keys';
import { useCommandMenuStore } from './use-command-menu.store';

const DialogBody = ({ children }: { children: ReactNode }) => {
  const { selectedIndex, setSelectedIndex, filteredCommands } = useCommandMenuStore();

  const handleKeyDown = useShortcut({
    keys: ['ArrowUp', 'ArrowDown'],
    onKey: (key) => handleShortcut(key),
    options: { preventDefault: true },
  });

  const handleShortcut = (key: string) => {
    const size = filteredCommands.length;
    if (key === 'ArrowDown') {
      return setSelectedIndex((selectedIndex + 1) % size);
    }
    if (key === 'ArrowUp') {
      return setSelectedIndex((selectedIndex - 1 + size) % size);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="relative h-96 w-full max-w-lg rounded-lg bg-gray-100 shadow-lg backdrop-blur-lg"
      onKeyDown={handleKeyDown}
    >
      <div className="p-4">{children}</div>
    </motion.div>
  );
};

export default DialogBody;
