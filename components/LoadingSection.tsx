'use client';

import { useLocale } from '@/contexts/LocaleContext';

interface LoadingSectionProps {
  labelKey: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function LoadingSection({ labelKey, id, className, children }: LoadingSectionProps) {
  const { t } = useLocale();

  return (
    <section id={id} aria-busy="true" aria-label={t(labelKey)} className={className}>
      {children}
    </section>
  );
}
