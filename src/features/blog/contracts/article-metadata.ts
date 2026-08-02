import type { StaticImageData } from "next/image";
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

const staticImageDataSchema = z.custom<StaticImageData>(
  (image): image is StaticImageData => {
    return (
      typeof image === "object" &&
      image !== null &&
      "src" in image &&
      typeof image.src === "string" &&
      "width" in image &&
      typeof image.width === "number" &&
      "height" in image &&
      typeof image.height === "number"
    );
  },
  { message: "Expected a statically imported image" },
);

const articleMetadata = z.object({
  title: z.string(),
  intro: z.string(),
  creationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Expected an ISO calendar date (YYYY-MM-DD)",
  }),
  isFeatured: z.boolean(),
  imagePreview: staticImageDataSchema,
  tags: z.array(tagSchema),
});

export type ArticleMetadata = z.infer<typeof articleMetadata>;

export const tryParseArticleMetadata =
  createContractParser<z.infer<typeof articleMetadata>>(articleMetadata);
