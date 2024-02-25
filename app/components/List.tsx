import React from "react";
interface ListProps{
  children: React.ReactNode,
  className: string
}
const List = ({ children, className, ...restProps }:ListProps) => {
  return (
    <div className={className} {...restProps}>
      <span>{children}</span>
    </div>
  );
};
export { List };
