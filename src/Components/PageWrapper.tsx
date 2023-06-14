import React from "react";

type Props = {
  children: string | JSX.Element;
};
const PageWrapper = ({ children }: Props) => {
  return (
    <div className="absolute  lg:left-[3rem] left-[1rem] lg:top-[2rem] top-[1rem]">
      {children}
    </div>
  );
};

export default PageWrapper;
