import type { ComponentPropsWithoutRef } from "react";

type MdxParagraphProps = ComponentPropsWithoutRef<"p">;

export const MdxParagraph = ({ className, ...props }: MdxParagraphProps) => {
  return <p className={`break-words ${className ?? ""}`} {...props} />;
};
