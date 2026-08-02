import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { urls } from "@/features/blog/urls";

export function HomeAllArticlesLink() {
  return (
    <div className="my-8 text-center">
      <Link
        href={urls.main()}
        className="dashed-link inline-flex items-center gap-1 hover:text-accent"
      >
        Wszystkie wpisy
        <IconArrowRight aria-hidden="true" size={18} stroke={2} />
      </Link>
    </div>
  );
}
