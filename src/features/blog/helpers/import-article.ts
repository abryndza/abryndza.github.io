import path from "node:path";
import type { MDXContent } from "mdx/types";

type ArticleModule = {
  default: MDXContent;
  metadata: Record<string, unknown>;
};

export const articlesDirectoryPath = path.join(
  process.cwd(),
  "src/content/posts",
);

export const importArticle = async (slug: string): Promise<ArticleModule> => {
  return await import(`@/content/posts/${slug}/index.mdx`);
};
