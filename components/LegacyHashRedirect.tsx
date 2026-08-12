'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/contexts/LocaleContext';
import { localizedPath } from '@/lib/i18n/navigation';
import { legacyHashRoutes } from '@/lib/navigation';

/** Redirects old `/#section` bookmarks to dedicated routes on the homepage. */
export default function LegacyHashRedirect() {
  const router = useRouter();
  const { locale } = useLocale();

  useEffect(() => {
    const hash = window.location.hash;
    const target = legacyHashRoutes[hash];
    if (target) {
      router.replace(localizedPath(target, locale));
    }
  }, [locale, router]);

  return null;
}
