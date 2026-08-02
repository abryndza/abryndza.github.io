import {
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type MdxHeadingProps = Omit<ComponentPropsWithoutRef<"h2">, "id"> & {
  id?: string;
  level: 2 | 3 | 4 | 5 | 6;
};

const headingClasses = {
  2: "mt-8 text-2xl",
  3: "mt-7 text-xl italic",
  4: "mt-6 text-lg",
  5: "mt-6 text-base",
  6: "mt-6 text-sm uppercase tracking-wider",
} as const;

const toPlainText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(toPlainText).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return toPlainText(node.props.children);
  }

  return "";
};

/**
 * A heading with a permalink. The anchor sits inside the heading, so without
 * an explicit `aria-label` on the heading its accessible name would swallow
 * the anchor's own label ("Tytuł Link do tej sekcji"); the anchor in turn
 * names the section it points at instead of repeating one generic phrase.
 */
export const MdxHeading = ({
  id,
  children,
  className,
  level,
  ...props
}: MdxHeadingProps) => {
  const Component = `h${level}` as const;
  const headingText = toPlainText(children);

  return (
    <Component
      id={id}
      aria-label={headingText || undefined}
      className={`group break-words font-bold leading-[1.3] scroll-mt-4 ${
        headingClasses[level]
      } ${className ?? ""}`}
      {...props}
    >
      {children}
      {id ? (
        <a
          href={`#${id}`}
          aria-label={`Link do sekcji: ${headingText}`}
          className="ms-2 opacity-0 no-underline group-hover:opacity-100 focus-visible:opacity-100"
        >
          #
        </a>
      ) : null}
    </Component>
  );
};
