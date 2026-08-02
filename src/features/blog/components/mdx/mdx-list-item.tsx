import type { ComponentPropsWithoutRef } from "react";

type MdxListItemProps = ComponentPropsWithoutRef<"li">;

export const MdxListItem = ({ className, ...props }: MdxListItemProps) => {
  return <li className={`my-2 ${className ?? ""}`} {...props} />;
};
