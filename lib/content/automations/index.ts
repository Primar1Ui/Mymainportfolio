import { defaultLocale, type Locale } from '@/lib/i18n/config';

import type { Automation } from '../types';
import { automationsEn } from './en';
import { automationsEs } from './es';
import { automationsFr } from './fr';

const byLocale: Record<Locale, Automation[]> = {
  en: automationsEn,
  es: automationsEs,
  fr: automationsFr,
};

export function getAutomations(locale: Locale): Automation[] {
  return byLocale[locale] ?? byLocale[defaultLocale];
}

export const HOMEPAGE_AUTOMATION_IDS = ['ai-customer-support', 'ai-appointment-booking'] as const;

export function getHomepageAutomations(locale: Locale): Automation[] {
  const automations = getAutomations(locale);
  return HOMEPAGE_AUTOMATION_IDS.map(
    (id) => automations.find((a) => a.id === id)!
  ).filter(Boolean);
}
