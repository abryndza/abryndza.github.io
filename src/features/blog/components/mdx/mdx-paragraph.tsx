type MdxParagraphProps = {
  children?: React.ReactNode;
};

export const MdxParagraph = ({ children }: MdxParagraphProps) => {
  return <p className="text-gray-600 dark:text-gray-400">{children}</p>;
};
