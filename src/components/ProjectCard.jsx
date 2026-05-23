import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      onClick={onClick}
      className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-slate-700 flex flex-col cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      {project.image && (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-52 object-cover"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
