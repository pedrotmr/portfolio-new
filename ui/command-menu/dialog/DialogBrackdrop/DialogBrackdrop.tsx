import { motion } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';
import { useCommandMenuStore } from '../../use-command-menu.store';

const DialogBrackdrop = ({ children }: { children: ReactNode }) => {
  const { closeModal } = useCommandMenuStore();

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <motion.div
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 bg-opacity-50 px-4 sm:px-0"
      onClick={handleOverlayClick}
    >
      {children}
    </motion.div>
  );
};

export default DialogBrackdrop;
