import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wpisy",
  description:
    "Lista wszystkich wpisów na blogu. Zawęź listę tagiem, jeśli szukasz konkretnego tematu.",
  alternates: { canonical: "/blog" },
};

export default function Listing({ children }: { children: React.ReactNode }) {
  return children;
}
