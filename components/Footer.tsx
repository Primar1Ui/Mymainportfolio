'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { SITE_BRAND, SITE_LEGAL_NAME } from '@/lib/site';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] text-sm"
        >
          © {new Date().getFullYear()} {SITE_LEGAL_NAME} ({SITE_BRAND}). {t('footer.rights')}
        </motion.p>
      </div>
    </footer>
  );
}
