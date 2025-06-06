import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const link of navLinks) {
        const section = document.getElementById(link.href.substring(1));
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (atBottom) {
        currentSection = 'contact';
      }
      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-50/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="hidden md:block">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className={`relative text-lg font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400"
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-200" aria-label="Open menu">
                {isOpen ? <HiX size="28" /> : <HiMenuAlt3 size="28" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}