import { SITE_URL } from '@/lib/site';

import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { localizedPath } from '@/lib/i18n/navigation';

/** Unprefixed site path (`/` for home, `/about`, `/blog/slug`, …). */
export function buildLocaleAlternateUrls(basePath: string): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[locale] = `${SITE_URL}${localizedPath(basePath, locale)}`;
  }

  languages['x-default'] = `${SITE_URL}${localizedPath(basePath, defaultLocale)}`;

  return languages;
}

export function buildLocaleAlternates(basePath: string, locale: Locale) {
  return {
    canonical: `${SITE_URL}${localizedPath(basePath, locale)}`,
    languages: buildLocaleAlternateUrls(basePath),
  };
}
