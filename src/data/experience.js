import VillanovaLogo from '../images/villanova-logo.png';
import ClassLinkLogo from '../images/classlink-logo.png';

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "ClassLink",
    date: "June 2025 - August 2025",
    description: [
      "Produced a lightweight application integrating with ClassLink's ecosystem, including ingesting and processing roster data for millions of student and teacher accounts using ClassLink's APIs and 2+ services from AWS",    
      "Implemented SSO authentication with OAuth2/OIDC for secure user login, allowing users to log in with their ClassLink credentials",
      "Composed 5+ pages of API reference documentation, step-by-step setup guides, code samples, and security best practices to speed up future partner integrations",
    ],
    type: "Work",
    institutionLogo: ClassLinkLogo, 
  },
  {
    role: "Computer Science Peer Tutor",
    company: "The Learners' Studio at Villanova University",
    date: "January 2025 - Present",
    description: [
      "Provide 1-on-1 tutoring sessions to 40+ undergraduate computer science students per semester, covering 5+ distinct computer science courses",
      "Conduct 4+ hours of tutoring sessions weekly, helping students refine their understanding of data structures and algorithms in programming languages such as Python and Java",
    ],
    type: "Work",
    institutionLogo: null,
  },
  {
    role: "Bachelor of Science in Computer Science, Minor in Cybersecurity",
    company: "Villanova University",
    date: "August 2022 - May 2026 (Expected)",
    description: [
      "Relevant Coursework: Software Engineering, Data Structures & Algorithms, Principles of Database Systems",
      "Focuse on developing a strong foundation in computer science principles and practical software development",
    ],
    type: "Education",
    institutionLogo: VillanovaLogo,
  },
];
