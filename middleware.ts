import { NextRequest, NextResponse } from 'next/server';
import { LOCALE_COOKIE, isValidLocale } from '@/lib/i18n/config';
import { negotiateLocale } from '@/lib/i18n/request';

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const passthroughPaths = ['/robots.txt', '/sitemap.xml', '/manifest.json', '/feed', '/feed.xml'];
  if (passthroughPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split('/').filter(Boolean)[0];

  if (firstSegment && isValidLocale(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  // B1: only the site root redirects to a localized home URL.
  // Other legacy routes (/about, /hire, ...) stay as-is until phase B2.
  if (pathname === '/') {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = negotiateLocale(cookieLocale, request.headers.get('accept-language'));
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
