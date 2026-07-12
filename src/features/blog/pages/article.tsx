import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import {
  ArticleContent,
  ArticleImage,
  MdxBlockquote,
  MdxCode,
  MdxHeading,
  MdxLink,
  MdxList,
  MdxListItem,
  MdxParagraph,
  MdxPre,
  MdxStrong,
} from "@/features/blog/components";
import { getArticle, importArticle } from "@/features/blog/helpers";

type ArticlePageProps = {
  slug: string;
};

const UnsupportedMdxImage = () => {
  throw new Error(
    'MDX posts must use ArticleImage for images. Import ArticleImage from "@/content/toolkit" and use <ArticleImage src={image} alt="Describe the image" />.',
  );
};

const articleMdxComponents: MDXComponents = {
  p: MdxParagraph,
  h2: ({ children }) => <MdxHeading level={2}>{children}</MdxHeading>,
  h3: ({ children }) => <MdxHeading level={3}>{children}</MdxHeading>,
  h4: ({ children }) => <MdxHeading level={4}>{children}</MdxHeading>,
  a: MdxLink,
  blockquote: MdxBlockquote,
  ul: ({ children }) => <MdxList>{children}</MdxList>,
  ol: ({ children }) => <MdxList ordered>{children}</MdxList>,
  li: MdxListItem,
  img: UnsupportedMdxImage,
  code: MdxCode,
  pre: MdxPre,
  strong: MdxStrong,
};

export async function ArticlePage({ slug }: ArticlePageProps) {
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const { default: Content } = await importArticle(slug);

  return (
    <ArticleContent article={article}>
      <Content components={articleMdxComponents} />
    </ArticleContent>
  );
}
