import type { Tag } from "./tag.contract";

export interface ArticleMetadata {
  slug: string;
  title: string;
  intro: string;
  creationDate: string;
  imagePreview: string;
  tags: Tag[];
}
