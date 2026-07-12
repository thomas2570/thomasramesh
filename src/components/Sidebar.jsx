import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown, FileCode2, FolderOpen } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(true);

  const files = [
    { name: 'home.tsx', id: 'hero' },
    { name: 'about.tsx', id: 'about' },
    { name: 'skills.tsx', id: 'skills' },
    { name: 'experience.tsx', id: 'experience' },
    { name: 'projects.tsx', id: 'projects' },
    { name: 'contact.tsx', id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#1e1e1e] border-r border-[#333] z-50 flex flex-col font-mono text-[#cccccc] md:hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#333]">
              <span className="text-[11px] tracking-wider font-semibold text-[#858585] uppercase">Explorer</span>
              <button onClick={onClose} className="hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-2 flex-grow overflow-y-auto">
              <button 
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="flex items-center gap-1 w-full px-2 py-1 hover:bg-[#2a2d2e] transition-colors text-sm font-semibold"
              >
                {isPortfolioOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                <FolderOpen className="w-4 h-4 text-[#dcb67a] mr-1" />
                PORTFOLIO
              </button>

              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {files.map((file) => (
                      <a
                        key={file.name}
                        href={`#${file.id}`}
                        onClick={onClose}
                        className="flex items-center gap-2 w-full pl-8 pr-4 py-1.5 hover:bg-[#2a2d2e] transition-colors text-[13.5px] cursor-pointer"
                      >
                        <FileCode2 className="w-4 h-4 text-[#519aba]" />
                        {file.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="p-4 border-t border-[#333] flex justify-between">
              <a href="https://github.com/thomas2570/thomasramesh" target="_blank" rel="noreferrer" className="text-xs hover:text-white transition-colors">GitHub</a>
              <a href="mailto:thomasramesh449@gmail.com" className="text-xs hover:text-white transition-colors">Email</a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
