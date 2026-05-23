import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 bg-gray-50 dark:bg-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16 md:mb-20 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        {projectsData.length > 0 ? (
          <div className="flex flex-col gap-24 md:gap-32">
            {projectsData.map((project, index) => (
              <FeaturedProject
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">
            No projects to display at the moment. Please check back later!
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
