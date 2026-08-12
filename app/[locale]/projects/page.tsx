import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import PageShell from '@/components/PageShell';
import LoadingSection from '@/components/LoadingSection';
import ProjectSkeletonGrid from '@/components/skeletons/ProjectSkeletonGrid';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => (
    <LoadingSection
      labelKey="a11y.loadingProjects"
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ProjectSkeletonGrid count={6} />
      </div>
    </LoadingSection>
  ),
});

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'projects', '/projects');
}

export default function ProjectsPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.projects', path: '/projects' }]}>
      <Projects />
    </PageShell>
  );
}
