'use client';

import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useLocale } from '@/contexts/LocaleContext';
import { getDictionary } from '@/lib/i18n/dictionaries';

export default function CurrentWork() {
  const { locale, t } = useLocale();
  const { currentWork } = getDictionary(locale);

  return (
    <section
      id="current-work"
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={t('currentWork.title')}
          description={t('currentWork.description')}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-red-500/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/20">
                <Sparkles className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{t('currentWork.active')}</h3>
            </div>
            <ul className="space-y-2">
              {currentWork.activeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-red-500/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-600/20">
                <BookOpen className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{t('currentWork.learning')}</h3>
            </div>
            <ul className="space-y-2">
              {currentWork.learningItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                  <span className="text-red-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
