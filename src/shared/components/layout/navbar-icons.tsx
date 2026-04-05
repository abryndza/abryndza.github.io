import { UnstyledButton, useMantineColorScheme } from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react";
import { ExternalLink } from "../ui";
import { NavbarIcon } from "./navbar-icon";

const socialLinks = [
  {
    href: "https://github.com/abryndza",
    label: "My Github profile",
    icon: IconBrandGithubFilled,
  },
  {
    href: "https://www.linkedin.com/in/adam-bryndza",
    label: "My LinkedIn profile",
    icon: IconBrandLinkedinFilled,
  },
];

type NavbarIconsProps = {
  size?: number;
  className?: string;
};

export const NavbarIcons = ({ size, className }: NavbarIconsProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <ExternalLink key={link.href} href={link.href} label={link.label}>
            <NavbarIcon className={className}>
              <Icon size={size || 20} />
            </NavbarIcon>
          </ExternalLink>
        );
      })}

      <UnstyledButton
        onClick={() => toggleColorScheme()}
        aria-label="Toggle theme"
      >
        <NavbarIcon className={className}>
          {colorScheme === "dark" ? (
            <IconSunFilled size={size || 20} />
          ) : (
            <IconMoonFilled size={size || 20} />
          )}
        </NavbarIcon>
      </UnstyledButton>
    </>
  );
};
