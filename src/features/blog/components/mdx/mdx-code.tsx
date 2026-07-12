"use client";

import { CodeHighlight, InlineCodeHighlight } from "@mantine/code-highlight";
import type React from "react";

export type MdxCodeProps = {
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const getCodeText = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }

  throw new Error("MDX code blocks must contain plain text.");
};

const getCodeLanguage = (className?: string): string | undefined => {
  return className?.match(/language-(\w+)/)?.[1];
};

export const MdxCode = ({
  block = false,
  children,
  className,
}: MdxCodeProps) => {
  const code = getCodeText(children);
  const language = getCodeLanguage(className);

  if (block) {
    return (
      <CodeHighlight
        code={code}
        language={language || "text"}
        withCopyButton
        radius="md"
        className="my-4"
        styles={{
          code: {
            fontSize: "1rem",
            lineHeight: "1.8",
          },
          pre: {
            fontSize: "1rem",
            lineHeight: "1.8",
          },
        }}
      />
    );
  }

  return (
    <InlineCodeHighlight
      code={code}
      className="rounded bg-light-bg px-1.5 py-0.5"
      styles={{
        inlineCodeHighlight: {
          fontSize: "1rem",
        },
      }}
    />
  );
};
