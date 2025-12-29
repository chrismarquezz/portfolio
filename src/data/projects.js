import stardewdleImage from "../images/stardewdle.jpeg";
import chesslabImage from "../images/chesslab.png";

export const projectsData = [
  {
    id: "stardewdle",
    title: "Stardewdle",
    description:
      "A Wordle-style guessing game with over 100k+ plays based on crops from the popular game Stardew Valley.",
    liveUrl: "https://stardewdle.com",
    repoUrl: "https://github.com/chrismarquezz/Stardewdle",
    image: stardewdleImage,
    technologies: [
      "React",
      "JavaScript",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "Tailwind CSS",
    ],
  },
  {
    id: "chesslab",
    title: "ChessLab",
    description:
      "A full-stack chess analysis platform with real-time Stockfish engine integration that analyzes Chess.com games, generates personalized puzzles, and provides opening book exploration.",
    liveUrl: "https://chesslab-tau.vercel.app/",
    repoUrl: "https://github.com/chrismarquezz/chesslab",
    image: chesslabImage,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Docker",
      "Stockfish",
      "Tailwind CSS",
    ],
  },
];
