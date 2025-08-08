import { ViteLogo, AWSLogo, FigmaLogo, DynamoDBLogo, JavaLogo, HTMLLogo, PythonLogo, ReactLogo, GitLogo, CSSLogo, JSLogo, SwiftLogo, NodeJSLogo, PostmanLogo, TailwindLogo } from '../data/icons';
import GitHubIcon from '../components/GitHubIcon';
import VercelIcon from '../components/VercelIcon';
import BeautifulSoupIcon from '../components/BeautifulSoupIcon';

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <PythonLogo className="w-8 h-8" /> },
      { name: "Java", icon: <JavaLogo className="w-8 h-8" /> },
      { name: "JavaScript", icon: <JSLogo className="w-8 h-8" /> },
      { name: "Swift", icon: <SwiftLogo className="w-8 h-8" /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: <ReactLogo className="w-8 h-8" /> },
      { name: "Vite", icon: <ViteLogo className="w-8 h-8" /> },
      { name: "HTML5", icon: <HTMLLogo className="w-8 h-8" /> },
      { name: "CSS3", icon: <CSSLogo className="w-8 h-8" /> },
      { name: "TailwindCSS", icon: <TailwindLogo className="w-8 h-8" /> },
      { name: "Figma", icon: <FigmaLogo className="w-8 h-8" /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <NodeJSLogo className="w-8 h-8" /> },
      { name: "DynamoDB", icon: <DynamoDBLogo className="w-8 h-8" /> },
      { name: "BeautifulSoup", icon: <BeautifulSoupIcon className="w-8 h-8" /> },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "AWS", icon: <AWSLogo className="w-8 h-8" /> },
      { name: "Postman", icon: <PostmanLogo className="w-8 h-8" /> },
      { name: "Vercel", icon: <VercelIcon className="w-8 h-8" /> },
      { name: "Git", icon: <GitLogo className="w-8 h-8" /> },
      { name: "GitHub", icon: <GitHubIcon className="w-8 h-8" /> },
    ],
  },
];