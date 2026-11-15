import { EducationItem, AchievementItem } from "@/types";

export const educationData: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Information and Communications Technology (ICT)",
  institution: "Pandit Deendayal Energy University (PDEU)",
  location: "Gandhinagar, Gujarat, India",
  period: "July 2023 – June 2027",
  coreCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / C++)",
    "Operating Systems & System Architecture",
    "Database Management Systems (DBMS & SQL)",
    "Computer Networks & Telecommunication",
    "Machine Learning & Artificial Intelligence",
    "Probability, Statistics & Linear Algebra",
    "Software Engineering & Web Technologies",
  ],
};

export const verifiedAchievements: AchievementItem[] = [
  {
    id: "buildathon-2025",
    title: "2nd Runner-Up – Tutedude Buildathon 2025",
    organizer: "TuteDude Private Limited",
    date: "2025",
    description:
      "Secured 2nd Runner-Up and a cash prize in a national 2-week product development sprint for 'Vakaalat' (the foundation for LawPrix), a LegalTech SaaS product built to solve opacity in legal matchmaking.",
    badge: "National Hackathon",
  },
  {
    id: "iot-deep-learning",
    title: "1st Rank – Industry Approach to IoT with Deep Learning Workshop",
    organizer: "Department of CSE, PDEU with IEEE Computer Society & GUJCOST",
    date: "2024",
    description:
      "Secured 1st Rank in an intensive one-week technical workshop jointly organized by PDEU, IEEE Computer Society Student Branch Chapter, and the Gujarat Council on Science and Technology (GUJCOST), covering IoT sensor data pipelines and deep learning models.",
    badge: "1st Rank Distinction",
  },
  {
    id: "nptel-elite",
    title: "NPTEL Elite Certification – Understanding Incubation & Entrepreneurship",
    organizer: "National Programme on Technology Enhanced Learning (NPTEL / IIT)",
    date: "2024",
    description:
      "Earned prestigious Elite Certification with a top 90/100 score in a rigorous 12-week national course focused on startup incubation frameworks, venture validation, and entrepreneurial finance.",
    badge: "Score: 90 / 100 (Elite)",
  },
];

export const workshopsAndTrainings = [
  {
    title: "AI Impact Summit – Delhi",
    organizer: "Ministry of Electronics and Information Technology (MeitY), Government of India",
    period: "February 2026",
    focus: "AI adoption frameworks, governance, ethics, and enterprise AI implementations across FinTech and public services.",
  },
  {
    title: "E-Summit '25",
    organizer: "E-Cell, IIT Bombay",
    period: "February 2025",
    focus: "Startup journeys, capital market venture financing, and product innovation across Asian tech ecosystems.",
  },
  {
    title: "Brain-Computer Interface Workshop",
    organizer: "IEEE, NFSU Gandhinagar, Ahmedabad University & MathWorks",
    period: "March 2025",
    focus: "Neuroscience data analysis, neural signal processing, and MATLAB algorithmic modeling.",
  },
  {
    title: "Image Processing Using Python Workshop",
    organizer: "Department of Mathematics & Department of Computer Engineering, PDEU",
    period: "March 2024",
    focus: "Mathematical matrices, image transformation algorithms, and programmatic computer vision with Python.",
  },
];
