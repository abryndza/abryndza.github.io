import type { Metadata } from "next";
import { HomePage } from "@/features/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog o automatyzacji i optymalizacji pracy w dobie AI oraz zmianach w rozwoju oprogramowania.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePage />;
}
