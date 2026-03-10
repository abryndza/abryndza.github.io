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
      component={Link}
      href={urls.article(article.slug)}
      padding="lg"
      radius="lg"
      className="max-w-100 min-w-80 cursor-pointer flex flex-col"
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
          <div className="py-4 px-5 flex flex-col grow">
            <Text size="sm" c="dimmed" mb="xs">
              {article.creationDate}
            </Text>

            <Title
              order={3}
              mb={10}
              className="text-xl sm:text-2xl font-bold leading-tight"
            >
              {article.title}
            </Title>

            <Text c="dimmed" lineClamp={3} className="grow" mb={12}>
              {article.intro}
            </Text>

            <Group justify="right" align="center" mt="auto" className="pt-4">
              <Text size="sm" fw={500}>
                Zobacz więcej
              </Text>
            </Group>
          </div>
        </div>
      </Card.Section>
    </Card>
  );
};
