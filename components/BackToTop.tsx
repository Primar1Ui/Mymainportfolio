'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useLocale } from '@/contexts/LocaleContext';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="no-print fixed bottom-6 right-4 sm:right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      aria-label={t('a11y.backToTop')}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}