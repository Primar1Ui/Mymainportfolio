'use client';

import { useLocale } from '@/contexts/LocaleContext';

export default function SkipToContent() {
  const { t } = useLocale();

  return (
    <a href="#main-content" className="skip-to-content">
      {t('a11y.skipToContent')}
    </a>
  );
}
