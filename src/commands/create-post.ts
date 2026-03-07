import fs from "node:fs";
import path from "node:path";
import prompts from "prompts";
import { availableTags, TagSlugs } from "@/content/config";

const PROJECT_ROOT = process.cwd();
const POSTS_DIR = path.join(PROJECT_ROOT, "src/content/posts");
const TEMPLATE_PATH = path.join(PROJECT_ROOT, "src/commands/template.mdx");

async function main() {
  const response = await prompts([
    {
      type: "text",
      name: "title",
      message: "Enter the post title:",
      validate: (value: string) =>
        value.length > 0 ? true : "Title is required",
    },
    {
      type: "multiselect",
      name: "tags",
      message: "Select tags:",
      choices: availableTags.map((tag) => ({
        title: tag.name,
        value: tag.slug,
      })),
    },
  ]);

  if (!response.title) {
    console.log("Operation cancelled.");
    return;
  }

  const title = response.title;
  const slug = title
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (match: string) => {
      const map: Record<string, string> = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
      };
      return map[match] || match;
    })
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  const date = new Date().toISOString().split("T")[0];

  const selectedTags = response.tags || [];
  const tagEnumKeys = selectedTags
    .map((slug: string) => {
      const key = Object.keys(TagSlugs).find(
        (k) => TagSlugs[k as keyof typeof TagSlugs] === slug,
      );
      return key ? `TagSlugs.${key}` : null;
    })
    .filter(Boolean);

  const tagsString = `[${tagEnumKeys.join(", ")}]`;

  try {
    const templateContent = fs.readFileSync(TEMPLATE_PATH, "utf-8");
    const newContent = templateContent
      .replace("{{title}}", title)
      .replace("{{creationDate}}", date)
      .replace("{{tags}}", tagsString);

    const postDir = path.join(POSTS_DIR, slug);

    if (fs.existsSync(postDir)) {
      console.error(`Error: Post directory '${slug}' already exists.`);
      return;
    }

    fs.mkdirSync(postDir, { recursive: true });

    const postPath = path.join(postDir, "index.mdx");
    fs.writeFileSync(postPath, newContent);

    console.log(`✅ Post created successfully!`);
    console.log(`Path: src/content/posts/${slug}/index.mdx`);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

main();
