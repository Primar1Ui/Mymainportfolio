export type { CaseStudy } from './content/types';

export { getCaseStudies } from './content/case-studies';

import { getCaseStudies } from './content/case-studies';
import { defaultLocale } from './i18n/config';

/** English case studies. Prefer getCaseStudies(locale) for localized content. */
export const caseStudies = getCaseStudies(defaultLocale);
