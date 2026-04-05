import fs from "node:fs/promises";
import path from "node:path";

const fullPath = path.join(process.cwd(), "src/content/posts");

export const getSlugs = async (): Promise<string[]> => {
  const entries = await fs.readdir(fullPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
};
