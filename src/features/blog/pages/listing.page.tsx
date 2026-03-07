import { ArticleCard } from "@/features/blog/components";
import { articlesListService } from "@/features/blog/services";

export async function ListingPage() {
  const articles = await articlesListService.getAll();

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-7 xl:gap-9">
        <div className="col-span-full">
          <h1 className="text-5xl font-bold">Posts</h1>
        </div>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
