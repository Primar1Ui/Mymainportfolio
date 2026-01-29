/**
 * Analytics utility for tracking user interactions and conversion funnel
 * Works with Vercel Analytics and can be extended for other analytics providers
 */

export type AnalyticsEvent = 
  | 'view_projects'
  | 'view_case_studies'
  | 'download_cv'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'
  | 'whatsapp_click'
  | 'email_click'
  | 'telegram_click'
  | 'github_click'
  | 'linkedin_click'
  | 'project_view_live'
  | 'project_view_code';

export interface AnalyticsEventData {
  event: AnalyticsEvent;
  properties?: Record<string, string | number | boolean>;
}

/**
 * Track an analytics event
 * This function can be extended to send events to multiple analytics providers
 */
export function trackEvent(event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) {
  // Only track in browser environment
  if (typeof window === 'undefined') return;

  try {
    // Vercel Analytics tracking (if available)
    if (window.va) {
      window.va('track', event, properties);
    }

    // Google Analytics 4 tracking (if available)
    if (window.gtag) {
      window.gtag('event', event, properties);
    }

    // Console log for development (remove in production if desired)
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event, properties);
    }
  } catch (error) {
    // Silently fail - analytics should never break the app
    console.error('Analytics error:', error);
  }
}

/**
 * Track conversion funnel steps
 */
export const trackFunnel = {
  heroViewProjects: () => trackEvent('view_projects', { source: 'hero' }),
  heroDownloadCV: () => trackEvent('download_cv', { source: 'hero' }),
  projectsViewCaseStudies: () => trackEvent('view_case_studies', { source: 'projects' }),
  projectViewLive: (projectTitle: string) => trackEvent('project_view_live', { project: projectTitle }),
  projectViewCode: (projectTitle: string) => trackEvent('project_view_code', { project: projectTitle }),
  contactFormSubmit: () => trackEvent('contact_form_submit'),
  contactFormSuccess: () => trackEvent('contact_form_success'),
  contactFormError: (errorType: string) => trackEvent('contact_form_error', { errorType }),
  whatsappClick: (source: string) => trackEvent('whatsapp_click', { source }),
  emailClick: (source: string) => trackEvent('email_click', { source }),
  telegramClick: (source: string) => trackEvent('telegram_click', { source }),
  githubClick: (source: string) => trackEvent('github_click', { source }),
  linkedinClick: (source: string) => trackEvent('linkedin_click', { source }),
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    va?: (action: string, event: string, properties?: Record<string, any>) => void;
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}
