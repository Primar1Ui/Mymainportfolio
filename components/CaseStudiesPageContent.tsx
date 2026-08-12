'use client';

import CaseStudyCard from '@/components/CaseStudyCard';
import LocalizedLink from '@/components/LocalizedLink';
import SectionHeading from '@/components/SectionHeading';
import { useLocale } from '@/contexts/LocaleContext';
import { getCaseStudies } from '@/lib/caseStudies';

export default function CaseStudiesPageContent() {
  const { t, locale } = useLocale();
  const caseStudies = getCaseStudies(locale);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={t('caseStudies.title')}
          description={t('caseStudies.description')}
        />

        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('caseStudies.ctaTitle')}
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">{t('caseStudies.ctaDesc')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LocalizedLink
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {t('common.contact')}
              </LocalizedLink>
              <LocalizedLink
                href="/projects"
                className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl font-semibold text-gray-100 hover:border-red-400 hover:text-red-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {t('common.viewProjects')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
