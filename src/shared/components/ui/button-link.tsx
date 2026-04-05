import Link, { type LinkProps } from "next/link";

export interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({
  children,
  className = "",
  ...props
}: ButtonLinkProps) => {
  const baseClasses =
    "px-6 py-3 laptop:px-8 laptop:py-4 bg-light-bg hover:bg-gray-200 dark:hover:bg-zinc-800 text-foreground font-bold rounded-lg transition duration-500 ease-in-out border-2 border-transparent hover:border-gray-300 dark:hover:border-zinc-600 inline-block";

  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Link className={combinedClasses} {...props}>
      {children}
    </Link>
  );
};
