import fs from "node:fs/promises";
import path from "node:path";

const DIR_NAME = "src/content/posts";

const fullPath = path.join(process.cwd(), DIR_NAME);

const extractSlug = (fileName: string): string => {
  return fileName.replace(/\.mdx$/, "");
};

const isArticleFile = (fileName: string): boolean => {
  return fileName.endsWith(".mdx");
};

export const fileSystemClient = {
  async getArticleSlugs(): Promise<string[]> {
    const files = await fs.readdir(fullPath);
    return files.filter(isArticleFile).map(extractSlug);
  },
  async getArticleMetadata(slug: string): Promise<Record<string, unknown>> {
    const { metadata } = await import(`@/content/posts/${slug}.mdx`);
    return metadata;
  },
};
