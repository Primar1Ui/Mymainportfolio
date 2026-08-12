import { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import CaseStudiesPageContent from '@/components/CaseStudiesPageContent';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'caseStudies', '/case-studies');
}

export default function CaseStudiesPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.caseStudies', path: '/case-studies' }]}>
      <CaseStudiesPageContent />
    </PageShell>
  );
}
