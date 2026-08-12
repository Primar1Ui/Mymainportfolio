import { getProjects } from './content/projects';
import { defaultLocale } from './i18n/config';

export type { Project } from './content/types';

export { getProjects, getHomepageProjects, HOMEPAGE_PROJECT_IDS } from './content/projects';

export const skills = {
  frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Supabase', level: 88 },
    { name: 'Firebase', level: 80 },
    { name: 'REST APIs', level: 90 },
  ],
  tools: [
    { name: 'Cursor', level: 90 },
    { name: 'GitHub', level: 92 },
    { name: 'n8n', level: 86 },
    { name: 'Zapier', level: 84 },
    { name: 'Airtable', level: 82 },
    { name: 'Groq AI', level: 80 },
    { name: 'Replit', level: 85 },
    { name: 'Vercel', level: 90 },
    { name: 'Rork AI', level: 82 },
  ],
  automation: [
    { name: 'n8n Workflows', level: 88 },
    { name: 'Zapier Zaps', level: 86 },
    { name: 'AI Agents', level: 84 },
    { name: 'Lead Automation', level: 87 },
    { name: 'Slack/Gmail Alerts', level: 85 },
    { name: 'Google Sheets Ops', level: 86 },
  ],
  deployment: [
    { name: 'Vercel', level: 90 },
    { name: 'CI/CD', level: 80 },
    { name: 'Database Management', level: 85 },
  ],
};

/** English projects. Prefer getProjects(locale). */
export const projects = getProjects(defaultLocale);

export const portfolioStats = {
  projects: getProjects(defaultLocale).length,
  clients: 3,
  yearsExperience: 3,
  githubContributions: 100,
};

/** Canonical WhatsApp contacts used across Hero, Contact, Projects, Footer */
export const whatsappContacts = [
  {
    id: 'us',
    countryCode: 'US',
    label: 'United States',
    display: '+1 541 378 1097',
    href: 'https://wa.me/15413781097',
    primary: true,
  },
  {
    id: 'ng',
    countryCode: 'NG',
    label: 'Nigeria',
    display: '+234 906 408 2774',
    href: 'https://wa.me/2349064082774',
    primary: false,
  },
] as const;

export const primaryWhatsApp = whatsappContacts.find((c) => c.primary)!;
