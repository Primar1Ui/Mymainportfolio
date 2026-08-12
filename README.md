# My Main Portfolio

Personal portfolio site built with **Next.js 14**, **React**, **Tailwind CSS**, and **Framer Motion**. Features dark/light theme, full i18n (EN/ES/FR), blog, contact form (Supabase), newsletter signup, PWA support, and keyboard shortcuts.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to `/en`, `/es`, or `/fr` based on your saved cookie or browser language.

## Internationalization

| Feature | Detail |
|---------|--------|
| Locales | `en`, `es`, `fr` |
| URLs | `/en/hire`, `/es/blog`, `/fr/contact`, etc. |
| Auto-detect | Cookie `portfolio-locale` → `Accept-Language` → `en` |
| UI strings | `messages/{locale}.json` |
| Long-form content | `lib/content/` (blog, case studies, projects, automations, FAQs) |
| RSS | `/en/feed`, `/es/feed`, `/fr/feed` (legacy `/feed` redirects) |
| PWA manifest | `/en/manifest.webmanifest`, etc. (legacy `/manifest.json` redirects) |

Verify message key parity across locales (also runs automatically before `pnpm build`):

```bash
pnpm check:i18n
```

### Adding localized content

When you add blog posts, projects, automations, or case studies, create entries in **all three locales** under `lib/content/`:

| Content type | Files |
|--------------|--------|
| Blog | `lib/content/blog/{en,es,fr}.ts` |
| Case studies | `lib/content/case-studies/{en,es,fr}.ts` |
| Projects | `lib/content/projects/{en,es,fr}.ts` |
| Automations | `lib/content/automations/{en,es,fr}.ts` |
| FAQs | `lib/content/faqs/{en,es,fr}.ts` |

Keep the same `slug` or `id` across locales so hreflang and sitemap URLs stay aligned. For new UI labels, add keys to `messages/en.json` first, then mirror them in `es.json` and `fr.json`, and run `pnpm check:i18n`.

Page titles and descriptions live in `messages/{locale}.json` under `meta.*`.

### SEO monitoring (owner)

After deploying locale changes:

1. [Google Search Console](https://search.google.com/search-console): confirm `/es/` and `/fr/` URLs are indexed; inspect hreflang on a few pages.
2. [Rich Results Test](https://search.google.com/test/rich-results): validate `/`, `/es/`, and `/fr/` home pages plus a blog post in each locale.
3. Re-submit `sitemap.xml` if you add many new localized URLs.

See **Phase 2 runbook** in [BAMBI20_IMPLEMENTATION_PLAN.md](./BAMBI20_IMPLEMENTATION_PLAN.md) for GSC setup.

## Setup

See **[SETUP.md](./SETUP.md)** for environment variables (Supabase, optional Resend), profile image, and social links.

## Scripts

- `pnpm dev` — development server
- `pnpm build` — run i18n key check, then production build
- `pnpm start` — run production build
- `pnpm lint` — run ESLint
- `pnpm check:i18n` — assert en/es/fr JSON keys match

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, Framer Motion, Lucide icons
- Supabase (contact form), Vercel Analytics
- PWA (manifest + service worker), per-locale RSS feeds for blog
