import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

const MANIFEST_ICONS = [
  {
    src: '/favicon.ico',
    sizes: '48x48',
    type: 'image/x-icon',
    purpose: 'any',
  },
  {
    src: '/favicon-32x32.png',
    sizes: '32x32',
    type: 'image/png',
    purpose: 'any',
  },
  {
    src: '/favicon.svg',
    sizes: 'any',
    type: 'image/svg+xml',
    purpose: 'any',
  },
  {
    src: '/apple-touch-icon.png',
    sizes: '180x180',
    type: 'image/png',
    purpose: 'any',
  },
  {
    src: '/favicon.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'any maskable',
  },
] as const;

export function buildWebManifest(locale: Locale) {
  const { pwa } = getDictionary(locale);

  return {
    name: pwa.name,
    short_name: pwa.shortName,
    description: pwa.description,
    start_url: `/${locale}`,
    scope: '/',
    display: 'standalone',
    background_color: '#0f0a0a',
    theme_color: '#0f0a0a',
    orientation: 'portrait-primary',
    lang: locale,
    icons: MANIFEST_ICONS,
    categories: ['portfolio', 'business'],
  };
}
