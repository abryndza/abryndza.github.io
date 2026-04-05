import { ArticleCard } from "@/features/blog/components";
import { getArticles } from "@/features/blog/helpers";

type ListingPageProps = {
  tagSlug?: string;
};

export async function ListingPage({ tagSlug }: ListingPageProps) {
  const articles = await getArticles(tagSlug || "");

  if (articles.length === 0) {
    return (
      <div className="col-span-full flex justify-center text-base text-gray-600 dark:text-gray-400">
        Brak wpisów dla tego tagu.
      </div>
    );
  }

  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </>
  );
}
