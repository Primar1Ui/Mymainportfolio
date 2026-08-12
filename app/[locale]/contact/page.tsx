import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import { generateLocalePageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLocalePageMetadata(params, {
    title: 'Contact',
    description:
      'Contact Oluwatosin David (Bambi20) for full stack development, SaaS builds, AI integrations, and automation work.',
    path: '/contact',
  });
}

export default function ContactPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.contact', path: '/contact' }]}>
      <Contact />
      <Newsletter />
    </PageShell>
  );
}
