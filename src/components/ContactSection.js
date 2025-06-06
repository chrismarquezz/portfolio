import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
<section id="contact" className="py-20 md:py-28 px-4 bg-gray-50 dark:bg-slate-800">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          I'm currently seeking full-time opportunities and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out!
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <a
            href="mailto:cmarquez@villanova.edu"
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-bold rounded-lg text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl motion-safe:hover:scale-105"
          >
            <FaEnvelope />
            Email
          </a>
          
          <a
            href="https://github.com/chrismarquezz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-bold rounded-lg text-gray-700 dark:text-gray-300 border-2 border-gray-400 dark:border-gray-500 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white dark:hover:text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl motion-safe:hover:scale-105"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chris--marquez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-bold rounded-lg text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl motion-safe:hover:scale-105"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>
      </motion.div>
    </section>
  );
}