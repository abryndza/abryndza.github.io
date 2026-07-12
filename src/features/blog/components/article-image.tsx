import Image, { type ImageProps } from "next/image";

type ArticleImageProps = Omit<ImageProps, "alt" | "fill"> & {
  alt?: string;
};

export const ArticleImage = ({
  alt,
  sizes,
  className: _className,
  ...props
}: ArticleImageProps) => {
  if (!alt) {
    throw new Error(
      'Article images must include alt text. In MDX posts, import ArticleImage from "@/content/toolkit" and use <ArticleImage src={image} alt="Describe the image" />.',
    );
  }

  return (
    <span className="relative my-4 block aspect-video w-full overflow-hidden rounded-[var(--mantine-radius-md)] bg-light-bg">
      <Image
        {...props}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes || "(max-width: 960px) 100vw, 880px"}
      />
    </span>
  );
};
