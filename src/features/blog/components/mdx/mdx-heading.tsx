type MdxHeadingProps = {
  children?: React.ReactNode;
  level: 2 | 3 | 4;
};

const classes = {
  2: "mt-8 text-2xl font-bold leading-tight tablet:text-3xl",
  3: "mt-6 text-xl font-bold leading-tight tablet:text-2xl",
  4: "mt-4 text-lg font-bold leading-tight tablet:text-xl",
};

export const MdxHeading = ({ children, level }: MdxHeadingProps) => {
  const Component = `h${level}` as const;

  return <Component className={classes[level]}>{children}</Component>;
};
