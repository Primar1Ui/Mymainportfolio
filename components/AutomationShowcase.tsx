'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Bot,
  GitBranch,
  Workflow,
  Boxes,
  Users,
  CalendarCheck,
  Sparkles,
  FileSpreadsheet,
  CalendarDays,
  BellRing,
} from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { getAutomations } from '@/lib/automations';
import LocalizedLink from '@/components/LocalizedLink';
import SectionHeading from '@/components/SectionHeading';
import { useLocale } from '@/contexts/LocaleContext';

const automationIcons = {
  'ai-appointment-booking': CalendarDays,
  'ai-customer-support': Bot,
  'camjroberts-reminder': BellRing,
  'n8n-api-automation': Workflow,
  'content-operations': GitBranch,
  'ai-lead-qualification': Bot,
  'ai-inventory-restock': Boxes,
  'ai-recruiting-funnel': Users,
  'groq-content-routing': Sparkles,
  'zapier-rsvp-paths': CalendarCheck,
  'zapier-rsvp-slack': Bot,
  'zapier-forms-sheets': FileSpreadsheet,
} as const;

export default function AutomationShowcase() {
  const reduce = usePrefersReducedMotion();
  const { t, locale } = useLocale();
  const automations = getAutomations(locale);

  return (
    <section
      id="automation"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={t('automation.title')}
          description={t('automation.description')}
          className="mb-14"
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {automations.map((automation, index) => {
            const Icon = automationIcons[automation.id as keyof typeof automationIcons] ?? Workflow;
            return (
              <motion.article
                key={automation.id}
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : index * 0.08, duration: reduce ? 0 : 0.5 }}
                className="overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-colors"
              >
                <div className="relative aspect-[16/9] bg-white overflow-hidden">
                  <Image
                    src={automation.image}
                    alt={automation.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex p-2 rounded-lg bg-red-500/15 text-red-400">
                      <Icon className="w-5 h-5" aria-hidden />
                    </span>
                    <h3 className="text-xl font-semibold text-white">{automation.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-5">{automation.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {automation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <LocalizedLink
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t('automation.cta')}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}
