import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const HERO_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const socialLinks = [
  {
    href: "https://github.com/abryndza",
    label: "GitHub",
    icon: IconBrandGithub,
  },
  {
    href: "https://www.linkedin.com/in/adam-bryndza",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
  },
];

export function HomeHero() {
  return (
    <section className="border-b border-border pt-8 pb-6">
      <h1 className="my-4 text-4xl font-bold tablet:my-8 tablet:text-5xl">
        Blog
      </h1>

      <p className="mt-2 mb-6 italic">{HERO_DESCRIPTION}</p>

      <div className="flex items-center gap-4">
        <span className="text-muted-foreground">Znajdziesz mnie tu:</span>

        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.href}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent"
            >
              <Icon aria-hidden="true" size={24} stroke={2} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
