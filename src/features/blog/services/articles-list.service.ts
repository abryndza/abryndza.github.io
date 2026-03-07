import z from "zod";
import { availableTags } from "@/content/config";
import type { ArticleMetadata, Tag } from "@/features/blog/interfaces";
import { fileSystemClient } from "@/features/blog/libs/file-system-client.lib";
import { createContract } from "@/shared/lib/contract.lib";

const inputMetadataSchema = z.object({
  title: z.string(),
  intro: z.string(),
  creationDate: z.string(),
  imagePreview: z.any(),
  tags: z.array(z.string()),
});

const checkInputMetadataContract =
  createContract<z.infer<typeof inputMetadataSchema>>(inputMetadataSchema);

const fetchTagsOrFail = (rawTags: string[], slug: string) => {
  const tags: Tag[] = [];

  for (const tagSlug of rawTags) {
    const tag = availableTags.find((tag) => tag.slug === tagSlug);

    if (!tag) {
      console.error(
        `Unknown tag slug: "${tagSlug}" in article with slug "${slug}"`,
      );
      process.exit(1);
    }
    tags.push(tag);
  }

  return tags;
};

const fetchArticleMetadataOrFail = async (
  slug: string,
): Promise<ArticleMetadata> => {
  const rawMetadata = await fileSystemClient.getArticleMetadata(slug);
  const result = checkInputMetadataContract(rawMetadata);

  if (!result.success) {
    console.error(
      `Article with slug "${slug}" has invalid metadata: ${JSON.stringify(result.failure)}`,
    );
    process.exit(1);
  }

  const { tags: rawTags, ...articleData } = result.data;
  const tags = fetchTagsOrFail(rawTags, slug);

  return {
    ...articleData,
    slug,
    tags,
  };
};

export const articlesListService = {
  async getAll(): Promise<ArticleMetadata[]> {
    const slugs = await fileSystemClient.getArticleSlugs();
    return await Promise.all(slugs.map(fetchArticleMetadataOrFail));
  },
};
