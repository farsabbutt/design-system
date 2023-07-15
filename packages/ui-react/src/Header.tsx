import React from "react";
export const Header = ({ text, classNames }: { text: string, classNames?: string }) => {
  return (<h1 className={classNames}>{text}</h1>);
};
