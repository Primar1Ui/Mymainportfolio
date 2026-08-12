import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';

import { isValidLocale } from '@/lib/i18n/config';
import { buildRssFeed } from '@/lib/rss';

type RouteContext = { params: Promise<{ locale: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { locale } = await context.params;
  if (!isValidLocale(locale)) notFound();

  const rss = buildRssFeed(locale);

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
