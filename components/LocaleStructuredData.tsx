import { getPageMeta } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { professionalServiceSchema, websiteSchema } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

type Props = {
  locale: Locale;
};

export default function LocaleStructuredData({ locale }: Props) {
  const meta = getPageMeta(locale, 'home');
  const siteUrl = `${SITE_URL}/${locale}`;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteSchema({ description: meta.description, locale, siteUrl })
          ),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            professionalServiceSchema({ description: meta.description, locale, siteUrl })
          ),
        }}
      />
    </>
  );
}
