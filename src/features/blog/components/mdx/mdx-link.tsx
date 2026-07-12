import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

type MdxLinkProps = {
  children?: React.ReactNode;
  href?: string;
};

const isExternalHref = (href: string) => {
  return /^(https?:)?\/\//.test(href);
};

export const MdxLink = ({ href = "", children }: MdxLinkProps) => {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline decoration-gray-400 underline-offset-4 hover:decoration-foreground"
      >
        {children}
        <span className="ml-1 inline-block whitespace-nowrap">
          <IconExternalLink
            aria-hidden="true"
            size={16}
            stroke={2}
            className="inline"
          />
        </span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-foreground underline decoration-gray-400 underline-offset-4 hover:decoration-foreground"
    >
      {children}
    </Link>
  );
};
