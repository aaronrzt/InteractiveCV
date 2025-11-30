// src/terminal/commands.ts

import { experience, education, skills, contactInfo, leadershipActivities, projects } from "./data/cvEntries";
import {
  formatExperience,
  formatEducation,
  formatContactInfo,
  formatLeadership,
  formatProjects,
  formatSkills
} from "./format";

export type CommandHandler = () => string;

export const COMMANDS = [
  "clear",
  "contact",
  "education",
  "experience",
  "help",
  "leadership",
  "projects",
  "skills"
];

export const commands: Record<string, CommandHandler> = {
  help: () =>
    `
Available commands:
  clear          Clear the terminal
  contact        Show contact information
  education      Show education history
  experience     Show professional experience
  help           Show this help message
  leadership     Show leadership activities
  projects       Show project history
  skills         Show skill categories
`,
  contact: () => formatContactInfo(contactInfo),
  experience: () => formatExperience(experience),
  education: () => formatEducation(education),
  leadership: () => formatLeadership(leadershipActivities),
  projects: () => formatProjects(projects),
  skills: () => formatSkills(skills)
};

export function runCommand(cmd: string): string {
  const trimmed = cmd.trim();

  if (trimmed === "clear") {
    return "__CLEAR__"; // special marker
  }

  if (commands[trimmed]) {
    return commands[trimmed]();
  }

  return `Command not found: ${trimmed}\nUse "help" to see a list of all available commands.`;
}
