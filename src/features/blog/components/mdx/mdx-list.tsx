import type { ComponentPropsWithoutRef } from "react";

type MdxListProps = ComponentPropsWithoutRef<"ul"> & {
  ordered?: boolean;
};

export const MdxList = ({
  children,
  className,
  ordered = false,
  ...props
}: MdxListProps) => {
  const classes = `list-outside space-y-2 pl-7 text-prose-foreground marker:text-accent ${
    className ?? ""
  }`;

  if (ordered) {
    return (
      <ol className={`list-decimal ${classes}`} {...props}>
        {children}
      </ol>
    );
  }

  return (
    <ul className={`list-disc ${classes}`} {...props}>
      {children}
    </ul>
  );
};
