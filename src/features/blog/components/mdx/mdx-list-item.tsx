type MdxListItemProps = {
  children?: React.ReactNode;
};

export const MdxListItem = ({ children }: MdxListItemProps) => {
  return <li className="py-1.5 pl-2">{children}</li>;
};
