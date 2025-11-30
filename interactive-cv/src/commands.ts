// src/terminal/commands.ts

import { experience, education, skills } from "./data/cvEntries";
import {
  formatExperience,
  formatEducation,
  formatSkills
} from "./format";

export type CommandHandler = () => string;

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

  experience: () => formatExperience(experience),
  education: () => formatEducation(education),
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

  return `Command not found: ${trimmed}\Use "help" to see a list of all available commands.`;
}
