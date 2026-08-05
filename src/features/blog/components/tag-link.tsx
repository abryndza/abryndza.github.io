import Link from "next/link";
import type { Tag } from "@/features/blog/contracts";

interface TagLinkProps {
	label: string;
	href: string;
	isCurrent?: boolean;
	hasUnderline?: boolean;
}

export const tagLabel = (tag: Tag) => `#${tag.name}`;

export const TagLink = ({
	label,
	href,
	isCurrent = false,
	hasUnderline = true,
}: TagLinkProps) => {
	if (isCurrent) {
		return (
			<span
				aria-current="page"
				className="dashed-link inline-block wrap-anywhere text-accent decoration-2 decoration-accent"
			>
				{label}
			</span>
		);
	}

	return (
		<Link
			href={href}
			className={`inline-block wrap-anywhere hover:text-accent ${
				hasUnderline ? "dashed-link decoration-2 hover:decoration-accent" : ""
			}`}
		>
			{label}
		</Link>
	);
};
