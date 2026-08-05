import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

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

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.href}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent"
          >
            <Icon aria-hidden="true" size={24} stroke={2} />
          </a>
        );
      })}
    </div>
  );
};
