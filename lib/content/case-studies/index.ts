import { defaultLocale, type Locale } from '@/lib/i18n/config';

import type { CaseStudy } from '../types';
import { caseStudiesEn } from './en';
import { caseStudiesEs } from './es';
import { caseStudiesFr } from './fr';

const byLocale: Record<Locale, CaseStudy[]> = {
  en: caseStudiesEn,
  es: caseStudiesEs,
  fr: caseStudiesFr,
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return byLocale[locale] ?? byLocale[defaultLocale];
}
