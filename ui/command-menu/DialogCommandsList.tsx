import { motion } from 'framer-motion';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useCommandMenuStore } from './use-command-menu.store';

const DialogCommandsList = () => {
  const { selectedIndex, setCurrentView, closeModal, filteredCommands } = useCommandMenuStore();

  const commandRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    commandRefs.current[selectedIndex]?.focus();
  }, [selectedIndex]);

  const preventTabOnLastItem = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isLastItem = index === filteredCommands.length - 1;
    if (e.key === 'Tab' && isLastItem) {
      e.preventDefault();
      commandRefs.current[0]?.focus();
    }
  };

  const handleCommandClick = (command: (typeof filteredCommands)[0]) => {
    if (command.id === 'about' || command.id === 'projects') {
      setCurrentView(command.id);
    } else {
      command.action();
      closeModal();
    }
  };

  return (
    <motion.div
      key="commands-list"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2"
    >
      {filteredCommands.map((command, index) => (
        <button
          key={command.id}
          className="group relative flex w-full cursor-pointer items-center rounded-md p-2 focus:outline-none"
          onClick={() => handleCommandClick(command)}
          onKeyDown={(e) => preventTabOnLastItem(e, index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
          tabIndex={0}
          ref={(el) => {
            if (el) commandRefs.current[index] = el;
          }}
        >
          <command.icon className="mr-3 size-5 text-gray-500" />
          <p className="text-gray-600">{command.name}</p>

          <span
            className="duration-400 absolute left-0 flex w-full items-center rounded-md bg-sky-800 p-2 text-white transition-all"
            style={{
              clipPath:
                hoveredIndex === index
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                  : 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
            }}
          >
            <command.icon className="mr-3 size-5" />
            {command.description}
          </span>
        </button>
      ))}
    </motion.div>
  );
};

export default DialogCommandsList;
