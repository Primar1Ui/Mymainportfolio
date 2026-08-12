import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LocaleStructuredData from '@/components/LocaleStructuredData';
import { isValidLocale, locales } from '@/lib/i18n/config';
import { SITE_URL } from '@/lib/site';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    manifest: `/${locale}/manifest.webmanifest`,
    alternates: {
      types: {
        'application/rss+xml': `${SITE_URL}/${locale}/feed`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <LocaleStructuredData locale={locale} />
      {children}
    </>
  );
}
