import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import AutomationShowcase from '@/components/AutomationShowcase';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'automation', '/automation');
}

export default function AutomationPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.automation', path: '/automation' }]}>
      <AutomationShowcase />
    </PageShell>
  );
}
