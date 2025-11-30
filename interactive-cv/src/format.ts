const yellow = "\x1b[33m";
const cyan = "\x1b[36m";
const reset = "\x1b[0m";

export function formatSectionHeader(title: string): string {
  return `\n${yellow}=== ${title.toUpperCase()} ===${reset}\n`;
}

export function formatExperience(entries: any[]): string {
  let out = formatSectionHeader("Experience");

  for (const e of entries) {
    out += `${cyan}${e.period}${reset}   ${e.company}   ${e.role}\n`;
    for (const d of e.details) {
      out += `            • ${d}\n`;
    }
    out += "\n";
  }

  return out;
}

export function formatEducation(entries: any[]): string {
  let out = formatSectionHeader("Education");

  for (const e of entries) {
    out += `${cyan}${e.period}${reset}   ${e.institution}   ${e.degree}\n`;
    for (const d of e.details) {
      out += `            • ${d}\n`;
    }
    out += "\n";
  }

  return out;
}

export function formatSkills(entries: any[]): string {
  let out = formatSectionHeader("Skills");

  for (const block of entries) {
    out += `${cyan}${block.category}:${reset}\n`;
    out += `            ${block.skills.join(", ")}\n\n`;
  }

  return out;
}
