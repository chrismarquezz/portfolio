import stardewdleImage from '../images/stardewdle.jpeg';
import classlinkImage from '../images/classlink-integration-demonstrator.png';
import comingSoonImage from '../images/coming-soon.png';

export const projectsData = [
  {
    id: "stardewdle",
    title: "Stardewdle",
    description: "A Wordle-inspired crop guessing game based on the popular game Stardew Valley.",
    liveUrl: "https://stardewdle.com",
    repoUrl: "https://github.com/chrismarquezz/Stardewdle",
    image: stardewdleImage,
    technologies: ["React", "JavaScript", "Tailwind CSS", "AWS"]
  },
  {
    id: "classlink-integration-demonstrator",
    title: "ClassLink Integration Demonstrator",
    description: "A project to demonstrate a complete ClassLink integration, with a backend to sync roster data and user authentication via Single Sign-On (SSO)",
    liveUrl: "",
    repoUrl: "https://github.com/chrismarquezz/ClassLink-Internship-Project",
    image: classlinkImage,
    technologies: ["Vite", "DynamoDB", "Lambda", "API Gateway","OAuth2/OIDC"]
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    description: "A placeholder project for future development.",
    liveUrl: "",
    repoUrl: "",
    image: comingSoonImage,
    technologies: []
  }
];