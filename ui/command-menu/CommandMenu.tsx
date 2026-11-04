import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { useShortcut } from 'react-shortcut-keys';
import Dialog from './Dialog';
import { useCommandMenuStore } from './use-command-menu.store';

const CommandMenu = () => {
  const { isOpen, currentView, openModal, setCurrentView, closeModal } = useCommandMenuStore();
  const pageLenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const root = document.documentElement;
    const x = window.scrollX;
    const y = window.scrollY;
    const fixed = window.matchMedia('(max-width: 767px), (hover: none) and (pointer: coarse)').matches;
    const previousBody = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const previousRoot = {
      overflow: root.style.overflow,
      scrollbarGutter: root.style.scrollbarGutter,
      minHeight: root.style.minHeight,
    };
    const pageHeight = root.scrollHeight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const wasStopped = pageLenis?.isStopped;

    pageLenis?.stop();
    if (scrollbarWidth > 0) root.style.scrollbarGutter = 'stable';
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    // Fixed positioning also locks the page when mobile Safari's browser bars are collapsed.
    if (fixed) {
      // Retain the scroll range so fixing the body cannot reset scroll-driven scenes to the top.
      root.style.minHeight = `${pageHeight}px`;
      Object.assign(body.style, { position: 'fixed', top: `-${y}px`, left: '0', width: '100%' });
    }

    return () => {
      Object.assign(body.style, previousBody);
      Object.assign(root.style, previousRoot);
      if (fixed) window.scrollTo({ left: x, top: y, behavior: 'instant' });
      if (!wasStopped) pageLenis?.start();
    };
  }, [isOpen, pageLenis]);

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
