import type { ArticlePreview } from "@/features/blog/contracts";
import { getSlugs } from "./get-slugs";
import { importArticle } from "./import-article";
import { parseArticleMetadata } from "./parse-article-metadata";

export const getArticles = async (
  tagSlug: string,
): Promise<ArticlePreview[]> => {
  const slugs = await getSlugs();

  const promises = slugs.map(async (slug: string) => {
    const { metadata } = await importArticle(slug);
    const parsed = await parseArticleMetadata(metadata);
    return { slug, ...parsed };
  });

  const articles = await Promise.all(promises);

  if (tagSlug) {
    return articles.filter((article) =>
      article.tags.some((tag) => tag.slug === tagSlug),
    );
  }

  return articles;
};
