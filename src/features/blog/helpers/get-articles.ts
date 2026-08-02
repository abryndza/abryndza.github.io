import type { ArticlePreview } from "@/features/blog/contracts";
import { getSlugs } from "./get-slugs";
import { importArticle } from "./import-article";
import { parseArticleMetadata } from "./parse-article-metadata";
import { sortArticles } from "./sort-articles";

export const getArticles = async (
  tagSlug?: string,
): Promise<ArticlePreview[]> => {
  const slugs = await getSlugs();

  const promises = slugs.map(async (slug: string) => {
    const { metadata } = await importArticle(slug);
    const parsed = await parseArticleMetadata(metadata);
    return { slug, ...parsed };
  });

  const articles = sortArticles(await Promise.all(promises));

  if (!tagSlug) {
    return articles;
  }

  return articles.filter((article) =>
    article.tags.some((tag) => tag.slug === tagSlug),
  );
};
