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

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = negotiateLocale(cookieLocale, request.headers.get('accept-language'));
  const redirectPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(new URL(redirectPath, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
