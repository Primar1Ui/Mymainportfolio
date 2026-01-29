import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} | David's Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://david-portfolio.vercel.app/blog/${post.slug}`,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-disc list-inside space-y-1 text-gray-400 mb-4">
          {listItems.map((item, i) => (
            <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={elements.length} className="text-2xl font-bold text-white mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) flushList();
      inList = true;
      listItems.push(line);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      flushList();
      elements.push(
        <p key={elements.length} className="text-gray-400 mb-4 font-semibold text-gray-300">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim()) {
      flushList();
      elements.push(
        <p key={elements.length} className="text-gray-400 mb-4 leading-relaxed">
          {line}
        </p>
      );
    } else {
      flushList();
    }
  }
  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium mb-8"
        >
          ← Back to blog
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-400 mb-2">{post.description}</p>
          <p className="text-sm text-gray-500">
            {post.date} · {post.author}
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>
      </article>
    </main>
  );
}
