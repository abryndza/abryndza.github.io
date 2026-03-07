import fs from "node:fs/promises";
import path from "node:path";

const DIR_NAME = "src/content/posts";

const fullPath = path.join(process.cwd(), DIR_NAME);

export const fileSystemClient = {
  async getArticleSlugs(): Promise<string[]> {
    const entries = await fs.readdir(fullPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  },
  async getArticleMetadata(slug: string): Promise<Record<string, unknown>> {
    const { metadata } = await import(`@/content/posts/${slug}/index.mdx`);
    return metadata;
  },
};
