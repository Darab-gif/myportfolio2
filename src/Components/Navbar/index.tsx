import { NavLink } from "react-router-dom";
import { Tab } from "../../utils/data";

const NavBar = () => {
  const normals = "text-white text-[16px] font-[500]";
  const active = "text-orange-yellow-crayola text-[16px] font-[500]";

  return (
    <ul className="absolute right-[5px] top-0 gap-5 lg:flex items-center h-[50px] p-8 border-l-[1px] border-b-[1px] border-jet rounded-bl-[20px] hidden">
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

export default NavBar;
