import { ReactLenis } from 'lenis/react';
import { useShortcut } from 'react-shortcut-keys';
import Dialog from './Dialog';
import { useCommandMenuStore } from './use-command-menu.store';

const CommandMenu = () => {
  const { isOpen, currentView, openModal, setCurrentView, closeModal } = useCommandMenuStore();

  useShortcut({
    global: true,
    keys: ['cmd+a', 'Escape'],
    onKey: (key) => handleGlobalShortcut(key),
    options: { preventDefault: true },
  });

  const handleGlobalShortcut = (key: string) => {
    if (key === 'cmd+a') {
      isOpen ? closeModal() : openModal();
    }
    if (key === 'Escape') {
      currentView === 'commands-list' ? closeModal() : setCurrentView('commands-list');
    }
  };

  if (!isOpen) return null;

  return (
    <ReactLenis>
      <Dialog.Brackdrop>
        <Dialog.Body>
          {currentView === 'commands-list' && (
            <>
              <Dialog.Input />
              <Dialog.CommandsList />
            </>
          )}
          {currentView === 'about' && <Dialog.AboutMe />}
          {currentView === 'projects' && <Dialog.Projects />}
        </Dialog.Body>
      </Dialog.Brackdrop>
    </ReactLenis>
  );
};

export default CommandMenu;
