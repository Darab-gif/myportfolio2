import React from "react";
import { NavLink } from "react-router-dom";
import { Tab } from "../../../utils/data";

const MobileViewNav = () => {
  const normals =
    "text-white text-[12px] font-[500] md:text-[16px]  md:font-[600]";
  const active =
    "text-orange-yellow-crayola text-[12px] font-[500] md:text-[16px]  md:font-[600]";
  return (
    <ul className="fixed  justify-center bottom-0 left-0 bg-onyx  gap-6 md:gap-12  flex items-center h-[30px] w-full p-8 border-l-[1px] border-b-[1px] border-jet rounded-tl-[12px] rounded-tr-[12px] lg:hidden ">
      {Tab.map((item) => (
        <NavLink
          to={`/${item.link}`}
          key={item.link}
          className={({ isActive }) => (isActive ? active : normals)}
        >
          {item.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default MobileViewNav;
