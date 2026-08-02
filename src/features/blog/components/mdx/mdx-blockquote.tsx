import type { ComponentPropsWithoutRef } from "react";

type MdxBlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const MdxBlockquote = ({ className, ...props }: MdxBlockquoteProps) => {
  return (
    <blockquote
      className={`break-words border-s-3 border-accent ps-4 not-italic opacity-80 ${
        className ?? ""
      }`}
      {...props}
    />
  );
};
