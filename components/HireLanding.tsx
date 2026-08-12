'use client';

import LocalizedLink from '@/components/LocalizedLink';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  Layers,
  Workflow,
} from 'lucide-react';
import { primaryWhatsApp } from '@/lib/data';
import { trackFunnel } from '@/lib/analytics';
import { SITE_BRAND, SITE_LEGAL_NAME, SITE_EMAIL } from '@/lib/site';
import { useLocale } from '@/contexts/LocaleContext';

const projectTypeKeys = ['webApp', 'automation', 'support'] as const;
const stepKeys = ['one', 'two', 'three'] as const;
const fitKeys = ['one', 'two', 'three'] as const;

export default function HireLanding() {
  const { t } = useLocale();
  const brandVars = { brand: SITE_BRAND, name: SITE_LEGAL_NAME };

  return (
    <>
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-wide mb-3">
              {t('hire.eyebrow', { brand: SITE_BRAND })}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-5 leading-tight">
              {t('hire.title')}
            </h1>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-8">
              {t('hire.intro', brandVars)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <LocalizedLink
                href="/contact"
                onClick={() => trackFunnel.contactCtaClick('hire-hero')}
                className="btn-primary gap-2 min-h-12 px-6 py-3 rounded-lg text-sm"
              >
                {t('hire.sendDetails')}
                <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
              <a
                href={primaryWhatsApp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFunnel.whatsappClick('hire-hero')}
                className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold hover:bg-[var(--surface-solid)] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t('common.whatsapp')} {primaryWhatsApp.display}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
              {t('hire.whatHelp')}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">{t('hire.whatHelpDesc')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projectTypeKeys.map((key, index) => (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-6"
              >
                <div className="inline-flex p-2 rounded-lg bg-red-500/10 text-red-500 mb-4">
                  {index === 0 ? (
                    <Layers className="w-5 h-5" aria-hidden />
                  ) : index === 1 ? (
                    <Workflow className="w-5 h-5" aria-hidden />
                  ) : (
                    <CheckCircle2 className="w-5 h-5" aria-hidden />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {t(`hire.types.${key}.title`)}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                  {t(`hire.types.${key}.description`)}
                </p>
                <p className="text-xs font-medium text-[var(--muted-strong)] inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden />
                  {t('hire.timelinePrefix')} {t(`hire.types.${key}.timeline`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--surface-solid)]/40 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-10 text-center">
            {t('hire.howWorks')}
          </h2>
          <ol className="space-y-6">
            {stepKeys.map((key, index) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-500 font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                    {t(`hire.steps.${key}.title`)}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {t(`hire.steps.${key}.description`)}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              {t('hire.goodFit')}
            </h2>
            <ul className="space-y-3">
              {fitKeys.map((key) => (
                <li
                  key={key}
                  className="flex gap-3 text-[var(--muted)] text-sm leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-green-500 mt-0.5" aria-hidden />
                  {t(`hire.fit.${key}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-6">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">
              {t('hire.beforeReach')}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Include your goal, deadline, and any links to designs or references. If you are not
              sure about scope yet, say that too. I can help shape the first version.
            </p>
            <p className="text-sm text-[var(--muted)]">
              {t('hire.emailLabel')}{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-red-500 hover:text-red-400">
                {SITE_EMAIL}
              </a>
            </p>
            <LocalizedLink
              href="/case-studies"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-red-500 hover:text-red-400"
            >
              {t('hire.readCaseStudies')}
              <ArrowRight className="w-4 h-4" />
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
            {t('hire.readyStart')}
          </h2>
          <p className="text-[var(--muted)] mb-8">{t('hire.readyDesc')}</p>
          <LocalizedLink
            href="/contact"
            onClick={() => trackFunnel.contactCtaClick('hire-footer')}
            className="btn-primary gap-2 min-h-12 px-6 py-3 rounded-lg text-sm"
          >
            {t('hire.goContact')}
            <ArrowRight className="w-4 h-4" />
          </LocalizedLink>
        </div>
      </section>
    </>
  );
}
