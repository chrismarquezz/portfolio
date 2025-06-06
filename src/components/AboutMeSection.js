import { motion } from 'framer-motion';
import { FaChessKnight } from 'react-icons/fa';
import { IoBarbellSharp } from 'react-icons/io5';

export default function AboutMeSection() {
  return (
<section id="about" className="py-20 md:py-28 px-4 bg-gray-50 dark:bg-slate-800">      
      <div className="flex items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <IoBarbellSharp size="100" className="text-gray-300 dark:text-gray-600" />
        </motion.div>

        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              I'm a rising senior at Villanova University pursuing a B.S. in Computer Science with a minor in Cybersecurity, expecting to graduate in May 2026. From my first Redstone logic gates in Minecraft to architecting full-stack applications today, my passion has always been turning complex problems into logical components and crafting sleek, modern user interfaces. 
              </p>
            <p>
              As a Software Engineering Intern at ClassLink, I'm currently a contributing member of a team building a full-stack application from the ground up. In my role, I'm responsible for developing frontend features with React, creating backend services using Node.js and AWS, and working within our AWS cloud environment to reach the desired goals for the project.
            </p>
            <p>
              Outside of my work, I'm dedicated to fitness through weightlifting and running. I also enjoy the strategic challenge of chess, which I find is a great way to sharpen my problem-solving skills.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <FaChessKnight size="100" className="text-gray-300 dark:text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
}