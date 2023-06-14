import React from "react";

type Props = {
  header: string;
};
const Header = ({ header }: Props) => {
  return (
    <div>
      <h1 className="text-white lg:font-[500] font-[700] lg:text-3xl text-[20px]">
        {header}
      </h1>
      <div className="lg:h-[5px] h-[4px] lg:w-[60px] w-[35px] lg:mt-[15px] mt-[3px] rounded-md bg-orange-yellow-crayola"></div>
    </div>
  );
};

export default Header;
