export const locales = ['en', 'es', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE = 'portfolio-locale';

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** First path segment when it is a supported locale (e.g. /es → es). */
export function getLocaleFromPathname(pathname: string): Locale | null {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return firstSegment && isValidLocale(firstSegment) ? firstSegment : null;
}

/** True for /en, /es, /fr with no further segments (localized homepage). */
export function isLocalizedHomePath(pathname: string): boolean {
  const segments = pathname.split('/').filter(Boolean);
  return segments.length === 1 && isValidLocale(segments[0]);
}

export function isHomePath(pathname: string): boolean {
  return pathname === '/' || isLocalizedHomePath(pathname);
}

export const localeOpenGraph: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
};
