import {
  HomeAllArticlesLink,
  HomeArticles,
  HomeHero,
} from "@/features/blog/components/home";
import { getArticles } from "@/features/blog/helpers";

export async function HomePage() {
  const articles = await getArticles();

  return (
    <>
      <HomeHero />
      <HomeArticles articles={articles} />
      <HomeAllArticlesLink />
    </>
  );
}
