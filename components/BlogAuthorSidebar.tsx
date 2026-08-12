'use client';

import LocalizedLink from '@/components/LocalizedLink';
import {
  SITE_BRAND,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_LEGAL_NAME,
} from '@/lib/site';
import { useLocale } from '@/contexts/LocaleContext';
import { getPageMeta } from '@/lib/i18n/dictionaries';

export default function BlogAuthorSidebar() {
  const { locale, t } = useLocale();
  const bio = getPageMeta(locale, 'home').description;

  return (
    <aside
      aria-labelledby="about-author-heading"
      className="rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] p-5"
    >
      <h2 id="about-author-heading" className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)] mb-3">
        {t('blog.authorTitle')}
      </h2>
      <p className="text-base font-semibold text-[var(--foreground)] mb-1">
        {SITE_LEGAL_NAME}
      </p>
      <p className="text-sm text-[var(--muted)] mb-3">{SITE_BRAND}</p>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
        {bio}
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <LocalizedLink href="/about" className="text-red-500 hover:text-red-400">
            {t('blog.aboutPage')}
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href="/hire" className="text-red-500 hover:text-red-400">
            {t('blog.hireMe')}
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href="/contact" className="text-red-500 hover:text-red-400">
            {t('common.contact')}
          </LocalizedLink>
        </li>
        <li>
          <a href={`mailto:${SITE_EMAIL}`} className="text-red-500 hover:text-red-400">
            {SITE_EMAIL}
          </a>
        </li>
        <li>
          <a
            href={SITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400"
          >
            {t('common.github')}
          </a>
        </li>
      </ul>
    </aside>
  );
}
