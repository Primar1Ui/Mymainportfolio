import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Services from '@/components/Services';
import { generateLocalePageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLocalePageMetadata(params, {
    title: 'Services',
    description:
      'Services from Bambi20: full stack development, SaaS MVPs, Supabase backends, AI integrations, and workflow automation.',
    path: '/services',
  });
}

export default function ServicesPage() {
  return (
    <PageShell breadcrumbs={[{ label: 'Services', path: '/services' }]}>
      <Services />
    </PageShell>
  );
}
