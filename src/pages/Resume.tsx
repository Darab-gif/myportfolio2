import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Header from "../Components/Header";
import { FaBookOpen } from "react-icons/fa";
import { Experience, Skill } from "../utils/data";

const Resume = () => {
  return (
    <PageWrapper>
      <div>
        <Header header="Resume" />

        <div className=" pt-[1rem]">
          <div className="flex lg:gap-8 gap-3 items-center lg:pl-6">
            <span className="lg:py-3  py-2 lg:text-[35px] text-[16px] px-2 lg:px-3 rounded-[8px] bg-eerie-black-1 shadow-shadow-1 text-orange-yellow-crayola">
              <FaBookOpen />
            </span>
            <h2 className="text-white lg:font-[500] font-[700] lg:text-2xl text-[20px]">
              Experiences
            </h2>
          </div>
          <div className="lg:ml-24 ml-14 lg:w-[70%] w-[80%] md:w-[90%]  relative">
            {Experience.map((item) => (
              <div key={item.id} className="mt-4 item">
                <span className="absolute lg:h-[6px] h-[4px] w-[4px] lg:w-[6px] lg:left-[-43px] left-[-43px] pt-6 rounded-full bg-vegas-gold shadow-shadow-3"></span>

                <h1 className="text-white lg:font-[500] font-[600] lg:text-xl text-[14px]">
                  {item.head}
                </h1>
                <p className="text-orange-yellow-crayola">
                  <span>{item.from}</span> - <span>{item.to}</span>
                </p>
                <p className="text-light-gray lg:text-[16px] text-[14px]">
                  {item.info}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:mt-[3rem] mt-[2.5rem] md:mt-[3rem] pb-[3rem]">
          <h1 className="text-white lg:font-[500] font-[700] lg:text-3xl text-[20px]">
            My Skills
          </h1>

          <div className=" mt-2 lg:p-3 p-2 lg:w-[46rem] w-[95%] md:w-[38rem]  rounded-[8px] bg-eerie-black-1 shadow-shadow-5">
            {Skill.map((item) => (
              <div key={item.id} className="mt-2 pb-1">
                <div className="flex lg:gap-3 gap-2">
                  <p className="text-white lg:text-[16px] text-[14px]">
                    {item.name}
                  </p>{" "}
                  <span className="text-light-gray">{item.percentage}</span>
                </div>

                <div className="bg-jet w-[100%] h-[8px] rounded-[10px] mt-2">
                  <div
                    style={{ width: `${item.value}%` }}
                    className={` bg-orange-yellow-crayola h-[100%] rounded-[10px]`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
