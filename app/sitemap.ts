import type { MetadataRoute } from 'next';

import { blogPosts } from '@/lib/blog';
import { locales } from '@/lib/i18n/config';
import { buildLocaleAlternateUrls } from '@/lib/i18n/metadata';
import { localizedPath } from '@/lib/i18n/navigation';
import { SITE_URL } from '@/lib/site';

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/automation', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/hire', priority: 0.95, changeFrequency: 'monthly' as const },
  { path: '/testimonials', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(route.path, locale)}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: buildLocaleAlternateUrls(route.path),
      },
    }))
  );

  const postPages: MetadataRoute.Sitemap = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(`/blog/${post.slug}`, locale)}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: buildLocaleAlternateUrls(`/blog/${post.slug}`),
      },
    }))
  );

  return [...staticPages, ...postPages];
}
