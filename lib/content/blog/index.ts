import { defaultLocale, type Locale } from '@/lib/i18n/config';

import type { BlogPost } from '../types';
import { blogPostsEn } from './en';
import { blogPostsEs } from './es';
import { blogPostsFr } from './fr';

const byLocale: Record<Locale, BlogPost[]> = {
  en: blogPostsEn,
  es: blogPostsEs,
  fr: blogPostsFr,
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return byLocale[locale] ?? byLocale[defaultLocale];
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}

export function getFeaturedPosts(locale: Locale): BlogPost[] {
  return getBlogPosts(locale).filter((p) => p.featured);
}

export function getAllBlogTags(locale: Locale): string[] {
  return Array.from(new Set(getBlogPosts(locale).flatMap((p) => p.tags))).sort();
}

export function getLatestPost(locale: Locale): BlogPost | undefined {
  return [...getBlogPosts(locale)].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
}

export function getAllBlogSlugs(): string[] {
  return blogPostsEn.map((p) => p.slug);
}
