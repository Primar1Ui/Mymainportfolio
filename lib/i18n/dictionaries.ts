import en from '@/messages/en.json';
import es from '@/messages/es.json';
import fr from '@/messages/fr.json';

import { defaultLocale, type Locale } from './config';

const dictionaries = { en, es, fr } as const;

export type Messages = typeof en;

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

type PageMeta = { title: string; description: string };

export function getPageMeta(locale: Locale, pageKey: keyof Messages['meta']): PageMeta {
  const dict = getDictionary(locale);
  const meta = dict.meta[pageKey];
  if (meta) return meta;
  return dictionaries[defaultLocale].meta[pageKey];
}
