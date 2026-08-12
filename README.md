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

Verify message key parity across locales:

```bash
pnpm check:i18n
```

## Setup

See **[SETUP.md](./SETUP.md)** for environment variables (Supabase, optional Resend), profile image, and social links.

## Scripts

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` — run ESLint
- `pnpm check:i18n` — assert en/es/fr JSON keys match

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, Framer Motion, Lucide icons
- Supabase (contact form), Vercel Analytics
- PWA (manifest + service worker), per-locale RSS feeds for blog
