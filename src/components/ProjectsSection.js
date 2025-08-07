import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-white dark:bg-slate-900">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>
      {projectsData.length > 0 ? (
        <motion.div
          // === THE CHANGE IS ON THIS LINE ===
          // Switched from 'grid' to 'flex' for better centering
          className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">No projects to display at the moment. Check back soon!</p>
      )}
    </section>
  );
}
