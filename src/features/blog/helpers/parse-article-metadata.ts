import {
  type ArticleMetadata,
  tryParseArticleMetadata,
} from "@/features/blog/contracts";
import { getPayload } from "@/shared/helpers";

export const parseArticleMetadata = async (
  raw: Record<string, unknown>,
): Promise<ArticleMetadata> => {
  return getPayload(tryParseArticleMetadata(raw));
};
