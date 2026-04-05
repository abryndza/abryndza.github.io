import type { ReactNode } from "react";

type NavbarIconProps = {
  children?: ReactNode;
  className?: string;
};

export const NavbarIcon = ({ children, className }: NavbarIconProps) => {
  return (
    <span
      className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-bg dark:hover:bg-gray-400 transition-colors duration-200 cursor-pointer border-0 appearance-none p-0 ${className || ""}`}
    >
      {children}
    </span>
  );
};
