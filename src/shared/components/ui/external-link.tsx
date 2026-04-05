import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  label: string;
};

export const ExternalLink = ({ href, label, children }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </Link>
  );
};
