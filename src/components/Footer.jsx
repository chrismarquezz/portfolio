import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Tooltip from "./Tooltip";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-10 px-4 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <Tooltip label="Email">
            <a
              href="mailto:chrismarquez00@icloud.com"
              aria-label="Email"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaEnvelope size="22" />
            </a>
          </Tooltip>
          <Tooltip label="GitHub">
            <a
              href="https://github.com/chrismarquezz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <FaGithub size="22" />
            </a>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <a
              href="https://www.linkedin.com/in/chris--marquez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin size="22" />
            </a>
          </Tooltip>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © 2026 Chris Marquez
        </p>
      </div>
    </footer>
  );
}
