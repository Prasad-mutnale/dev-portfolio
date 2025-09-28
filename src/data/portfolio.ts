import { PersonalInfo, Skill, Experience, Project, Education, Certificate, SocialLink } from '../types';

// Personal information
export const personalInfo: PersonalInfo = {
  name: "Prasad R Mutnale",
  firstName: "Prasad",
  middleName: "R",
  lastName: "Mutnale",
  title: "Software Engineer",
  phone: "+91 7019943781",
  email: "mutnaleprasad21@gmail.com",
  linkedin: "https://linkedin.com/in/prasad-mutnale/",
  github: "https://github.com/Prasad-mutnale/",
  summary: "Currently working as a Software Engineer at Sprouts AI, focusing on backend API development, database optimization, and fixing production bugs in the Sprouts ATS platform."
};

// Technical skills
export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages", level: 5, icon: "SiJavascript" },
  { name: "TypeScript", category: "Languages", level: 5, icon: "SiTypescript" },
  { name: "Java", category: "Languages", level: 4, icon: "SiJava" },
  { name: "C++", category: "Languages", level: 3, icon: "SiCplusplus" },
  
  // Frameworks
  { name: "Node.js", category: "Frameworks", level: 5, icon: "SiNodedotjs" },
  { name: "Express", category: "Frameworks", level: 5, icon: "SiExpress" },
  { name: "NestJS", category: "Frameworks", level: 4, icon: "SiNestjs" },
  { name: "React", category: "Frameworks", level: 5, icon: "SiReact" },
  { name: "Prisma", category: "Frameworks", level: 4, icon: "SiPrisma" },
  
  // Databases
  { name: "MongoDB", category: "Databases", level: 5, icon: "SiMongodb" },
  { name: "MySQL", category: "Databases", level: 4, icon: "SiMysql" },
  { name: "PostgreSQL", category: "Databases", level: 4, icon: "SiPostgresql" },
  { name: "Redis", category: "Databases", level: 4, icon: "SiRedis" },
  
  // Cloud/DevOps
  { name: "AWS", category: "Cloud/DevOps", level: 4, icon: "SiAmazonaws" },
  { name: "Docker", category: "Cloud/DevOps", level: 4, icon: "SiDocker" },
  { name: "RabbitMQ", category: "Cloud/DevOps", level: 3, icon: "SiRabbitmq" },
  { name: "Elasticsearch", category: "Cloud/DevOps", level: 3, icon: "SiElasticsearch" },
  { name: "Git", category: "Cloud/DevOps", level: 5, icon: "SiGit" },
  { name: "CI/CD", category: "Cloud/DevOps", level: 4, icon: "SiGithubactions" },
  
  // Tools
  { name: "Postman", category: "Tools", level: 5, icon: "SiPostman" },
  { name: "VS Code", category: "Tools", level: 5, icon: "SiVisualstudiocode" },
  { name: "Cursor", category: "Tools", level: 4, icon: "SiCursor" },
  { name: "Jira", category: "Tools", level: 4, icon: "SiJira" },
];

