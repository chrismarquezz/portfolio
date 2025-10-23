import { motion } from "framer-motion";
import profileImage from "../images/profile.jpeg";
import {
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen py-24 px-6 gap-10 md:gap-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img
          src={profileImage}
          alt="A professional headshot of Chris Marquez"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
        />
      </motion.div>
      <div className="max-w-2xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Chris Marquez
        </motion.h1>

        <motion.p
          className="mt-2 text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          Aspiring Full-Stack Software Engineer
        </motion.p>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          Computer Science student at Villanova University (’26). Former
          Software Engineering Intern at ClassLink. Passionate about building
          scalable, cloud-based applications and elegant user experiences.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        >
          <a
            href="/Chris-Marquez-Resume.pdf"
            download="Chris-Marquez-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl motion-safe:hover:scale-105"
          >
            <FaDownload className="transition-transform duration-200 ease-in-out group-hover:translate-y-0.5" />
            My Resume
          </a>

          <a
            href="https://github.com/chrismarquezz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-300 motion-safe:hover:scale-110"
          >
            <FaGithub size="32" />
          </a>
          <a
            href="https://www.linkedin.com/in/chris--marquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 motion-safe:hover:scale-110"
          >
            <FaLinkedin size="32" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown
            className="text-gray-400 dark:text-gray-500"
            size="24"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
