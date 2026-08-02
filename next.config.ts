import path from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

const mdxPlugin = (relativePath: string) =>
  path.join(process.cwd(), relativePath);

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      "rehype-slug",
      [mdxPlugin("src/features/blog/mdx/rehype-shiki.mjs"), {}],
    ],
  },
});

export default withMDX(nextConfig);
