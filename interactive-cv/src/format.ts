const cyan = "\x1b[36m";
const reset = "\x1b[0m";

export function formatSectionHeader(): string {
  return "\n";
}

export function formatExperience(entries: any[]): string
{
    let out = formatSectionHeader();

    for (const e of entries)
    {
        out += `${cyan}${e.period}${reset}   ${e.company}   ${e.role}\n`;
        for (const d of e.details)
        {
            out += `            • ${d}\n`;
        }
        out += "\n";
    }

    return out;
}

export function formatEducation(entries: any[]): string {
    let out = formatSectionHeader();

    for (const e of entries)
    {
        out += `${cyan}${e.period}${reset}   ${e.institution}   ${e.degree}\n`;
        for (const d of e.details)
        {
            out += `            • ${d}\n`;
        }
        out += "\n";
    }

    return out;
}

export function formatSkills(entries: any[]): string
{
  let out = formatSectionHeader();

    for (const block of entries)
    {
        out += `${cyan}${block.category}:${reset}\n`;
        out += `            ${block.skills.join(", ")}\n\n`;
    }

    return out;
}

export function formatProjects(entries: any[]): string {
  let out = formatSectionHeader();

  for (const e of entries) {
    out += `${cyan}${e.period}${reset}   ${e.company}   ${e.project}\n`;
    for (const d of e.details) {
      out += `            • ${d}\n`;
    }
    out += "\n";
  }

  return out;
}

export function formatLeadership(entries: any[]): string {
  let out = formatSectionHeader();

  for (const e of entries) {
    out += `${cyan}${e.period}${reset}   ${e.company}   ${e.activity}\n`;
    for (const d of e.details) {
      out += `            • ${d}\n`;
    }
    out += "\n";
  }

  return out;
}

export function formatContactInfo(info: any): string {
  let out = formatSectionHeader();

  out += `${cyan}Phone:${reset}   ${info.phoneNo}\n`;
  out += `${cyan}Email:${reset}   ${info.email}\n`;

  if (info.websites && info.websites.length > 0) {
    out += `${cyan}Websites:${reset}\n`;
    for (const w of info.websites) {
      out += `            • ${w}\n`;
    }
  }

  out += "\n";
  return out;
}