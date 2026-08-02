import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import {
  ArticleContent,
  MdxBlockquote,
  MdxCode,
  MdxHeading,
  MdxHorizontalRule,
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
  h2: ({ id, children, ...props }) => (
    <MdxHeading level={2} id={id} {...props}>
      {children}
    </MdxHeading>
  ),
  h3: ({ id, children, ...props }) => (
    <MdxHeading level={3} id={id} {...props}>
      {children}
    </MdxHeading>
  ),
  h4: ({ id, children, ...props }) => (
    <MdxHeading level={4} id={id} {...props}>
      {children}
    </MdxHeading>
  ),
  h5: ({ id, children, ...props }) => (
    <MdxHeading level={5} id={id} {...props}>
      {children}
    </MdxHeading>
  ),
  h6: ({ id, children, ...props }) => (
    <MdxHeading level={6} id={id} {...props}>
      {children}
    </MdxHeading>
  ),
  a: MdxLink,
  blockquote: MdxBlockquote,
  ul: MdxList,
  ol: ({ children, ...props }) => (
    <MdxList ordered {...props}>
      {children}
    </MdxList>
  ),
  li: MdxListItem,
  strong: MdxStrong,
  code: MdxCode,
  pre: MdxPre,
  hr: MdxHorizontalRule,
  img: UnsupportedMdxImage,
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
