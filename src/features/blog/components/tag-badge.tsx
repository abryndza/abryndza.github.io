import Link from "next/link";

interface TagBadgeProps {
  name: string;
  isSelected?: boolean;
  href: string;
  className?: string;
}

export const TagBadge = ({
  name,
  isSelected = false,
  href,
  className = "",
}: TagBadgeProps) => {
  const baseClasses =
    "px-3 py-1 tablet:px-4 tablet:py-2 rounded-lg border-2 border-solid transition duration-500 ease-in-out text-sm tablet:text-base inline-block";

  const activeClasses =
    "bg-gray-900 text-white border-gray-900 font-bold hover:bg-gray-700 hover:border-gray-700 cursor-default dark:bg-zinc-400 dark:text-gray-900 dark:border-zinc-400 dark:hover:bg-zinc-300 dark:hover:border-zinc-300";

  const inactiveClasses =
    "text-gray-700 bg-gray-100 border-gray-300 hover:bg-gray-200 cursor-pointer dark:text-gray-400 dark:bg-zinc-800 dark:border-zinc-600 dark:hover:bg-zinc-950";

  const combinedClasses = `${baseClasses} ${
    isSelected ? activeClasses : inactiveClasses
  } ${className}`.trim();

  return (
    <Link
      scroll={false}
      href={href}
      onClick={(e) => {
        if (isSelected) e.preventDefault();
      }}
      aria-current={isSelected ? "page" : undefined}
      className={combinedClasses}
    >
      {name}
    </Link>
  );
};
