import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { LOCALE_COOKIE } from '@/lib/i18n/config';
import { negotiateLocale } from '@/lib/i18n/request';
import { SITE_URL } from '@/lib/site';

/** Legacy /manifest.json → locale-specific manifest based on cookie or Accept-Language. */
export async function GET() {
  const cookieLocale = cookies().get(LOCALE_COOKIE)?.value;
  const locale = negotiateLocale(cookieLocale, headers().get('accept-language'));

  return NextResponse.redirect(new URL(`/${locale}/manifest.webmanifest`, SITE_URL), 307);
}
