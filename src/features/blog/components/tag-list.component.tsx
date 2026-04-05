"use client";

import { availableTags } from "@/features/blog";
import { useActiveBlogRoute } from "@/features/blog/hooks";
import { urls } from "@/features/blog/urls";
import { TagBadge } from "./tag-badge.component";

export const TagList = () => {
  const { isMainActive, isTagActive } = useActiveBlogRoute();

  return (
    <nav>
      <ul className="flex flex-wrap gap-3 tablet:gap-5">
        <li>
          <TagBadge
            name={"Wszystkie"}
            href={urls.main()}
            isSelected={isMainActive}
          />
        </li>
        {availableTags.map((tag) => (
          <li key={tag.slug}>
            <TagBadge
              name={tag.name}
              href={urls.tag(tag.slug)}
              isSelected={isTagActive(tag.slug)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
