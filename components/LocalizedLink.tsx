'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { localizedPath } from '@/lib/i18n/navigation';

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useLocale();

  return <Link href={localizedPath(href, locale)} {...props} />;
}
