import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

import { negotiateLocale } from '@/lib/i18n/request';
import { LOCALE_COOKIE } from '@/lib/i18n/config';
import { SITE_URL } from '@/lib/site';

/** Legacy /feed → locale-specific feed based on cookie or Accept-Language. */
export async function GET() {
  const cookieLocale = cookies().get(LOCALE_COOKIE)?.value;
  const locale = negotiateLocale(cookieLocale, headers().get('accept-language'));

  return NextResponse.redirect(new URL(`/${locale}/feed`, SITE_URL), 307);
}
