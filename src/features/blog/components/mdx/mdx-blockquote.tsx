type MdxBlockquoteProps = {
  children?: React.ReactNode;
};

export const MdxBlockquote = ({ children }: MdxBlockquoteProps) => {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-5 text-gray-600 italic dark:border-zinc-600 dark:text-gray-400">
      {children}
    </blockquote>
  );
};
