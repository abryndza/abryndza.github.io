import type { ArticlePreview } from "@/features/blog/contracts";
import { HomeArticleSection } from "./home-article-section";

const LATEST_ARTICLES_LIMIT = 4;

type HomeArticlesProps = {
  articles: ArticlePreview[];
};

export function HomeArticles({ articles }: HomeArticlesProps) {
  const featuredArticles = articles.filter((article) => article.isFeatured);
  const latestArticles = articles
    .filter((article) => !article.isFeatured)
    .slice(0, LATEST_ARTICLES_LIMIT);

  return (
    <>
      <HomeArticleSection
        title="Wyróżnione"
        articles={featuredArticles}
        hasBottomBorder={latestArticles.length > 0}
      />
      <HomeArticleSection title="Najnowsze wpisy" articles={latestArticles} />
    </>
  );
}
