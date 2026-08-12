import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'contact', '/contact');
}

export default function ContactPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.contact', path: '/contact' }]}>
      <Contact />
      <Newsletter />
    </PageShell>
  );
}
