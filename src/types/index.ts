// Portfolio data types and interfaces

export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Cloud/DevOps' | 'Tools';
  level: number; // 1-5 scale
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  stack: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'AI/ML' | 'Web Development' | 'Other';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  url?: string;
  link?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}
