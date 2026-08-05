import Link from "next/link";
import type { ArticlePreview } from "@/features/blog/contracts";
import { urls } from "@/features/blog/urls";
import { ArticleDate } from "./article-date";

export interface ArticleItemProps {
  article: ArticlePreview;
  headingLevel?: 2 | 3;
}

const HEADING_SIZES = {
  2: "text-xl",
  3: "text-lg",
} as const;

export const ArticleItem = ({
  article,
  headingLevel = 2,
}: ArticleItemProps) => {
  const Heading = `h${headingLevel}` as const;

  return (
    <li className="my-6">
      <Heading
        className={`wrap-anywhere font-medium ${HEADING_SIZES[headingLevel]}`}
      >
        <Link
          href={urls.article(article.slug)}
          className="inline-block wrap-anywhere text-accent underline-offset-4 hover:underline hover:decoration-dashed"
        >
          {article.title}
        </Link>
      </Heading>

      <ArticleDate creationDate={article.creationDate} />

      <p className="mt-1 wrap-anywhere text-prose-foreground">
        {article.intro}
      </p>
    </li>
  );
};
