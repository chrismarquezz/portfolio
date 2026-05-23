import { motion } from "framer-motion";
import { FaSun, FaMoon } from 'react-icons/fa';
import Tooltip from "./Tooltip";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <Tooltip label={darkMode ? "Light Mode" : "Dark Mode"}>
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
      >
        {darkMode ? <FaSun size="16" /> : <FaMoon size="16" />}
      </motion.button>
    </Tooltip>
  );
}