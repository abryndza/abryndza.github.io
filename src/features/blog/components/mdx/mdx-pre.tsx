import type { ComponentPropsWithoutRef } from "react";

type MdxPreProps = ComponentPropsWithoutRef<"pre">;

/** Shiki supplies the detailed token markup; global CSS owns its dynamic theme. */
export const MdxPre = ({ className, ...props }: MdxPreProps) => {
  return <pre className={`code-block ${className ?? ""}`} {...props} />;
};
