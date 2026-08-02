import type { Tag } from "@/features/blog/contracts";

export const describeTag = (tag: Tag): string =>
  `Wpisy oznaczone tagiem „${tag.name}”.`;
