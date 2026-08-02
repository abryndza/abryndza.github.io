import type { ArticlePreview } from "@/features/blog/contracts";
import { urls } from "@/features/blog/urls";
import { ArticleDate } from "./article-date";
import { BackButton } from "./back-button";
import { BackToTopButton } from "./back-to-top-button";
import { TagLink, tagLabel } from "./tag-link";

type ArticleContentProps = {
  article: ArticlePreview;
  children: React.ReactNode;
};

export function ArticleContent({ article, children }: ArticleContentProps) {
  return (
    <>
      <article className="flex w-full flex-col pt-8">
        <BackButton />

        <header className="flex flex-col gap-3">
          <h1 className="wrap-anywhere text-2xl font-bold leading-tight tablet:text-3xl">
            {article.title}
          </h1>

          <ArticleDate creationDate={article.creationDate} size="lg" />

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {article.tags.map((tag) => (
              <li key={tag.slug}>
                <TagLink label={tagLabel(tag)} href={urls.tag(tag.slug)} />
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-8 break-words space-y-5 leading-7">{children}</div>
      </article>

      <BackToTopButton />
    </>
  );
}
