import { motion } from 'framer-motion';
import { useCommandMenuStore } from './use-command-menu.store';

const DialogProjects = () => {
  const { setCurrentView } = useCommandMenuStore();

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2 p-2"
    >
      <h3 className="mb-2 text-lg font-semibold">My Projects</h3>
      <p>Description of your projects...</p>
      <button
        onClick={() => setCurrentView('commands-list')}
        className="mt-4 rounded bg-gray-200 px-3 py-1 text-sm text-gray-800"
      >
        Back
      </button>
    </motion.div>
  );
};

export default DialogProjects;
