import type { ComponentPropsWithoutRef } from "react";

type MdxHorizontalRuleProps = ComponentPropsWithoutRef<"hr">;

export const MdxHorizontalRule = ({
  className,
  ...props
}: MdxHorizontalRuleProps) => {
  return (
    <hr
      className={`my-8 border-0 border-t border-border ${className ?? ""}`}
      {...props}
    />
  );
};
