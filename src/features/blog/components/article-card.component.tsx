"use client";

import { Card, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import type { ArticleMetadata } from "@/features/blog/interfaces";
import { urls } from "@/features/blog/urls";

export interface ArticleCardProps {
  article: ArticleMetadata;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card
      bg="transparent"
      component={Link}
      href={urls.blogArticle(article.slug)}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="max-w-100 cursor-pointer flex flex-col h-full"
    >
      <Card.Section>
        <div className="relative w-full aspect-video bg-gray-100 dark:bg-zinc-800">
          <Image
            src={article.imagePreview}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Card.Section>

      <div className="mt-4 flex flex-col grow">
        <Text size="sm" c="dimmed" mb="xs">
          {article.creationDate}
        </Text>

        <Title
          order={3}
          className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
        >
          {article.title}
        </Title>

        <Text c="dimmed" lineClamp={3} className="grow mb-4">
          {article.intro}
        </Text>

        <Group justify="right" align="center" mt="auto" className="pt-4">
          <Text size="sm" fw={500}>
            Read more
          </Text>
        </Group>
      </div>
    </Card>
  );
};
