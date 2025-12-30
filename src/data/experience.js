import VillanovaLogo from "../images/villanova-logo.png";
import ClassLinkLogo from "../images/classlink-logo.png";

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "ClassLink",
    date: "June 2025 – August 2025",
    description: [
      "- Reduced partner integration time by 50% by processing 5M+ user records across 3,000+ school districts through distributed AWS data pipeline (Lambda, DynamoDB, Secrets Manager)",
      "- Standardized secure login flows across AWS infrastructure for 10+ partner applications by implementing OAuth2/OIDC SSO authentication with industry best practices",
      "- Decreased engineering support requests by 60% and accelerated onboarding by enabling 5+ partner teams to integrate independently through comprehensive API documentation",
    ],
    type: "Work",
    institutionLogo: ClassLinkLogo,
  },
  {
    role: "Co-Founder, Co-President",
    company: "Villanova Software Engineers",
    date: "October 2024 – Present",
    description: [
      "- Established engineering organization delivering full-stack applications for startup clients with 20+ members by co-founding organization, managing cross-functional teams, and establishing development workflows",
      "- Coordinating production release of web application supporting 1000+ users by leading React/Node.js/PostgreSQL development, coordinating Agile sprints, and guiding architecture decisions",
      "- Accelerated team onboarding for 10+ junior developers by mentoring through code reviews and pair programming, introducing Git workflow, debugging practices, and frontend patterns",
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
