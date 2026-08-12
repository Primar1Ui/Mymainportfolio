'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { SITE_BRAND } from '@/lib/site';

export default function BlogPageHeader() {
  const { t } = useLocale();

  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {t('blog.title', { brand: SITE_BRAND })}
      </h1>
      <p className="text-gray-400 text-lg">{t('blog.description')}</p>
    </div>
  );
}
