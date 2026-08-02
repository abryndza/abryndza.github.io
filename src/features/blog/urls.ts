export const urls = {
  article: (slug: string) => `/blog/posts/${slug}`,
  home: () => "/",
  main: () => "/blog",
  tag: (slug: string) => `/blog/${slug}`,
};
