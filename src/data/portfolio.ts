/**
 * Portfolio data extracted from original site
 * This centralizes all professional content for easy updates
 */

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  achievements?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  icon?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  doi: string;
  published: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "StartGuides",
    location: "California, Remote",
    startDate: "Dec 2025",
    endDate: "Present",
    isCurrent: true,
  },
  {
    title: "Software Engineer",
    company: "Genesis Healthcare",
    location: "California, Remote",
    startDate: "Sep 2024",
    endDate: "Dec 2025",
    achievements: [
      "Optimized ETL pipeline processing 21M+ rows, reducing runtime by 88%",
      "Reduced infrastructure costs by 85% through strategic AWS migration",
      "Deployed enterprise chatbots powered by AWS Bedrock and Claude 3.5 Sonnet",
      "Automated cloud deployments saving 2 hours per release",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Genesis Healthcare",
    location: "Tokyo, Japan",
    startDate: "June 2024",
    endDate: "Sep 2024",
    achievements: [
      "Refactored 5,000+ lines of Ruby to Python, improving performance by 35%",
      "Co-authored published research paper on comparative genomic analysis",
      "Provisioned secure JupyterHub environment for 3 enterprise partners",
      "Enhanced security compliance with AWS IAM roles and MFA",
    ],
  },
  {
    title: "Student",
    company: "UC Irvine",
    location: "Irvine, CA",
    startDate: "Sep 2021",
    endDate: "June 2025",
    achievements: [
      "Bachelor of Science in Software Engineering",
      "Relevant coursework: Data Structures, OS, Networks, Software Design",
      "Programming languages: C++, Python, Java, JavaScript",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "PokeTrader Marketplace",
    description:
      "Full-stack Pokemon card trading platform built with React, Express.js, and MongoDB. Features user authentication, advanced filtering, personalized collections, and real-time updates with Google OAuth integration.",
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Google OAuth",
      "TailwindCSS",
      "AWS",
    ],
    link: "https://github.com/gavinnewin/pokeTrader",
    icon: "github",
  },
  {
    title: "TombVM - Virtual Machine Simulator",
    description:
      "Custom C++ virtual machine for binary analysis and malware inspection. Features 8-bit instruction set, register-based architecture, simulated memory, and comprehensive test harness for safe program execution.",
    technologies: [
      "C++",
      "CMake",
      "Binary Analysis",
      "Virtual Machine",
      "Assembly",
      "Python",
    ],
    link: "https://github.com/AntonyI1/tombVM",
    icon: "github",
  },
  {
    title: "Genomic Data Pipeline Optimization",
    description:
      "Professional project at Genesis Healthcare: Optimized multi-database ETL pipeline processing over 21 million rows, reducing runtime from 2 hours to 15 minutes (88% faster). Automated cloud-database deployments and AWS S3 backups with Python.",
    technologies: ["Python", "AWS", "ETL", "MongoDB", "PostgreSQL", "CI/CD"],
  },
];

export const publications: Publication[] = [
  {
    title:
      "An Exploratory Genomic and Transcriptomic Analysis Between Choloepus didactylus and Homo sapiens",
    authors:
      "Ariella Baran, Antony Ibrahim, Yuka Nakano, Hideyuki Aoshima, Takeshi Ozeki, Iri Sato-Baran, David D. Ordinario",
    journal: "Genes 2025, 16(3), 272",
    doi: "https://doi.org/10.3390/genes16030272",
    published: "February 25, 2025",
    description:
      "Co-authored research paper on comparative genomic analysis between sloths and humans, investigating genetic basis of unique traits like slow movement, low metabolism, and longevity.",
  },
];

export const featuredSkills = [
  "Python",
  "TypeScript",
  "AWS",
  "React",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "TensorFlow",
  "n8n",
];

export const allSkills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "C++",
  "Java",
  "SQL",
  "AWS",
  "React",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "n8n",
];
