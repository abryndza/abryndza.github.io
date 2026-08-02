import Link from "next/link";

export type Breadcrumb = {
	label: string;
	href?: string;
};

interface BreadcrumbsProps {
	items: Breadcrumb[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<nav aria-label="breadcrumb" className="mt-8 mb-2">
			<ul className="flex flex-wrap items-center gap-x-1 font-light">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					const key = item.href ?? index;

					if (isLast || !item.href) {
						return (
							<li key={key}>
								<span aria-current="page" className="wrap-anywhere opacity-75">
									{item.label}
								</span>
							</li>
						);
					}

					return (
						<li key={key} className="flex items-center gap-x-1">
							<Link href={item.href} className="opacity-70 hover:opacity-100">
								{item.label}
							</Link>
							<span aria-hidden="true" className="opacity-70">
								&raquo;
							</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
