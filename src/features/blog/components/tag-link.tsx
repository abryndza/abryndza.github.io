import Link from "next/link";
import type { Tag } from "@/features/blog/contracts";

interface TagLinkProps {
	label: string;
	href: string;
	isCurrent?: boolean;
}

export const tagLabel = (tag: Tag) => `#${tag.name}`;

export const TagLink = ({ label, href, isCurrent = false }: TagLinkProps) => {
	if (isCurrent) {
		return (
			<span
				aria-current="page"
				className="active-nav inline-block wrap-anywhere"
			>
				{label}
			</span>
		);
	}

	return (
		<Link
			href={href}
			className="dashed-link inline-block wrap-anywhere decoration-2 hover:text-accent hover:decoration-accent"
		>
			{label}
		</Link>
	);
};
