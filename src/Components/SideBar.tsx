import React, { useState } from "react";
import { social } from "../utils/data";
import avatar from "../assets/avatar.png";
import { FaGithub, FaTwitter, FaAngleDown, FaLinkedin } from "react-icons/fa";

const SideBar: React.FC = () => {
  const [expandHeight, setExpandHeight] = useState(false);

  const handleExpand = () => {
    setExpandHeight(!expandHeight);
  };
  return (
    <aside
      className={`bg-eerie-black-1 lg:h-[40rem] ${
        expandHeight ? "h-[28rem]" : "h-[9rem] md:h-[11rem] overflow-hidden"
      } w-[90%] md:w-[40rem] lg:w-[18rem]  lg:sticky relative ml-[-5px] lg:ml-0 lg:top-[3rem] transition duration-200 ease-in-out lg:left-[5rem] mt-[3rem]   lg:mb-[3rem] flex flex-col lg:items-center items-center md:items-start rounded-[20px] p-[15px] border-[1px] border-jet`}
    >
      <span
        onClick={handleExpand}
        className="absolute right-0 top-0 lg:hidden text-orange-yellow-crayola px-2 py-2 shadow-shadow-5 rounded-tr-[20px] rounded-bl-[6px] cursor-pointer"
      >
        <FaAngleDown />
      </span>
      <div className="flex items-center lg:flex-col justify-center mt-4 lg:mt-0 gap-3 md:pl-4 pl-0 lg:pl-0">
        <div className="lg:h-[150px] md:h-[110px] md:w-[110px] h-[80px] w-[80px] lg:w-[150px] lg:rounded-[20px] rounded-[8px] bg-jet flex items-center lg:mt-8 justify-center">
          <img
            src={avatar}
            alt="avatar"
            className="w-[10rem] lg:h-[8rem] h-[5rem] md:h-[6rem]"
          />
        </div>
        <div className="text-white flex items-center flex-col justify-center lg:mt-2">
          <h1 className="lg:text-[28px] text-[18px] md:text-[24px] font-[600]">
            Raji Dapo Ahmid
          </h1>
          <div className="lg:text-[14px] text-[12px] md:text-[13px] font-[400] lg:py-3 py-1 px-2 lg:px-6 bg-jet rounded-[5px] lg:font-[500] mt-3">
            Frontend Developer
          </div>
        </div>
      </div>
      <div className="bg-jet w-[90%] h-[1px] mx-[16px] mt-9"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-1 grid-cols-1 md:gap-x-10 lg:gap-x-2 gap-x-2 md:pl-4 pl-0 lg:pl-0">
        {social.map((item) => (
          <div key={item.id} className="flex  items-center gap-4 mt-6">
            <span className="py-3 px-3 rounded-[8px] bg-eerie-black-1 shadow-shadow-1 text-orange-yellow-crayola">
              {item.icon}
            </span>
            <div>
              <h2 className="text-[17px] font-[400] text-light-gray-70">
                {item.descr}
              </h2>
              <p className="text-[16px] font-[500] text-white">{item.info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-jet w-[90%] h-[1px] mx-[16px] lg:hidden hidden md:block mt-5"></div>
      <div className="flex text-light-gray-70 lg:mt-7 mt-7 md:mt-10 gap-4 md:pl-4 pl-1 lg:pl-0">
        <a href="https://www.github.com/Darab-gif">
          <FaGithub size={18} />
        </a>
        <a href="/">
          <FaTwitter size={18} />
        </a>
        <a href="https://www.linkedin.com/in/ahmid-raji-266592203/">
          <FaLinkedin />
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
