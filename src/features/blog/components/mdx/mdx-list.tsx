type MdxListProps = {
  children?: React.ReactNode;
  ordered?: boolean;
};

export const MdxList = ({ children, ordered = false }: MdxListProps) => {
  const Component = ordered ? "ol" : "ul";
  const markerClass = ordered ? "list-decimal" : "list-disc";

  return (
    <Component
      className={`list-outside ${markerClass} space-y-3 pl-10 text-gray-600 marker:text-gray-800 dark:text-gray-400 dark:marker:text-gray-200 tablet:pl-12`}
    >
      {children}
    </Component>
  );
};
