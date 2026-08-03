import type { ComponentPropsWithoutRef } from "react";
import { CopyCodeButton } from "./copy-code-button";

type MdxPreProps = ComponentPropsWithoutRef<"pre">;

/** Shiki supplies the detailed token markup; global CSS owns its dynamic theme. */
export const MdxPre = ({ className, ...props }: MdxPreProps) => {
  return (
    <div className="code-block-wrapper">
      <pre className={`code-block ${className ?? ""}`} {...props} />
      <CopyCodeButton />
    </div>
  );
};
