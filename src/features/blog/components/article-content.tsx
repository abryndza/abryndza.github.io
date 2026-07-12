import { IconClock, IconTags } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { ArticlePreview } from "@/features/blog/contracts";
import { urls } from "../urls";

type ArticleContentProps = {
  article: ArticlePreview;
  children: React.ReactNode;
};

export function ArticleContent({ article, children }: ArticleContentProps) {
  return (
    <article className="mx-auto flex w-full max-w-[48.75rem] flex-col gap-5 pt-9 tablet:gap-7 laptop:pt-12">
      <header className="flex flex-col gap-5">
        <h1 className="text-2xl font-extrabold leading-tight tablet:text-3xl laptop:text-4xl">
          {article.title}
        </h1>

        <div className="flex flex-col gap-3">
          <time
            dateTime={article.creationDate}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <IconClock aria-hidden="true" size={20} stroke={2} />
            {article.creationDate}
          </time>

          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <IconTags aria-hidden="true" size={20} stroke={2} />
            <ul className="flex min-w-0 flex-1 flex-nowrap items-center overflow-x-auto whitespace-nowrap">
              {article.tags.map((tag, index) => (
                <li key={tag.slug}>
                  <Link
                    href={urls.tag(tag.slug)}
                    className={`inline-flex items-center rounded-sm py-0.5 hover:underline ${
                      index === 0
                        ? "pr-1"
                        : index === article.tags.length - 1
                          ? "pl-1"
                          : "px-1"
                    }`}
                  >
                    {tag.name}
                  </Link>
                  {index < article.tags.length - 1 ? (
                    <span aria-hidden="true" className="px-1">
                      &middot;
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div className="overflow-hidden rounded-[var(--mantine-radius-md)] bg-light-bg">
        <div className="relative aspect-video w-full bg-bg">
          <Image
            src={article.imagePreview}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 780px"
          />
        </div>
      </div>

      <div className="blog-mdx flex flex-col gap-5 text-sm leading-7 tablet:text-base tablet:leading-8">
        {children}
      </div>
    </article>
  );
}
