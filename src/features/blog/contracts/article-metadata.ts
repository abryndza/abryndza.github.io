import z from "zod";
import { createContractParser } from "@/shared/helpers";
import { availableTags, type Tag } from "./tag";

const tagSchema = z.string().transform<Tag>((tagSlug, ctx) => {
  const tag = availableTags.find((candidate) => candidate.slug === tagSlug);

  if (!tag) {
    ctx.addIssue({
      code: "custom",
      message: `Unknown tag slug: "${tagSlug}"`,
    });

    return z.NEVER;
  }

  return tag;
});

const articleMetadata = z.object({
  title: z.string(),
  intro: z.string(),
  creationDate: z.string(),
  imagePreview: z.any(),
  tags: z.array(tagSchema),
});

export type ArticleMetadata = z.infer<typeof articleMetadata>;

export const tryParseArticleMetadata =
  createContractParser<z.infer<typeof articleMetadata>>(articleMetadata);
