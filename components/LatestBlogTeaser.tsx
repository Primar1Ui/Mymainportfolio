'use client';

import LocalizedLink from '@/components/LocalizedLink';
import { ArrowRight, Calendar } from 'lucide-react';
import { getLatestPost } from '@/lib/blog';
import SectionHeading from '@/components/SectionHeading';
import { useLocale } from '@/contexts/LocaleContext';

export default function LatestBlogTeaser() {
  const { t } = useLocale();
  const post = getLatestPost();
  if (!post) return null;

  return (
    <section
      aria-labelledby="latest-post-heading"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          id="latest-post-heading"
          title={t('blogTeaser.title')}
          description={t('blogTeaser.description')}
          className="mb-8"
        />

        <article className="p-6 md:p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-red-500/40 transition-colors">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{post.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">{post.description}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <LocalizedLink
              href={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {t('blog.readArticle')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </LocalizedLink>
            <LocalizedLink
              href="/blog"
              className="inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 rounded-xl border border-gray-700 text-gray-300 font-medium hover:border-red-400 hover:text-red-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {t('blog.viewAll')}
            </LocalizedLink>
          </div>
        </article>
      </div>
    </section>
  );
}
