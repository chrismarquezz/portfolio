import {
  AWSLogo,
  HTMLLogo,
  PythonLogo,
  ReactLogo,
  CSSLogo,
  JSLogo,
  NodeJSLogo,
  PostmanLogo,
  TailwindLogo,
  TypeScriptLogo,
  JiraLogo,
  DatabaseLogo,
  CICDLogo,
  AgileLogo,
  ExpressLogo,
  OAuthLogo,
} from "../data/icons";
import GitHubIcon from "../components/GitHubIcon";
import VercelIcon from "../components/VercelIcon";

export const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", icon: <JSLogo className="w-8 h-8" /> },
      { name: "TypeScript", icon: <TypeScriptLogo className="w-8 h-8" /> },
      { name: "Python", icon: <PythonLogo className="w-8 h-8" /> },
      { name: "React", icon: <ReactLogo className="w-8 h-8" /> },
      { name: "Node.js", icon: <NodeJSLogo className="w-8 h-8" /> },
      { name: "Express", icon: <ExpressLogo className="w-8 h-8" /> },
      { name: "SQL/NoSQL", icon: <DatabaseLogo className="w-8 h-8" /> },
      { name: "REST APIs", icon: <NodeJSLogo className="w-8 h-8" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <AWSLogo className="w-8 h-8" /> },
      { name: "Git/GitHub", icon: <GitHubIcon className="w-8 h-8" /> },
      { name: "CI/CD", icon: <CICDLogo className="w-8 h-8" /> },
      { name: "OAuth2/OIDC", icon: <OAuthLogo className="w-8 h-8" /> },
      { name: "Agile/Scrum", icon: <AgileLogo className="w-8 h-8" /> },
      { name: "Jira", icon: <JiraLogo className="w-8 h-8" /> },
      { name: "Postman", icon: <PostmanLogo className="w-8 h-8" /> },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "HTML", icon: <HTMLLogo className="w-8 h-8" /> },
      { name: "CSS3", icon: <CSSLogo className="w-8 h-8" /> },
      { name: "TailwindCSS", icon: <TailwindLogo className="w-8 h-8" /> },
      { name: "Vercel", icon: <VercelIcon className="w-8 h-8" /> },
    ],
  },
];
