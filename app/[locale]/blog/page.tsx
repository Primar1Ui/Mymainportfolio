import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import BlogPageHeader from '@/components/BlogPageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateLocalePageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLocalePageMetadata(params, {
    title: 'Blog',
    description:
      'Notes on Next.js, Supabase, SaaS builds, automation, and freelance web development from Bambi20.',
    path: '/blog',
  });
}

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8" tabIndex={-1}>
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ labelKey: 'nav.blog', path: '/blog' }]} />
        <BlogPageHeader />
        <BlogList posts={blogPosts} />
      </div>
    </main>
  );
}
