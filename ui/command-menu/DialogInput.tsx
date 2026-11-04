import { Search } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useMediaMatch } from '@/hooks/use-motion-capabilities';
import { useCommandMenuStore } from './use-command-menu.store';

const DialogInput = () => {
  const { searchTerm, setSearchTerm } = useCommandMenuStore();
  const autofocus = useMediaMatch('(min-width: 768px) and (hover: hover) and (pointer: fine)');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) inputRef.current?.focus();
  }, [autofocus]);

  return (
    <div className="flex items-center border-b pb-2">
      <Search className="mr-2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search commands..."
        className="w-full bg-transparent text-gray-800 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputRef}
        tabIndex={0}
      />
    </div>
  );
};

export default DialogInput;
