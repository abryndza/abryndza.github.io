import { notFound } from "next/navigation";
import {
  ArticleItem,
  type Breadcrumb,
  Breadcrumbs,
  TagList,
} from "@/features/blog/components";
import { describeTag, findTag, getArticles } from "@/features/blog/helpers";
import { urls } from "@/features/blog/urls";

type ListingPageProps = {
  tagSlug?: string;
};

const LISTING_DESCRIPTION =
  "Wszystkie wpisy w jednym miejscu. Zawęź listę tagiem, jeśli szukasz konkretnego tematu.";

export async function ListingPage({ tagSlug }: ListingPageProps) {
  const tag = tagSlug ? findTag(tagSlug) : undefined;

  if (tagSlug && !tag) {
    notFound();
  }

  const articles = await getArticles(tagSlug);

  const breadcrumbs: Breadcrumb[] = [
    { label: "Strona główna", href: urls.home() },
    tag ? { label: "Wpisy", href: urls.main() } : { label: "Wpisy" },
    ...(tag ? [{ label: tag.name }] : []),
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="my-4 break-words text-2xl font-bold tablet:text-3xl">
        {tag ? `Tag: ${tag.name}` : "Wpisy"}
      </h1>

      <p className="mt-2 mb-6 break-words italic text-prose-foreground">
        {tag ? describeTag(tag) : LISTING_DESCRIPTION}
      </p>

      <div className="border-b border-border pb-6">
        <TagList currentTagSlug={tagSlug} />
      </div>

      {articles.length === 0 ? (
        <p className="mt-8 text-muted-foreground">
          {tag
            ? "Pod tym tagiem nie ma jeszcze wpisów."
            : "Nie ma tu jeszcze żadnych wpisów."}
        </p>
      ) : (
        <ul className="mt-8">
          {articles.map((article) => (
            <ArticleItem key={article.slug} article={article} />
          ))}
        </ul>
      )}
    </>
  );
}
