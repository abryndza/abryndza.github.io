import Link from "next/link";

interface TagBadgeProps {
  name: string;
  isSelected?: boolean;
  href?: string;
  className?: string;
}

export const TagBadge = ({
  name,
  isSelected = false,
  href,
  className = "",
}: TagBadgeProps) => {
  const baseClasses =
    "text-gray-400 bg-zinc-800 px-4 py-2 rounded-lg border-2 border-solid border-zinc-600 transition duration-500 ease-in-out text-md inline-block cursor-pointer";
  const hoverClasses =
    "hover:bg-zinc-950 aria-[current=page]:hover:bg-zinc-300 aria-[current=page]:hover:border-zinc-300";
  const activeClasses =
    "aria-[current=page]:bg-zinc-400 aria-[current=page]:text-gray-900 aria-[current=page]:border-zinc-400 aria-[current=page]:font-bold";

  const combinedClasses = `${baseClasses} ${hoverClasses} ${activeClasses} ${className}`;

  if (href) {
    return (
      <Link
        scroll={false}
        href={href}
        aria-current={isSelected ? "page" : undefined}
        className={combinedClasses}
      >
        {name}
      </Link>
    );
  }

  return (
    <span
      aria-current={isSelected ? "page" : undefined}
      className={combinedClasses}
    >
      {name}
    </span>
  );
};
