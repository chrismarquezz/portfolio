import VillanovaLogo from '../images/villanova-logo.png';
import ClassLinkLogo from '../images/classlink-logo.png';

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "ClassLink",
    date: "June 2025 - Present",
    description: [
      "Architecting a system to ingest and process roster data for millions of student and teacher accounts using RESTful APIs, and implementing a secure SSO login flow with OAuth2/OIDC",    
      "Building a responsive and intuitive user interface from the ground up with React and Tailwind CSS, all supported by a scalable AWS-based backend",
      "Creating comprehensive API reference documentation and setup guides to streamline future partner integrations and ensure the project's long-term success",
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
      "Focusing on developing a strong foundation in computer science principles and practical software development",
    ],
    type: "Education",
    institutionLogo: VillanovaLogo,
  },
];
