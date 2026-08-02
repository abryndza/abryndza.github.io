import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type MdxLinkProps = ComponentPropsWithoutRef<"a">;

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

export const MdxLink = ({
  className,
  href = "",
  children,
  ...props
}: MdxLinkProps) => {
  const linkClassName = `dashed-link break-words hover:text-accent ${
    className ?? ""
  }`;

  if (isExternalHref(href)) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={linkClassName} {...props}>
      {children}
    </Link>
  );
};
