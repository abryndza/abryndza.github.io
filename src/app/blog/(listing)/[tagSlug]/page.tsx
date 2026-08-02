import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  availableTags,
  describeTag,
  findTag,
  ListingPage,
} from "@/features/blog";
import type { PageParams } from "@/shared/interfaces";

type TagParams = {
  tagSlug: string;
};

export default async function Tag({ params }: PageParams<TagParams>) {
  const { tagSlug } = await params;
  return <ListingPage tagSlug={tagSlug} />;
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return availableTags.map((tag) => ({ tagSlug: tag.slug }));
};

export const generateMetadata = async ({
  params,
}: PageParams<TagParams>): Promise<Metadata> => {
  const { tagSlug } = await params;
  const tag = findTag(tagSlug);

  if (!tag) {
    notFound();
  }

  return {
    title: `Tag: ${tag.name}`,
    description: describeTag(tag),
  };
};
