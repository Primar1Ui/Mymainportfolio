'use client';

import { useState, useEffect } from 'react';
import LocalizedLink from '@/components/LocalizedLink';
import { X, Rocket } from 'lucide-react';

import { useLocale } from '@/contexts/LocaleContext';

const STORAGE_KEY = 'hire-me-banner-dismissed';

export default function HireMeBanner() {
  const { t } = useLocale();
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setDismissed(stored === 'true');
    } catch {
      setDismissed(false);
    } finally {
      setReady(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {}
  };

  if (!ready || dismissed) return null;

  return (
    <div
      role="region"
      aria-label={t('a11y.availabilityNotice')}
      className="sticky top-16 md:top-20 z-40 bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-4 border-b border-red-500/30 print:hidden shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm md:text-base flex items-start sm:items-center gap-2 flex-1 min-w-0">
          <Rocket className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <span>{t('hireBanner.message')}</span>
        </p>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LocalizedLink
            href="/contact"
            className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 min-h-11 px-4 py-2 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
          >
            {t('common.getInTouch')}
          </LocalizedLink>
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={t('a11y.dismissBanner')}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
