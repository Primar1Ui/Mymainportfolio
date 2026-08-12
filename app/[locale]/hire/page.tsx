import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HireLanding from '@/components/HireLanding';
import { generateLocalePageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLocalePageMetadata(params, {
    title: 'Hire Me',
    description:
      'Hire Oluwatosin David (Bambi20) for web apps, SaaS MVPs, Supabase backends, and n8n or Zapier automation. Clear scope, fast replies, production-ready delivery.',
    path: '/hire',
  });
}

export default function HirePage() {
  return (
    <PageShell breadcrumbs={[{ label: 'Hire Me', path: '/hire' }]}>
      <HireLanding />
    </PageShell>
  );
}
