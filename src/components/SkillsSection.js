import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { certificationsData } from '../data/certifications';
import { FaArrowRight } from 'react-icons/fa';
import GitHubIcon from '../components/GitHubIcon';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection({ darkMode }) {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              // 1. THIS IS THE HOVER EFFECT YOU LIKED
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-shadow duration-300 ease-in-out hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b-2 border-blue-500 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-4">
                    <span className="flex-shrink-0">
                      {/* 2. THIS IS THE DARK MODE LOGIC FOR GITHUB */}
                      {skill.name === 'GitHub' ? <GitHubIcon darkMode={darkMode} /> : skill.icon}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-24 text-center">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Licenses & Certifications
          </motion.h3>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                // 3. THE CERTIFICATION CARD NOW HAS THE IDENTICAL HOVER EFFECT
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-left flex flex-col w-full max-w-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-16 h-16 object-contain flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {cert.date}
                    </p>
                  </div>
                </div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-auto pt-4 self-start"
                >
                  Verify Credential <FaArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
