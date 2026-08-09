import { SocialLinks } from "@/shared/components/social-links";

const HERO_DESCRIPTION =
  "Piszę o automatyzacji i optymalizacji pracy w dobie AI oraz zmianach w rozwoju oprogramowania. Czasem pojawią się też inne tematy.";

export function HomeHero() {
  return (
    <section className="border-b border-border pt-8 pb-6">
      <h1 className="my-4 text-4xl font-bold tablet:my-8 tablet:text-5xl">
        Blog
      </h1>

      <p className="mt-2 mb-6 italic text-prose-foreground">
        {HERO_DESCRIPTION}
      </p>

      <div className="flex items-center gap-4">
        <span className="text-muted-foreground">Znajdziesz mnie tu:</span>

        <SocialLinks />
      </div>
    </section>
  );
}
