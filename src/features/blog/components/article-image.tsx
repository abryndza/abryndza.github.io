import type { ImageProps } from "next/image";
import type { ReactNode } from "react";
import { ArticleImageZoom } from "./article-image-zoom";

type ArticleImageProps = {
	src: ImageProps["src"];
	alt?: string;
	caption?: ReactNode;
	sizes?: string;
};

export const ArticleImage = ({
	src,
	alt,
	caption,
	sizes,
}: ArticleImageProps) => {
	if (!alt) {
		throw new Error(
			'Article images must include alt text. In MDX posts, import ArticleImage from "@/content/toolkit" and use <ArticleImage src={image} alt="Describe the image" />.',
		);
	}

	return (
		<figure className="my-6 [&_img]:mx-auto [&_img]:rounded-none [&_img]:border-0">
			<ArticleImageZoom src={src} alt={alt} sizes={sizes} />
			{caption ? (
				<figcaption className="mt-2 text-center text-sm text-muted-foreground">
					{caption}
				</figcaption>
			) : null}
		</figure>
	);
};
