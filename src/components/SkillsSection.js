import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

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

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-shadow duration-300 ease-in-out hover:shadow-lg"
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
                    <span className="flex-shrink-0">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}