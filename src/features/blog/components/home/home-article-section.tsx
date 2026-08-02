import { ArticleItem } from "@/features/blog/components";
import type { ArticlePreview } from "@/features/blog/contracts";

type HomeArticleSectionProps = {
  articles: ArticlePreview[];
  hasBottomBorder?: boolean;
  title: string;
};

export function HomeArticleSection({
  articles,
  hasBottomBorder = false,
  title,
}: HomeArticleSectionProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      className={`pt-12 pb-6 ${hasBottomBorder ? "border-b border-border" : ""}`}
    >
      <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
      <ul>
        {articles.map((article) => (
          <ArticleItem key={article.slug} article={article} headingLevel={3} />
        ))}
      </ul>
    </section>
  );
}
