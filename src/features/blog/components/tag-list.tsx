import { availableTags } from "@/features/blog/contracts";
import { urls } from "@/features/blog/urls";
import { TagLink, tagLabel } from "./tag-link";

interface TagListProps {
	currentTagSlug?: string;
}

export const TagList = ({ currentTagSlug }: TagListProps) => {
	return (
		<nav aria-label="Filtr tagów">
			<ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
				<li>
					<TagLink
						label="Wszystkie"
						href={urls.main()}
						isCurrent={!currentTagSlug}
					/>
				</li>

				{availableTags.map((tag) => (
					<li key={tag.slug}>
						<TagLink
							label={tagLabel(tag)}
							href={urls.tag(tag.slug)}
							isCurrent={tag.slug === currentTagSlug}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};
