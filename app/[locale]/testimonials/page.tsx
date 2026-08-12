import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import PageShell from '@/components/PageShell';
import LoadingSection from '@/components/LoadingSection';
import { TestimonialSkeletonGrid } from '@/components/skeletons/TestimonialSkeleton';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => (
    <LoadingSection
      labelKey="a11y.loadingTestimonials"
      id="testimonials"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <TestimonialSkeletonGrid count={2} />
      </div>
    </LoadingSection>
  ),
});

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'testimonials', '/testimonials');
}

export default function TestimonialsPage() {
  return (
    <PageShell breadcrumbs={[{ labelKey: 'nav.testimonials', path: '/testimonials' }]}>
      <Testimonials />
    </PageShell>
  );
}
