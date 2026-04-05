export const importArticle = async (slug: string): Promise<unknown> => {
  const { metadata } = await import(`@/content/posts/${slug}/index.md`);
  return metadata;
};
