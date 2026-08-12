export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  featured?: boolean;
}

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

export interface FaqItem {
  question: string;
  answer: string;
}
