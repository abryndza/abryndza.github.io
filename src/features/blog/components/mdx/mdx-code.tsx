import type { ComponentPropsWithoutRef } from "react";

type MdxCodeProps = ComponentPropsWithoutRef<"code">;

/** Shiki code blocks carry a language class; only inline code needs this skin. */
export const MdxCode = ({ className, ...props }: MdxCodeProps) => {
  const isHighlightedBlock = className?.includes("language-");

  return (
    <code
      className={
        isHighlightedBlock
          ? className
          : `break-words rounded bg-muted px-[0.3rem] py-0.5 text-[0.9em] ${
              className ?? ""
            }`
      }
      {...props}
    />
  );
};
