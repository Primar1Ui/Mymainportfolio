import { defaultLocale, type Locale } from '@/lib/i18n/config';

import type { Project } from '../types';
import { projectsEn } from './en';
import { projectsEs } from './es';
import { projectsFr } from './fr';

const byLocale: Record<Locale, Project[]> = {
  en: projectsEn,
  es: projectsEs,
  fr: projectsFr,
};

export function getProjects(locale: Locale): Project[] {
  return byLocale[locale] ?? byLocale[defaultLocale];
}

export const HOMEPAGE_PROJECT_IDS = ['portfolio-website', 'baxauto-website'] as const;

export function getHomepageProjects(locale: Locale): Project[] {
  const projects = getProjects(locale);
  return HOMEPAGE_PROJECT_IDS.map(
    (id) => projects.find((p) => p.id === id)!
  ).filter(Boolean);
}
