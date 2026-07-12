export const urls = {
  article: (slug: string) => `/new-blog/posts/${slug}`,
  main: () => `/new-blog`,
  tag: (slug: string) => `/new-blog/${slug}`,
};
