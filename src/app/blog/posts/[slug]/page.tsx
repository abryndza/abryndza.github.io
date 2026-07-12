import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage, getArticle, getSlugs } from "@/features/blog";
import type { PageParams } from "@/shared/interfaces";

export const dynamicParams = false;

type ArticleParams = {
  slug: string;
};

export default async function Article({ params }: PageParams<ArticleParams>) {
  const { slug } = await params;

  return <ArticlePage slug={slug} />;
}

export const generateStaticParams = async () => {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PageParams<ArticleParams>): Promise<Metadata> => {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return {
    title: article.title,
    description: article.intro,
    openGraph: {
      title: article.title,
      description: article.intro,
      type: "article",
      images: [{ url: article.imagePreview.src }],
    },
  };
};
