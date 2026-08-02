import type { ComponentPropsWithoutRef } from "react";

type MdxStrongProps = ComponentPropsWithoutRef<"strong">;

export const MdxStrong = ({ className, ...props }: MdxStrongProps) => {
  return <strong className={`font-bold ${className ?? ""}`} {...props} />;
};
