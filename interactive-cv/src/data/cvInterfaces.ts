export interface ContactInfo {
  phoneNo: string;
  email: string;
  websites: string[];
}
export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  header: string;
  details: string[];
}

export interface ProjectEntry {
  company: string;
  project: string;
  period: string;
  header: string;
  details: string[];
}

export interface LeadershipEntry {
  company: string;
  activity: string;
  period: string;
  details: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