// Work experience
export const experiences: Experience[] = [
  {
    id: "sprouts-ai-engineer",
    title: "Software Engineer",
    company: "SproutsAI",
    location: "California, USA (Remote — Bangalore, India)",
    startDate: "Feb 2025",
    endDate: "Present",
    current: true,
    description: [
      "Led development of the Organization Module in Sprouts ATS, improving department configuration efficiency by 40%",
      "Built scalable RESTful APIs using Node.js and Express, enhancing system performance by 25%",
      "Developed dynamic React components, reducing user onboarding time by 30%",
      "Collaborated with cross-functional teams to ensure 100% on-time delivery in Agile sprints"
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    id: "sprouts-ai-intern",
    title: "Software Engineer Intern",
    company: "SproutsAI",
    location: "California, USA (Remote)",
    startDate: "Sep 2024",
    endDate: "Feb 2025",
    current: false,
    description: [
      "Created LLM-based Slack bot to automate recruitment tasks, reducing manual efforts by 60%",
      "Designed backend systems to manage workflows with Gemini AI and Vercel SDK",
      "Built tools for real-time pipeline tracking with persistent conversation memory"
    ],
    stack: ["TypeScript", "Node.js", "MongoDB", "Slack SDK", "Vercel SDK", "Gemini AI"]
  },
  {
    id: "abhiyantrik-intern",
    title: "Backend Developer Intern",
    company: "Abhiyantrik Solutions",
    location: "Hubli, India",
    startDate: "Jan 2024",
    endDate: "May 2024",
    current: false,
    description: [
      "Spearheaded backend development and API integrations, improving performance by 20%",
      "Optimized MQTT communication and streamlined AWS deployments, cutting deployment time by 30%",
      "Accelerated CI/CD pipelines, reducing dev cycles by 25%"
    ],
    stack: ["TypeScript", "Node.js", "Express", "MySQL", "Redis", "AWS", "MQTT"]
  }
];

// Projects
export const projects: Project[] = [
  {
    id: "lung-cancer-detection",
    title: "Smart System for Lung Cancer Detection",
    description: "Built an image classifier with ResNet-50, achieving 90% accuracy on 1,400 CT scans.",
    longDescription: "Developed a comprehensive medical imaging solution using deep learning to detect lung cancer from CT scans. The system combines ResNet-50 architecture with a Django-React interface for seamless diagnostic experience.",
    image: "/lung-cancer-project.png",
    technologies: ["Django", "React", "ResNet-50", "Python", "TensorFlow"],
    githubUrl: "https://github.com/Prasad-mutnale/Lung-Cancer-Detection-Web-App",
    featured: true,
    category: "AI/ML"
  },
  {
    id: "yoga-pose-detection",
    title: "Video-Based Yoga Pose Detection",
    description: "Developed an 81%-precision LRCN model to detect yoga poses from video.",
    longDescription: "Created an advanced computer vision system using CNN + LSTM architecture for real-time yoga pose detection. The project was published in IEEE I2CT Conference and demonstrates expertise in video processing and deep learning.",
    image: "/yoga-pose.png",
    technologies: ["CNN", "LSTM", "Django", "Python", "OpenCV", "TensorFlow"],
    githubUrl: "https://github.com/Prasad-mutnale/Video-Based-Yoga-Pose-Detection",
    featured: true,
    category: "AI/ML"
  },
  {
    id: "healthcare-admin",
    title: "Healthcare Facility Admin Portal",
    description: "Built full-stack system to manage student-doctor appointments, reducing manual workload by 40%.",
    longDescription: "Developed a comprehensive MERN stack application for healthcare facility management. The system automates doctor assignment and notification workflows, significantly improving operational efficiency.",
    image: "/health-care-dashboard.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Bootstrap"],
    githubUrl: "https://github.com/Prasad-mutnale/KLE-Tech-Healthcare-Facility-Administration",
    featured: true,
    category: "Web Development"
  },
  {
    id: "car-decor-simulation",
    title: "Car Decor Simulation",
    description: "Created modular C++ app using Factory and Singleton patterns for car customization.",
    longDescription: "Built a desktop application demonstrating object-oriented programming principles and design patterns. The application allows users to customize car decorations with a modular, extensible architecture.",
    image: "/car-decor-application.png",
    technologies: ["C++", "Design Patterns", "Factory Pattern", "Singleton Pattern"],
    githubUrl: "https://github.com/Prasad-mutnale/Car-Decor-Application",
    featured: false,
    category: "Other"
  }
];

// Education
export const education: Education = {
  degree: "B.E. Computer Science and Engineering",
  institution: "KLE Technological University",
  year: "2024",
  cgpa: "8.40"
};

// Certificates
// Certificates
export const certificates: Certificate[] = [
  {
    name: "Node.js (Basic)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/f07401c589ba"
  },
  {
    name: "Backend Development & API",
    issuer: "FreeCodeCamp",
    year: "2024",
    link: "https://www.freecodecamp.org/certification/Prasad-Mutnale/back-end-development-and-apis"
  },
  {
    name: "JavaScript",
    issuer: "Codedamn",
    year: "2024",
    link: "https://codedamn.com/certificate/verify/15bb634f4c6db35ce6f3a20b1beda6d79c2e6469"
  },
  {
    name: "AWS Cloud 101",
    issuer: "AWS Educate",
    year: "2024",
    link: "https://www.credly.com/badges/feffaf7b-74aa-4844-98ee-f5dfa15deeac/public_url"
  }
];


// Social links
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "FaLinkedin",
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "FaGithub",
    color: "text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "FaEnvelope",
    color: "text-red-600 hover:text-red-700"
  },
  {
    name: "Phone",
    url: `tel:${personalInfo.phone}`,
    icon: "FaPhone",
    color: "text-green-600 hover:text-green-700"
  }
];

// Navigation items
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];
