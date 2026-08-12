'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { localizedPath } from '@/lib/i18n/navigation';
import { breadcrumbSchema, type BreadcrumbItem } from '@/lib/seo';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

function resolveLabel(item: BreadcrumbItem, t: (key: string) => string): string {
  if (item.labelKey) return t(item.labelKey);
  return item.label ?? '';
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { locale, t } = useLocale();
  const trail: BreadcrumbItem[] = [{ labelKey: 'nav.home', path: '/' }, ...items];
  const schemaTrail = trail.map((item) => ({
    label: resolveLabel(item, t),
    path: localizedPath(item.path, locale),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaTrail)) }}
      />
      <nav aria-label={t('a11y.breadcrumb')} className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted)]">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            const href = localizedPath(item.path, locale);
            const label = resolveLabel(item, t);

            return (
              <li key={`${item.path}-${index}`} className="inline-flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[var(--muted)]" aria-hidden />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-[var(--foreground)] font-medium">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded px-0.5"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
