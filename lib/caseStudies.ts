export interface CaseStudy {
  id: string;
  title: string;
  client?: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: string;
  metrics?: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-saas-dashboard',
    title: 'AI SaaS Dashboard',
    problem: 'A startup needed a scalable SaaS platform with AI capabilities, user authentication, and analytics. They required a solution that could handle rapid user growth while maintaining performance.',
    solution: 'Built a full-stack Next.js application with Supabase for authentication and database management. Integrated AI features using modern APIs, implemented real-time analytics dashboard, and designed a responsive UI with Tailwind CSS. The architecture supports horizontal scaling and includes proper error handling and loading states.',
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript', 'React'],
    results: 'Delivered a production-ready SaaS MVP in 3 weeks. The platform successfully handles user authentication, real-time data updates, and AI-powered features. The modular architecture allows for easy feature additions.',
    metrics: [
      '3 weeks development time',
      '100% authentication success rate',
      'Sub-second page load times',
    ],
    github: 'https://github.com/Primar1Ui/ai-web-canvas',
    featured: true,
  },
  {
    id: 'finance-tracker-app',
    title: 'Finance Tracker App',
    problem: 'A client needed a custom finance tracking solution that could sync expenses in real-time across devices, provide budgeting insights, and maintain data privacy without relying on third-party financial services.',
    solution: 'Developed a React-based application with Supabase backend for real-time synchronization. Implemented secure data storage, expense categorization, budget tracking, and visual analytics. Built responsive design for mobile and desktop access.',
    techStack: ['React', 'Supabase', 'JavaScript', 'CSS'],
    results: 'Created a fully functional finance tracker that provides real-time expense tracking and budgeting insights. The client now has complete visibility into their cash flow with a private, secure solution.',
    metrics: [
      'Real-time data synchronization',
      '100% data privacy (self-hosted)',
      'Mobile-responsive design',
    ],
    github: 'https://github.com/Primar1Ui/dapper-access',
    featured: true,
  },
  {
    id: 'baxauto-website',
    title: 'BaxAuto Marketing Website',
    problem: 'BaxAuto needed a modern, professional marketing website to showcase their services and attract new clients. The site needed to be fast, SEO-friendly, and reflect their brand identity.',
    solution: 'Designed and developed a clean, modern landing page using Next.js and Tailwind CSS. Focused on clear service presentation, fast loading times, and mobile-first responsive design. Implemented proper SEO optimization and accessibility features.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    results: 'Delivered a responsive, high-performance marketing website that effectively communicates BaxAuto\'s services. The site loads quickly, ranks well in search engines, and provides an excellent user experience across all devices.',
    metrics: [
      'Fast page load times',
      'SEO optimized',
      'Fully responsive design',
    ],
    github: 'https://github.com/Primar1Ui/v0-baxauto-website-development',
    featured: false,
  },
];
