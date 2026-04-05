export interface Tag {
  name: string;
  slug: string;
}

export enum TagSlugs {
  JavaScript = "javascript",
  TypeScript = "typescript",
  TodayILearned = "today-i-learned",
}

export const availableTags: Tag[] = [
  {
    name: "JavaScript",
    slug: TagSlugs.JavaScript,
  },
  {
    name: "TypeScript",
    slug: TagSlugs.TypeScript,
  },
  {
    name: "Today I Learned",
    slug: TagSlugs.TodayILearned,
  },
];
