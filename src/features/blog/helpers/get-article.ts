import type { ArticlePreview } from "@/features/blog/contracts";
import { getSlugs } from "./get-slugs";
import { importArticle } from "./import-article";
import { parseArticleMetadata } from "./parse-article-metadata";

export const getArticle = async (
  slug: string,
): Promise<ArticlePreview | null> => {
  const slugs = await getSlugs();

  if (!slugs.includes(slug)) {
    return null;
  }

  const { metadata } = await importArticle(slug);
  const parsed = await parseArticleMetadata(metadata);

  return { slug, ...parsed };
};
