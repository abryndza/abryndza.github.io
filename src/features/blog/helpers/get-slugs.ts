import fs from "node:fs/promises";
import { articlesDirectoryPath } from "./import-article";

export const getSlugs = async (): Promise<string[]> => {
  const entries = await fs.readdir(articlesDirectoryPath, {
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
};
