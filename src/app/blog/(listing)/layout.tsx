import { ListingLayout } from "@/features/blog";

export default function Listing({ children }: { children: React.ReactNode }) {
  return <ListingLayout>{children}</ListingLayout>;
}
