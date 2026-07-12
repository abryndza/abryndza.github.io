export const urls = {
  article: (slug: string) => `/blog/posts/${slug}`,
  main: () => "/blog",
  tag: (slug: string) => `/blog/${slug}`,
};
