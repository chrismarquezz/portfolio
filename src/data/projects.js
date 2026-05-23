import stardewdleImage from "../images/stardewdle.jpeg";
import chesslabImage from "../images/chesslab.png";
import craftmateImage from "../images/craftmate.png";
import repopilotImage from "../images/repopilot.png";

export const projectsData = [
  {
    id: "stardewdle",
    title: "Stardewdle",
    description:
      "A Wordle-style guessing game with over 300k+ plays based on crops from the popular game Stardew Valley.",
    longDescription: "",
    liveUrl: "https://stardewdle.com",
    repoUrl: "https://github.com/chrismarquezz/Stardewdle",
    image: stardewdleImage,
    gif: null,
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
    id: "repopilot",
    title: "RepoPilot",
    description:
      "A RAG-powered codebase Q&A tool enabling natural language search across 19 supported file types using vector embeddings and streamed LLM responses via the Claude API.",
    longDescription: "",
    liveUrl: "",
    repoUrl: "https://github.com/chrismarquezz/RepoPilot",
    image: repopilotImage,
    gif: null,
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "ChromaDB",
      "OpenAI Embeddings",
      "Claude API",
      "Docker",
      "Pytest",
    ],
  },
  {
    id: "chesslab",
    title: "ChessLab",
    description:
      "A full-stack chess analysis platform with real-time Stockfish engine integration that analyzes Chess.com games, generates personalized puzzles, and provides opening book exploration.",
    longDescription: "",
    liveUrl: "https://chesslab-tau.vercel.app/",
    repoUrl: "https://github.com/chrismarquezz/chesslab",
    image: chesslabImage,
    gif: null,
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
  {
    id: "craftmate",
    title: "CraftMate",
    description:
      "A fully playable chess game inside vanilla Minecraft, powered by a Python backend with Stockfish AI, RCON commands, and real-time chat-based move input.",
    longDescription: "",
    liveUrl: null,
    repoUrl: "https://github.com/chrismarquezz/CraftMate",
    image: craftmateImage,
    gif: null,
    technologies: [
      "Python",
      "python-chess",
      "Stockfish",
      "mcrcon",
      "opensimplex",
      "Minecraft Java Edition",
    ],
  },
];
