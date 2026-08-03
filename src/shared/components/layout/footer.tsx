import { SocialLinks } from "@/shared/components/social-links";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-layout">
      <div className="flex flex-col items-center justify-between border-t border-border py-6 tablet:flex-row-reverse tablet:py-4">
        <SocialLinks />

        <span className="my-2 text-sm text-muted-foreground">
          © {year} Adam Bryndza
        </span>
      </div>
    </footer>
  );
};
