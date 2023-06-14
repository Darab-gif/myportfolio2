import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row  items-center gap-8">
      {children}
    </div>
  );
};

export default Layout;
