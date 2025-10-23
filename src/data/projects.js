import stardewdleImage from "../images/stardewdle.jpeg";
import classlinkImage from "../images/classlink-integration-demonstrator.png";
import voicechessImage from "../images/voice-chess.jpg";
import comingSoonImage from "../images/coming-soon.png";

export const projectsData = [
  {
    id: "stardewdle",
    title: "Stardewdle",
    description:
      "A Wordle-inspired crop guessing game based on the popular game Stardew Valley.",
    liveUrl: "https://stardewdle.com",
    repoUrl: "https://github.com/chrismarquezz/Stardewdle",
    image: stardewdleImage,
    technologies: ["React", "JavaScript", "Tailwind CSS", "AWS"],
  },
  {
    id: "voicechess",
    title: "VoiceChess",
    description:
      "An iOS chess application that enables completely hands-free gameplay using natural voice commands, powered by Apple's speech recognition frameworks.",
    liveUrl: null,
    repoUrl: "https://github.com/chrismarquezz/voice-chess",
    image: voicechessImage,
    technologies: ["Swift", "SwiftUI", "AVFoundation", "SFSpeechRecognizer"],
  },
  {
    id: "classlink-integration-demonstrator",
    title: "Integration Demonstrator",
    description:
      "A project to demonstrate a complete ClassLink integration, with a backend to sync roster data and user authentication via Single Sign-On (SSO)",
    liveUrl: null,
    repoUrl: "https://github.com/chrismarquezz/ClassLink-Internship-Project",
    image: classlinkImage,
    technologies: ["Vite", "DynamoDB", "Lambda", "API Gateway", "OAuth2/OIDC"],
  },
];
