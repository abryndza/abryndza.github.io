export const urls = {
  article: (slug: string) => `new-blog/${slug}`,
  main: () => `/new-blog`,
  tag: (slug: string) => `/new-blog/${slug}`,
};
