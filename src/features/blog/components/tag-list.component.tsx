"use client";

import { usePathname } from "next/navigation";
import { availableTags } from "@/content/config";
import { urls } from "../urls";
import { TagBadge } from "./tag-badge.component";

export const TagList = () => {
  const pathname = usePathname();
  const isTagActive = (slug: string) => pathname?.includes(`/${slug}`) || false;
  const isAllActive =
    pathname === urls.main() || pathname === urls.main() + "/";

  return (
    <div className="flex flex-wrap gap-5 mt-20">
      <TagBadge
        key="all"
        name={"Wszystkie"}
        href={urls.main()}
        isSelected={isAllActive}
      />
      {availableTags.map((tag) => (
        <TagBadge
          key={tag.slug}
          name={tag.name}
          href={urls.tag(tag.slug)}
          isSelected={isTagActive(tag.slug)}
        />
      ))}
    </div>
  );
};
