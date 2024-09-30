/* eslint-disable no-unused-vars */

import { Download, Github, Linkedin, Mail, User } from 'lucide-react';
import { create } from 'zustand';

type Command = {
  id: string;
  name: string;
  description: string;
  icon: any;
  action: () => void;
};

const commandList: Command[] = [
  {
    id: 'resume',
    name: 'Resume',
    description: 'Get my life in a PDF',
    icon: Download,
    action: () => window.open('/pedro-frontend.pdf', '_blank'),
  },

  {
    id: 'github',
    name: 'GitHub',
    description: 'Stalk my code',
    icon: Github,
    action: () => window.open('https://github.com/pedrotmr', '_blank'),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Professional Pedro, at your service',
    icon: Linkedin,
    action: () => window.open('https://linkedin.com/in/pedrotmr', '_blank'),
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Let’s talk, the old-school way',
    icon: Mail,
    action: () => (window.location.href = 'mailto:your@email.com'),
  },
  { id: 'about', name: 'About Me', description: 'Get to know a bit about me', icon: User, action: () => {} },
  // {
  //   id: 'projects',
  //   name: 'Projects',
  //   description: 'See what I can build with a cup of coffee',
  //   icon: Folder,
  //   action: () => {},
  // },
];

type CommandMenuView = 'commands-list' | 'about' | 'projects';

interface CommandMenuState {
  isOpen: boolean;
  searchTerm: string;
  currentView: CommandMenuView;
  selectedIndex: number;
  filteredCommands: Command[];
  openModal: () => void;
  closeModal: () => void;
  setSearchTerm: (searchTerm: string) => void;
  setCurrentView: (view: CommandMenuView) => void;
  setSelectedIndex: (index: number) => void;
}

const useCommandMenuStore = create<CommandMenuState>((set) => ({
  isOpen: false,
  searchTerm: '',
  currentView: 'commands-list',
  selectedIndex: -1,
  filteredCommands: commandList,
  openModal: () => set({ isOpen: true }),
  closeModal: () =>
    set({
      isOpen: false,
      selectedIndex: -1,
      currentView: 'commands-list',
      searchTerm: '',
      filteredCommands: commandList,
    }),
  setSearchTerm: (searchTerm) =>
    set({
      searchTerm,
      filteredCommands: commandList.filter((command) =>
        command.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }),
  setCurrentView: (currentView) => set({ currentView }),
  setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
}));

export { useCommandMenuStore };
