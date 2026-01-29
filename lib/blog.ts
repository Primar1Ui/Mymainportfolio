export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-saas-with-nextjs',
    title: 'Building a SaaS MVP with Next.js and Supabase',
    description:
      'A practical guide to building a production-ready SaaS MVP using Next.js App Router and Supabase for auth and data.',
    date: '2024-01-15',
    author: 'David',
    tags: ['Next.js', 'Supabase', 'SaaS'],
    featured: true,
    content: `
## Introduction

Building a SaaS product from scratch involves choosing the right stack, setting up authentication, and delivering value quickly. This post walks through a minimal setup using **Next.js 14** (App Router) and **Supabase**.

## Why Next.js + Supabase?

- **Next.js** gives you server components, API routes, and great DX.
- **Supabase** provides Postgres, auth, and real-time out of the box.

## Getting Started

1. Create a new Next.js app with \`create-next-app\`.
2. Add Supabase and configure environment variables.
3. Set up Supabase Auth (email/password or OAuth).
4. Build your first protected route and dashboard.

## Key Takeaways

- Use Server Components for data fetching where possible.
- Protect routes with middleware or server-side checks.
- Keep the first version small and ship fast.

*More posts coming soon — stay tuned.*
    `.trim(),
  },
  {
    slug: 'portfolio-seo-and-performance',
    title: 'Portfolio SEO and Performance Tips',
    description:
      'How to make your developer portfolio fast, accessible, and discoverable by search engines.',
    date: '2024-01-10',
    author: 'David',
    tags: ['SEO', 'Next.js', 'Performance'],
    content: `
## Why It Matters

A portfolio is often the first impression for recruiters and clients. Fast load times and good SEO help you get found and keep visitors engaged.

## What We Did

- **Metadata**: Title, description, Open Graph, and Twitter cards.
- **Structured data**: JSON-LD for Person and WebSite.
- **Sitemap & robots.txt**: So crawlers can index your site.
- **Images**: Next.js \`Image\` with sensible sizes and lazy loading.

## Performance

- Minimize client-side JS with Server Components.
- Use \`prefers-reduced-motion\` for accessibility.
- Keep animations subtle and optional.

*More posts coming soon.*
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
