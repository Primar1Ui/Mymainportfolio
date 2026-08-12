export type { BlogPost } from './content/types';

export {
  getAllBlogSlugs,
  getAllBlogTags,
  getBlogPosts,
  getFeaturedPosts,
  getLatestPost,
  getPostBySlug,
} from './content/blog';

import { getBlogPosts } from './content/blog';
import { defaultLocale } from './i18n/config';

/** English posts. Prefer getBlogPosts(locale) for localized content. */
export const blogPosts = getBlogPosts(defaultLocale);
