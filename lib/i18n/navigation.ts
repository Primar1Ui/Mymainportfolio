import { getLocaleFromPathname, isValidLocale, type Locale } from '@/lib/i18n/config';

/** Build a locale-prefixed path (e.g. /about → /es/about, / → /es). */
export function localizedPath(path: string, locale: Locale): string {
  if (!path || path === '/') {
    return `/${locale}`;
  }

  const hashIndex = path.indexOf('#');
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return `/${locale}${normalized}${hash}`;
}

/** Strip /en, /es, or /fr prefix for route matching (e.g. /es/about → /about). */
export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && isValidLocale(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }

  return pathname || '/';
}

export function getLocaleFromPathnameOrDefault(pathname: string): Locale {
  return getLocaleFromPathname(pathname) ?? 'en';
}

/** Swap locale segment while keeping the same page path. */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const basePath = stripLocaleFromPathname(pathname);
  return localizedPath(basePath, nextLocale);
}
