import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HashScroll from '@/components/HashScroll';
import About from '@/components/About';
import CurrentWork from '@/components/CurrentWork';
import Skills from '@/components/Skills';
import { generateLocalePageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateLocalePageMetadata(params, {
    title: 'About',
    description:
      'About Oluwatosin David (Bambi20): full stack developer background, current work, and technical skills.',
    path: '/about',
  });
}

export default function AboutPage() {
  return (
    <PageShell breadcrumbs={[{ label: 'About', path: '/about' }]}>
      <HashScroll />
      <About />
      <CurrentWork />
      <Skills />
    </PageShell>
  );
}
