"use client";

import {
  type CodeHighlightAdapter,
  CodeHighlightAdapterProvider,
  stripShikiCodeBlocks,
} from "@mantine/code-highlight";

const shikiAdapter: CodeHighlightAdapter = {
  loadContext: async () => {
    const { createHighlighter } = await import("shiki");

    return createHighlighter({
      langs: [
        "bash",
        "css",
        "html",
        "javascript",
        "json",
        "jsx",
        "md",
        "mdx",
        "scss",
        "shell",
        "tsx",
        "typescript",
      ],
      themes: ["ayu-dark", "catppuccin-latte"],
    });
  },
  getHighlighter: (ctx) => {
    if (!ctx) {
      return ({ code }) => ({ highlightedCode: code, isHighlighted: false });
    }

    return ({ code, language, colorScheme }) => ({
      highlightedCode: stripShikiCodeBlocks(
        ctx.codeToHtml(code, {
          lang: language,
          theme: colorScheme === "dark" ? "ayu-dark" : "catppuccin-latte",
        }),
      ),
      isHighlighted: true,
    });
  },
};

type CodeHighlightProviderProps = {
  children: React.ReactNode;
};

export const CodeHighlightProvider = ({
  children,
}: CodeHighlightProviderProps) => {
  return (
    <CodeHighlightAdapterProvider adapter={shikiAdapter}>
      {children}
    </CodeHighlightAdapterProvider>
  );
};
