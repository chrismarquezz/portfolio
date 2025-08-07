import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Experience & Education
        </motion.h2>

        <motion.div
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 md:gap-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative flex flex-col items-center flex-shrink-0 w-12">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center ring-4 ring-white dark:ring-slate-800 z-10">
                  {item.institutionLogo ? (
                    <img src={item.institutionLogo} alt={`${item.company} logo`} className="w-7 h-7 object-contain" />
                  ) : (
                    item.type === 'Work' 
                      ? <FaBriefcase className="w-5 h-5 text-blue-800 dark:text-blue-800" /> 
                      : <FaGraduationCap className="w-5 h-5 text-blue-800 dark:text-blue-300" />
                  )}
                </div>
                {index < experienceData.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-slate-700"></div>
                )}
              </div>

              <div className={index === experienceData.length - 1 ? 'pt-1' : 'pt-1 pb-12'}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-blue-600 dark:text-blue-500 text-base font-medium mb-1">
                  {item.company}
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {item.date}
                </time>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}