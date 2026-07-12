import { ListingLayout } from "@/features/blog";

export const metadata = {
  title: "Notatki Junior Software Engineer'a - Blog",
  description:
    "Moje osobiste notatki z nauki. Rozkładam trudne tematy z IT na czynniki pierwsze, żeby samemu je lepiej zrozumieć.",
};

export default function Listing({ children }: { children: React.ReactNode }) {
  return <ListingLayout>{children}</ListingLayout>;
}
