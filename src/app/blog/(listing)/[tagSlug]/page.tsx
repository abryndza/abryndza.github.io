import { availableTags } from "@/content/config";
import { ListingPage } from "@/features/blog";

export default async function Tag() {
  return <ListingPage />;
}

export const generateStaticParams = async () => {
  return availableTags.map((tag) => ({ tagSlug: tag.slug }));
};
