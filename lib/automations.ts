export type { Automation } from './content/types';

export {
  getAutomations,
  getHomepageAutomations,
  HOMEPAGE_AUTOMATION_IDS,
} from './content/automations';

import { getAutomations, getHomepageAutomations } from './content/automations';
import { defaultLocale } from './i18n/config';

/** English automations. Prefer getAutomations(locale). */
export const automations = getAutomations(defaultLocale);

/** @deprecated Use getHomepageAutomations(locale). */
export const homepageSelectedAutomations = getHomepageAutomations(defaultLocale);
