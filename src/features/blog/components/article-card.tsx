"use client";

import { Card } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import type { ArticlePreview } from "@/features/blog/contracts";
import { urls } from "@/features/blog/urls";

export interface ArticleCardProps {
  article: ArticlePreview;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card
      component={Link}
      href={urls.article(article.slug)}
      padding="lg"
      radius="lg"
      className="flex h-full w-full cursor-pointer flex-col"
    >
      <Card.Section>
        <div className="relative w-full aspect-video bg-bg">
          <Image
            src={article.imagePreview}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Card.Section>
      <Card.Section>
        <div className="bg-light-bg">
          <div className="py-3 px-3 tablet:py-4 tablet:px-5 flex flex-col grow">
            <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-400 mb-2 tablet:mb-2.5">
              {article.creationDate}
            </p>

            <h3 className="text-lg tablet:text-2xl font-bold leading-tight mb-2 tablet:mb-2.5">
              {article.title}
            </h3>

            <p className="line-clamp-3 grow text-sm tablet:text-base text-gray-600 dark:text-gray-400 mb-2 tablet:mb-3">
              {article.intro}
            </p>

            <div className="flex justify-end items-center mt-auto pt-4">
              <span className="text-xs tablet:text-sm font-medium">
                Zobacz więcej
              </span>
            </div>
          </div>
        </div>
      </Card.Section>
    </Card>
  );
};
