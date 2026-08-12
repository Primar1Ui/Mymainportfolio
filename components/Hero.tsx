'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LocalizedLink from '@/components/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioStats } from '@/lib/data';
import { SITE_BRAND, SITE_LEGAL_NAME } from '@/lib/site';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLocale();

  const heroStats = [
    { value: `${portfolioStats.projects}+`, label: t('hero.statProjects') },
    { value: `${portfolioStats.clients}+`, label: t('hero.statClients') },
    { value: `${portfolioStats.yearsExperience}+`, label: t('hero.statYears') },
  ];

  return (
    <section id="home" className="relative bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
          >
            <p className="text-sm font-medium text-[var(--muted)] mb-4">
              {SITE_BRAND} · {t('hero.eyebrow')}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              {t('hero.headline')}
            </h1>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-8">
              {t('hero.bio', { name: SITE_LEGAL_NAME, brand: SITE_BRAND })}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <LocalizedLink
                href="/hire"
                className="btn-primary gap-2 min-h-12 px-6 py-3 rounded-lg text-sm"
              >
                {t('hero.startProject')}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </LocalizedLink>
              <LocalizedLink
                href="/projects"
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold hover:border-red-500/50 hover:text-red-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                {t('hero.viewPortfolio')}
              </LocalizedLink>
            </div>

            <dl className="grid grid-cols-3 gap-4 max-w-md">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">{stat.value}</dd>
                  <dd className="text-xs sm:text-sm text-[var(--muted)] mt-1">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1, duration: 0.5 }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-solid)] shadow-lg">
              <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/images/oluwatosin-portrait.png"
                  alt={`${SITE_LEGAL_NAME}, ${SITE_BRAND}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-5 py-4 border-t border-[var(--border)]">
                <p className="font-semibold text-[var(--foreground)]">{SITE_LEGAL_NAME}</p>
                <p className="text-sm text-[var(--muted)] mt-1">{t('hero.techStack')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
