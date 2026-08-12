'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from '@/contexts/LocaleContext';
import { LOCALE_COOKIE, type Locale } from '@/lib/i18n/config';
import { switchLocalePath } from '@/lib/i18n/navigation';

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useLocale();

  const handleSwitch = useCallback(
    (code: Locale) => {
      if (code === locale) return;

      const nextPath = switchLocalePath(pathname, code);
      document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
      try {
        localStorage.setItem(LOCALE_COOKIE, code);
      } catch {}

      router.push(nextPath);
    },
    [locale, pathname, router]
  );

  return (
    <div
      className="flex items-center gap-0.5 p-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface-solid)]"
      role="group"
      aria-label="Language"
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleSwitch(code)}
          className={`min-h-9 min-w-9 px-2 py-1 text-xs font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
            locale === code
              ? 'bg-red-500/20 text-red-500'
              : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]'
          }`}
          aria-label={`Switch to ${label}`}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
