export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  project?: string;
  quote: string;
  role?: string;
  /** Client photo or avatar path */
  image?: string;
  /** Company logo path */
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Client A',
    company: 'Tech Startup',
    project: 'AI SaaS Dashboard',
    quote: 'David delivered a production-ready SaaS platform in record time. His attention to detail and ability to integrate complex AI features made our MVP launch seamless. Highly recommend!',
    role: 'Founder',
    image: '/images/testimonials/placeholder-avatar.svg',
  },
  {
    id: 'testimonial-2',
    name: 'Client B',
    company: 'Finance Company',
    project: 'Finance Tracker App',
    quote: 'The finance tracker David built for us exceeded expectations. Real-time synchronization works flawlessly, and the UI is intuitive. Great communication throughout the project.',
    role: 'Product Manager',
    image: '/images/testimonials/placeholder-avatar.svg',
  },
  {
    id: 'testimonial-3',
    name: 'BaxAuto Team',
    company: 'BaxAuto',
    project: 'Marketing Website',
    quote: 'David created a beautiful, fast, and SEO-optimized website for us. The site perfectly represents our brand and has already improved our online presence significantly.',
    role: 'Marketing Director',
    logo: '/images/testimonials/placeholder-avatar.svg',
  },
];
