import React from "react";
import { MdxCode, type MdxCodeProps } from "./mdx-code";

type MdxPreProps = {
  children?: React.ReactNode;
};

export const MdxPre = ({ children }: MdxPreProps) => {
  if (
    React.isValidElement<MdxCodeProps>(children) &&
    children.type === MdxCode
  ) {
    return React.cloneElement(children, { block: true });
  }

  return <pre>{children}</pre>;
};
