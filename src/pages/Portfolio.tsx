import React, { useState } from "react";
import PageWrapper from "../Components/PageWrapper";
import Header from "../Components/Header";
import { portfolio } from "../utils/data";
import { FaLink } from "react-icons/fa";

type ActiveState = number;
const Portfolio = () => {
  const normalButton = "text-light-gray font-[500]";
  const activeButton = "text-orange-yellow-crayola font-[500]";

  //filter for application
  const filteredApp = portfolio.filter(
    (item) => item.category === "Application"
  );

  //filter for web development
  const filteredWeb = portfolio.filter(
    (item) => item.category === "Web Development"
  );
  const [active, setActive] = useState<ActiveState>(1);

  const handleSwitch = (ev: ActiveState) => {
    setActive(ev);
  };
  return (
    <PageWrapper>
      <div>
        <Header header="Portfolio" />
        <div className="pt-[2rem] ">
          <div className="flex lg:gap-4 gap-2 md:gap-4 lg:text-[16px] text-[14px]">
            <button
              className={`${active === 1 ? activeButton : normalButton}`}
              onClick={() => handleSwitch(1)}
            >
              All
            </button>
            <button
              className={`${active === 2 ? activeButton : normalButton}`}
              onClick={() => handleSwitch(2)}
            >
              Web Development
            </button>
            <button
              className={`${active === 3 ? activeButton : normalButton}`}
              onClick={() => handleSwitch(3)}
            >
              Applications
            </button>
          </div>

          <div className="lg:mt-[4rem] mt-[2rem] md:mt-[4rem] md:pl-6 pl-4">
            {active === 1 && (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-3 gap-6  cursor-pointer">
                {portfolio.map((item) => (
                  <div key={item.id} className="mt-4">
                    <span>{item.icon}</span>
                    <p className="text-light-gray font-[700]">{item.name}</p>
                    <div className="flex justify-between">
                      <p className="text-light-gray font-[500]">
                        {item.category}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-orange-yellow-crayola"
                      >
                        <FaLink />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {active === 2 && (
              <div className="grid lg:grid-cols-3 lg:gap-3 gap-5 cursor-pointer">
                {filteredWeb.map((item) => (
                  <div className="mt-4">
                    <a href={item.link}>
                      <span>{item.icon}</span>
                      <p className="text-light-gray font-[700]">{item.name}</p>
                      <div className="flex justify-between">
                        <p className="text-light-gray font-[500]">
                          {item.category}
                        </p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-orange-yellow-crayola"
                        >
                          <FaLink />
                        </a>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
            {active === 3 && (
              <div className="grid lg:grid-cols-3 lg:gap-3 gap-5 cursor-pointer">
                {filteredApp.map((item) => (
                  <div className="mt-4">
                    <a href={item.link}>
                      <span>{item.icon}</span>
                      <p className="text-light-gray font-[700]">{item.name}</p>
                      <div className="flex justify-between">
                        <p className="text-light-gray font-[500]">
                          {item.category}
                        </p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-orange-yellow-crayola"
                        >
                          <FaLink />
                        </a>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Portfolio;
