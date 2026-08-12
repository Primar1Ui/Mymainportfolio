import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HireLanding from '@/components/HireLanding';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'hire', '/hire');
}

export default function HirePage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.hire', path: '/hire' }]}>
      <HireLanding />
    </PageShell>
  );
}
