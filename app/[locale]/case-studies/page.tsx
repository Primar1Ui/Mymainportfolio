import { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import CaseStudiesPageContent from '@/components/CaseStudiesPageContent';
import { generateLocalePageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLocalePageMetadata(params, {
    title: 'Case Studies',
    description:
      'Case studies from Bambi20: how web apps and automation projects were scoped, built, and delivered for clients.',
    path: '/case-studies',
  });
}

export default function CaseStudiesPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.caseStudies', path: '/case-studies' }]}>
      <CaseStudiesPageContent />
    </PageShell>
  );
}
