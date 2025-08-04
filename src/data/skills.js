import { FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSwift, FaGitAlt, FaGithub, FaFigma, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPostman, SiAmazondynamodb, SiVercel, SiVite} from 'react-icons/si';
import { DiAws } from 'react-icons/di';


export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <FaPython size="32" color="#3776AB" /> },
      { name: "Java", icon: <FaJava size="32" color="#f89820" /> },
      { name: "JavaScript", icon: <SiJavascript size="32" color="#F7DF1E" /> },
      { name: "Swift", icon: <FaSwift size="32" color="#F05138" /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact size="32" color="#61DAFB" /> },
      { name: "Vite", icon: <SiVite size="32" color="#000000" /> },
      { name: "HTML5", icon: <FaHtml5 size="32" color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size="32" color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size="32" color="#06B6D4" /> },
      { name: "Figma", icon: <FaFigma size="32" color="purple" /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size="32" color="#339933" /> },
      { name: "DynamoDB", icon: <SiAmazondynamodb size="32" color="#4D5D6E" /> },
      { name: "Beautiful Soup", icon: <FaCode size="32" color="#3776AB" /> },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "AWS", icon: <DiAws size="32" color="#FF9900" /> },
      { name: "Postman", icon: <SiPostman size="32" color="#FF6C37" /> },
      { name: "Vercel", icon: <SiVercel size="32" color="#000000" /> },
      { name: "Git", icon: <FaGitAlt size="32" color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub size="32" color="black"/> }, 
    ],
  },
];