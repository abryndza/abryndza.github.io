import { availableTags, type Tag } from "@/features/blog/contracts";

export const findTag = (slug: string): Tag | undefined =>
  availableTags.find((tag) => tag.slug === slug);
