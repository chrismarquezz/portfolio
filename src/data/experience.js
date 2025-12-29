import VillanovaLogo from "../images/villanova-logo.png";
import ClassLinkLogo from "../images/classlink-logo.png";

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "ClassLink",
    date: "June 2025 – August 2025",
    description: [
      "- Built distributed data pipeline processing 5M+ user records across 3,000+ school districts using AWS (Lambda, DynamoDB, Secrets Manager), reducing partner integration time by 50%",
      "- Implemented OAuth2/OIDC SSO authentication for 10+ partner applications, standardizing secure login flows across AWS infrastructure with industry best practices",
      "- Created API documentation enabling 5+ partner teams to integrate independently, reducing engineering support requests by 60% and accelerating onboarding",
    ],
    type: "Work",
    institutionLogo: ClassLinkLogo,
  },
  {
    role: "Co-Founder, Co-President",
    company: "Villanova Software Engineers",
    date: "October 2024 – Present",
    description: [
      "- Co-founded 20+ member engineering organization delivering full-stack applications for startup clients, managing cross-functional teams and establishing development workflows",
      "- Leading development of React/Node.js/PostgreSQL web application supporting 1000+ users, coordinating Agile sprints and guiding architecture decisions toward production release",
      "- Mentored 10+ junior developers through code reviews and pair programming, introducing Git workflow, debugging practices, and frontend patterns to accelerate team onboarding",
    ],
    type: "Work",
    institutionLogo: null,
  },
  {
    role: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    company: "Villanova University",
    date: "August 2022 – May 2026 (Expected)",
    description: [
      "- Pursuing a B.S. in Computer Science with a Cybersecurity minor, maintaining a 3.75 GPA and Dean’s List honors for six consecutive semesters",
    ],
    type: "Education",
    institutionLogo: VillanovaLogo,
  },
];
