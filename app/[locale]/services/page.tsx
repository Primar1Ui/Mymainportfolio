import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Services from '@/components/Services';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'services', '/services');
}

export default function ServicesPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.services', path: '/services' }]}>
      <Services />
    </PageShell>
  );
}
