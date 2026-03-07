import { ArticleCard } from "@/features/blog/components";
import { articlesListService } from "@/features/blog/services";

export async function ListingPage() {
  const articles = await articlesListService.getAll();

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
