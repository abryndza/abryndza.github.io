import { IconCalendarWeek } from "@tabler/icons-react";
import { formatCreationDate } from "@/features/blog/helpers/format-creation-date";

type ArticleDateProps = {
  creationDate: string;
  size?: "sm" | "lg";
};

export const ArticleDate = ({
  creationDate,
  size = "sm",
}: ArticleDateProps) => {
  return (
    <div className="flex items-center gap-x-2 text-muted-foreground">
      <IconCalendarWeek
        aria-hidden="true"
        size={size === "lg" ? 20 : 18}
        stroke={2}
        className="shrink-0 mb-[3px]"
      />
      <time
        dateTime={creationDate}
        className={size === "lg" ? "text-base" : "text-sm"}
      >
        {formatCreationDate(creationDate)}
      </time>
    </div>
  );
};
