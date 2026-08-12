import {
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_GEO,
  SITE_GITHUB,
  SITE_LEGAL_NAME,
  SITE_LINKEDIN,
  SITE_TELEGRAM,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/site';
import type { Locale } from '@/lib/i18n/config';

export type BreadcrumbItem = {
  label?: string;
  labelKey?: string;
  path: string;
};

export { getHomeFaqs, homeFaqs } from '@/lib/content/faqs';

export function personSameAs(): string[] {
  const links = [SITE_GITHUB, SITE_TELEGRAM];
  if (SITE_LINKEDIN) {
    links.push(SITE_LINKEDIN);
  }
  return links;
}

export function authorPersonSchema() {
  return {
    '@type': 'Person',
    name: SITE_LEGAL_NAME,
    alternateName: SITE_BRAND,
    url: SITE_URL,
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_LEGAL_NAME,
    alternateName: SITE_BRAND,
    jobTitle: 'Full Stack Web Developer',
    url: SITE_URL,
    email: `mailto:${SITE_EMAIL}`,
    sameAs: personSameAs(),
    knowsAbout: [
      'Next.js',
      'React',
      'Supabase',
      'Tailwind CSS',
      'AI Integration',
      'n8n Workflow Automation',
      'Zapier Automation',
      'SaaS MVP Development',
    ],
    nationality: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    workLocation: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'United States' },
    ],
  };
}

export function websiteSchema(options?: { description?: string; locale?: Locale; siteUrl?: string }) {
  const locale = options?.locale ?? 'en';
  const siteUrl = options?.siteUrl ?? SITE_URL;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_TITLE,
    alternateName: SITE_BRAND,
    url: siteUrl,
    description: options?.description ?? SITE_DESCRIPTION,
    inLanguage: locale,
    author: authorPersonSchema(),
  };
}

export function professionalServiceSchema(options?: {
  description?: string;
  locale?: Locale;
  siteUrl?: string;
}) {
  const siteUrl = options?.siteUrl ?? SITE_URL;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_BRAND,
    description: options?.description ?? SITE_DESCRIPTION,
    url: siteUrl,
    email: SITE_EMAIL,
    areaServed: SITE_GEO.countries.map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    serviceType: [
      'Full Stack Web Development',
      'SaaS MVP Development',
      'Workflow Automation',
      'AI Application Integration',
    ],
    founder: authorPersonSchema(),
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_BRAND,
    alternateName: SITE_LEGAL_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: SITE_EMAIL,
    image: `${SITE_URL}/images/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    areaServed: SITE_GEO.countries.map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    founder: authorPersonSchema(),
    sameAs: personSameAs(),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  path?: string;
}) {
  const pagePath = post.path ?? `/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: authorPersonSchema(),
    publisher: {
      '@type': 'Organization',
      name: SITE_BRAND,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${pagePath}`,
    },
    image: `${SITE_URL}/images/og-image.png`,
    keywords: post.tags.join(', '),
  };
}
