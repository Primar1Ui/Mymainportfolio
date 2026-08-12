import { defaultLocale, type Locale } from '@/lib/i18n/config';

import type { FaqItem } from '../types';
import { homeFaqsEn } from './en';
import { homeFaqsEs } from './es';
import { homeFaqsFr } from './fr';

const byLocale: Record<Locale, FaqItem[]> = {
  en: homeFaqsEn,
  es: homeFaqsEs,
  fr: homeFaqsFr,
};

export function getHomeFaqs(locale: Locale): FaqItem[] {
  return byLocale[locale] ?? byLocale[defaultLocale];
}

/** @deprecated Use getHomeFaqs(locale) instead. */
export const homeFaqs = homeFaqsEn;
