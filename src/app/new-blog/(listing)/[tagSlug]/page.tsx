import { availableTags, ListingPage } from "@/features/blog";
import type { PageParams } from "@/shared/interfaces";

export default async function Tag({ params }: PageParams<{ tagSlug: string }>) {
  const { tagSlug } = await params;
  return <ListingPage tagSlug={tagSlug} />;
}

export const generateStaticParams = async () => {
  return availableTags.map((tag) => ({ tagSlug: tag.slug }));
};
