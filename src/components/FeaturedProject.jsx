import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function FeaturedProject({ project, index, onClick }) {
  const imageLeft = index % 2 === 0;
  const displayImage = project.gif || project.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex flex-col ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-center`}
    >
      {/* Image — always first in DOM so it appears on top when stacked on mobile */}
      <div className="w-full md:w-[58%] shrink-0">
        <button
          onClick={onClick}
          className="block w-full group relative rounded-lg overflow-hidden shadow-lg focus:outline-none"
          aria-label={`Open ${project.title} details`}
        >
          {displayImage ? (
            <>
              <img
                src={displayImage}
                alt={`Screenshot of ${project.title}`}
                className="w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full aspect-video bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center">
              <span className="text-slate-400 text-sm">
                screenshot coming soon
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Text panel — shifts toward the image on desktop to create overlap */}
      <div
        className={`w-full md:w-[46%] z-10 flex flex-col mt-6 md:mt-0 ${
          imageLeft ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          Featured Project
        </p>

        <h3
          className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          onClick={onClick}
        >
          {project.title}
        </h3>

        {/* Description panel — only this shifts toward the image edge */}
        <div
          className={`w-full bg-gray-100 dark:bg-slate-700 rounded-lg shadow-lg p-5 mb-5 ${
            imageLeft ? "md:-translate-x-8" : "md:translate-x-8"
          }`}
        >
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </div>

        {/* Tech stack — plain monospace text, no pills */}
        {project.technologies?.length > 0 && (
          <ul
            className={`flex flex-wrap gap-x-4 gap-y-1 mb-5 ${
              imageLeft ? "justify-end" : "justify-start"
            }`}
          >
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="text-xs text-gray-500 dark:text-gray-400"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* GitHub and external link icons */}
        <div
          className={`flex gap-4 ${imageLeft ? "justify-end" : "justify-start"}`}
        >
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={`${project.title} live demo`}
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
