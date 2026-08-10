import {
  LOCALE_COOKIE,
  defaultLocale,
  getLocaleFromPathname,
  isValidLocale,
  type Locale,
} from '@/lib/i18n/config';

export function readLocaleCookie(): Locale | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=([^;]+)`)
  );
  const value = match?.[1];
  return value && isValidLocale(value) ? value : null;
}

export function readLocaleStorage(): Locale | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(LOCALE_COOKIE);
    return stored && isValidLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/** URL locale wins, then cookie, then localStorage, then default. */
export function detectClientLocale(pathname: string): Locale {
  return (
    getLocaleFromPathname(pathname) ??
    readLocaleCookie() ??
    readLocaleStorage() ??
    defaultLocale
  );
}
