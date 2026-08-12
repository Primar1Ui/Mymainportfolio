import type { Metadata } from 'next';

import { getPageMeta } from '@/lib/i18n/dictionaries';
import { isValidLocale, localeOpenGraph, type Locale } from '@/lib/i18n/config';
import { buildLocaleAlternates } from '@/lib/i18n/metadata';
import { SITE_BRAND, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site';
import type { Messages } from '@/lib/i18n/dictionaries';

type PageMetaInput = {
  title: string;
  description: string;
  /** Unprefixed path (`/` for home). */
  path?: string;
  locale: Locale;
};

export function createPageMetadata({
  title,
  description,
  path = '/',
  locale,
}: PageMetaInput): Metadata {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_BRAND}`;
  const alternates = buildLocaleAlternates(path, locale);

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: alternates.canonical,
      siteName: SITE_TITLE,
      type: 'website',
      locale: localeOpenGraph[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates,
  };
}

export async function generateLocalePageMetadata(
  params: Promise<{ locale: string }>,
  input: Omit<PageMetaInput, 'locale'>
): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return createPageMetadata({ ...input, locale });
}

export async function generateDictionaryPageMetadata(
  params: Promise<{ locale: string }>,
  pageKey: keyof Messages['meta'],
  path: string
): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const { title, description } = getPageMeta(locale, pageKey);
  return createPageMetadata({ title, description, path, locale });
}

export const defaultKeywords = [
  'Bambi20',
  'Oluwatosin David',
  'full stack developer',
  'Next.js',
  'Supabase',
  'automation',
];

export { SITE_DESCRIPTION, SITE_URL };
