import path from "node:path";

type ArticleModule = {
  metadata: Record<string, unknown>;
};

export const articlesDirectoryPath = path.join(
  process.cwd(),
  "src/content/posts",
);

export const importArticle = async (slug: string): Promise<ArticleModule> => {
  return await import(`@/content/posts/${slug}/index.mdx`);
};
