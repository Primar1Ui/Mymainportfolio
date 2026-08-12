import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import BlogPageHeader from '@/components/BlogPageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';
import { isValidLocale } from '@/lib/i18n/config';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'blog', '/blog');
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const posts = getBlogPosts(locale);

  return (
    <main id="main-content" className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8" tabIndex={-1}>
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ labelKey: 'nav.blog', path: '/blog' }]} />
        <BlogPageHeader />
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
