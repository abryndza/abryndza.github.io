"use client";

import { usePathname } from "next/navigation";
import { urls } from "../urls";

export const useActiveBlogRoute = () => {
  const pathname = usePathname();

  const isMainActive =
    pathname === urls.main() || pathname === `${urls.main()}/`;
  const isTagActive = (slug: string) => pathname?.includes(`/${slug}`) || false;

  return {
    isMainActive,
    isTagActive,
  };
};
