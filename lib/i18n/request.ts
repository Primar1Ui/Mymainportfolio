import { defaultLocale, isValidLocale, type Locale } from '@/lib/i18n/config';

/**
 * Pick the best locale from cookie, then Accept-Language, then default.
 */
export function negotiateLocale(
  cookieLocale: string | undefined,
  acceptLanguageHeader: string | null | undefined
): Locale {
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (acceptLanguageHeader) {
    const parsed = acceptLanguageHeader
      .split(',')
      .map((part) => {
        const [tag, qPart] = part.trim().split(';');
        const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
        return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 0 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of parsed) {
      const primary = tag.split('-')[0];
      if (isValidLocale(primary)) {
        return primary;
      }
    }
  }

  return defaultLocale;
}
