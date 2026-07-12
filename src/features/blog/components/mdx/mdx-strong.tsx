type MdxStrongProps = {
  children?: React.ReactNode;
};

export const MdxStrong = ({ children }: MdxStrongProps) => {
  return <strong className="font-extrabold text-foreground">{children}</strong>;
};
