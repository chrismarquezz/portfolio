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
    role: "Computer Science Peer Tutor",
    company: "The Learners' Studio at Villanova University",
    date: "January 2025 – Present",
    description: [
      "- Tutored 100+ students across 200+ sessions in data structures, algorithms, and programming (Python/Java), improving problem-solving skills and academic performance",
      "- Nominated for Peer Tutor of the Year from pool of 100+ tutors, recognized for teaching excellence and mentorship impact across multiple CS disciplines",
    ],
    type: "Work",
    institutionLogo: null,
  },
  {
    role: "Competitive Programmer",
    company: "Villanova Programming Team",
    date: "August 2022 – Present",
    description: [
      "- Selected by faculty to represent Villanova at 2025 ICPC regional (90+ teams), solving algorithmic problems in Python using data structures and optimization techniques",
      "- Solved 300+ LeetCode/Kattis challenges through consistent practice, strengthening expertise in algorithms, complexity analysis, and competitive programming techniques",
    ],
    type: "Work",
    institutionLogo: null,
  },

  {
    role: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    company: "Villanova University",
    date: "August 2022 – May 2026 (Expected)",
    description: [
      "- Pursuing a B.S. in Computer Science with a Cybersecurity minor, maintaining a 3.75 GPA and Dean’s List honors for six consecutive semesters.",
    ],
    type: "Education",
    institutionLogo: VillanovaLogo,
  },
];
