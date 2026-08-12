import { getBlogPosts } from '@/lib/content/blog';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizedPath } from '@/lib/i18n/navigation';
import type { Locale } from '@/lib/i18n/config';
import { SITE_URL } from '@/lib/site';

const RSS_LANGUAGE: Record<Locale, string> = {
  en: 'en-us',
  es: 'es-es',
  fr: 'fr-fr',
};

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildRssFeed(locale: Locale): string {
  const { feed } = getDictionary(locale);
  const posts = getBlogPosts(locale);
  const feedUrl = `${SITE_URL}/${locale}/feed`;
  const blogUrl = `${SITE_URL}${localizedPath('/blog', locale)}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(feed.title)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(feed.description)}</description>
    <language>${RSS_LANGUAGE[locale]}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${posts
      .map((post) => {
        const postUrl = `${SITE_URL}${localizedPath(`/blog/${post.slug}`, locale)}`;
        return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${postUrl}</guid>
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;
}
