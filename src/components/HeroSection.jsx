import { motion } from "framer-motion";
import {
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import Tooltip from "./Tooltip";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-24 py-16 px-6">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Chris Marquez
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        Software Engineer | M.S. in CS @ Georgia Tech
      </motion.p>

      <motion.div
        className="mt-8 flex items-center gap-7"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <Tooltip label="GitHub">
          <a
            href="https://github.com/chrismarquezz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200 motion-safe:hover:scale-110"
          >
            <FaGithub size="28" />
          </a>
        </Tooltip>
        <Tooltip label="LinkedIn">
          <a
            href="https://www.linkedin.com/in/chris--marquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 motion-safe:hover:scale-110"
          >
            <FaLinkedin size="28" />
          </a>
        </Tooltip>
        <Tooltip label="Email">
          <a
            href="mailto:chrismarquez00@icloud.com"
            aria-label="Email"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 motion-safe:hover:scale-110"
          >
            <FaEnvelope size="28" />
          </a>
        </Tooltip>
        <Tooltip label="Resume">
          <a
            href="/Chris-Marquez-Resume.pdf"
            download="Chris-Marquez-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 motion-safe:hover:scale-110"
          >
            <FaDownload size="26" />
          </a>
        </Tooltip>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown
            className="text-gray-400 dark:text-gray-500"
            size="20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
