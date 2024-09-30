import { motion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { ArrowLeftIcon } from 'lucide-react';
import { useCommandMenuStore } from './use-command-menu.store';

const DialogAboutMe = () => {
  const { setCurrentView } = useCommandMenuStore();

  return (
    <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-2">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => setCurrentView('commands-list')} className="text-sm text-gray-800">
          <ArrowLeftIcon className="size-4" />
        </button>
        <h3 className="text-lg font-semibold text-gray-600">About Me</h3>
      </div>

      <ReactLenis className="no-scrollbar h-[300px] overflow-y-auto text-sm leading-relaxed text-gray-600">
        <p className="mb-2">
          Hey there! I'm Pedro, a Frontend Specialist from Brazil, with a knack for crafting visually stunning
          and user-friendly applications. With 4 years of experience under in software engineering, I've
          developed a passion for clean code and innovative design.
        </p>
        <p className="mb-2">
          My journey has taken me to various corners of the world, including Canada, Colombia, and London.
          This global perspective has shaped my approach to problem-solving and fueled my curiosity for new
          technologies. When I'm not immersed in code, you'll find me staying active, diving into a good book,
          good book, strategizing over a chess board, or simply enjoying time with friends.
        </p>
        <p className="mb-2">
          I'm super excited about the potential of artificial intelligence and blockchain technologies and its
          ability to revolutionize various industries. I'm always eager to learn more and push the boundaries
          of what's possible in frontend development. Feel free to reach out if you want to chat tech, travel,
          or anything in between!
        </p>
      </ReactLenis>
    </motion.div>
  );
};

export default DialogAboutMe;
