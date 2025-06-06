import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg-slate-800 flex flex-col group transition-shadow duration-300 ease-in-out hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {project.image && (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-100"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
             <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-300"
          >
            <FaExternalLinkAlt size="16" />
            View Live
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-slate-700 transition-colors duration-300"
          >
            <FaGithub size="18" />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}