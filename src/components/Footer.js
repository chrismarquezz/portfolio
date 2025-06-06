import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
   { 
     icon: FaEnvelope, 
     href: 'mailto:cmarquez@villanova.edu', 
     label: 'Email',
     hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
   },
   { 
     icon: FaGithub, 
     href: 'https://github.com/chrismarquezz', 
     label: 'GitHub',
     hoverColor: 'hover:text-black dark:hover:text-white' 
   },
   { 
     icon: FaLinkedin, 
     href: 'https://www.linkedin.com/in/chris--marquez/', 
     label: 'LinkedIn',
     hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
   },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="text-center py-10 px-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-slate-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex justify-center space-x-8 mb-6">
        {socialLinks.map(social => (
          <a 
            key={social.label} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={social.label}
            className={`text-gray-500 transition-all duration-300 motion-safe:hover:scale-110 ${social.hoverColor}`}
          >
            <social.icon size="28" />
          </a>
        ))}
      </div>
      <p>
        Made by Chris Marquez
      </p>
      <p className="mt-1">&copy; {currentYear} Chris Marquez. All rights reserved.</p>
    </motion.footer>
  );
}