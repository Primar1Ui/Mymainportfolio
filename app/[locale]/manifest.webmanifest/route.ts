import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

import { isValidLocale } from '@/lib/i18n/config';
import { buildWebManifest } from '@/lib/pwa/manifest';

type RouteContext = { params: Promise<{ locale: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { locale } = await context.params;
  if (!isValidLocale(locale)) notFound();

  const manifest = buildWebManifest(locale);

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
