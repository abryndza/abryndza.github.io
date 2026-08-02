import type { ArticlePreview } from "@/features/blog/contracts";

const compare = (left: string, right: string) => {
	if (left === right) {
		return 0;
	}

	return left < right ? -1 : 1;
};

export const sortArticles = (articles: ArticlePreview[]): ArticlePreview[] =>
	[...articles].sort(
		(left, right) =>
			compare(right.creationDate, left.creationDate) ||
			compare(left.slug, right.slug),
	);
