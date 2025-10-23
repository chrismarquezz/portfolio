import VillanovaLogo from "../images/villanova-logo.png";
import ClassLinkLogo from "../images/classlink-logo.png";

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "ClassLink",
    date: "June 2025 – August 2025",
    description: [
      "Engineered a distributed, networked data-ingestion system built on client/server architecture to process and synchronize roster data for over 5 million student and teacher accounts using ClassLink APIs and AWS services (Lambda, DynamoDB, Secrets Manager).",
      "Implemented secure OAuth2/OIDC SSO authentication for 10+ partner applications, reducing setup time by 50% and standardizing authentication flows across AWS infrastructure.",
      "Authored detailed API documentation and integration guides adopted by multiple partner teams to improve integration accuracy, reduce support requests, and streamline future onboarding.",
    ],
    type: "Work",
    institutionLogo: ClassLinkLogo,
  },
  {
    role: "Computer Science Peer Tutor",
    company: "The Learners' Studio at Villanova University",
    date: "January 2025 – Present",
    description: [
      "Tutor 100+ undergraduate students each semester across courses in data structures, algorithms, databases, and software engineering, strengthening their problem-solving and programming proficiency in Python and Java.",
      "Conduct over 200 individualized sessions focused on debugging, algorithmic thinking, and project design, helping students improve exam and assignment performance by 20% on average.",
      "Recognized with a Peer Tutor of the Year nomination for exceptional teaching and mentorship supporting academic growth across the CS department.",
    ],
    type: "Work",
    institutionLogo: null,
  },
  {
    role: "Competitive Programmer",
    company: "Villanova Programming Team",
    date: "August 2022 – Present",
    description: [
      "Selected to represent Villanova University in the 2025 ICPC Regional Programming Contest, collaborating in a 3-member team to solve complex algorithmic challenges under timed conditions.",
      "Solved over 300 algorithmic problems on LeetCode and Kattis, strengthening proficiency in graph theory, dynamic programming, and complexity analysis.",
      "Regularly participate in competitive events and team training sessions to enhance collaboration, debugging efficiency, and real-time problem-solving skills.",
    ],
    type: "Work",
    institutionLogo: null,
  },

  {
    role: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    company: "Villanova University",
    date: "August 2022 – May 2026 (Expected)",
    description: [
      "Pursuing a B.S. in Computer Science with a Cybersecurity minor, maintaining a 3.75 GPA and Dean’s List honors for six consecutive semesters.",
      "Co-founded Villanova Software Engineers, a 20+ member student organization building full-stack applications for startups using React, Node.js, and SwiftUI.",
      "Selected to represent Villanova in the 2025 ICPC Regional Programming Contest and actively compete in algorithmic problem-solving challenges on LeetCode and Kattis.",
    ],
    type: "Education",
    institutionLogo: VillanovaLogo,
  },
];
