import Header from "../Components/Header";
import PageWrapper from "../Components/PageWrapper";
import { Info } from "../utils/data";

const About = () => {
  return (
    <PageWrapper>
      <div>
        <Header header="About Me" />

        <div className="lg:pt-[3rem] pt-[2rem]">
          <div className="lg:w-[50rem] w-[90%] md:w-[38rem] lg:text-[16px] text-[14px] md:text-[16px]">
            <p className="text-light-gray ">
              I'm Professional and Creative Frontend Developer from Nigeria,
              building and developing web pages and applications. I enjoy
              turning complex problems into simple, beautiful and intuitive
              designs.
            </p>
            <p className="text-light-gray pt-5">
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive. Moreover, <br />I
              add personal touch to your product and make sure that is
              eye-catching and easy to use. My aim is to bring across your
              message and identity in the most creative way. I created web
              design for many famous brand companies.
            </p>
          </div>
          <div className=" mt-[1.4rem] md:mt-[4rem]">
            <h1 className="text-white lg:font-[500] font-[700] lg:text-3xl text-[20px]">
              What I'm doing...
            </h1>
            <div className="flex flex-col md:flex-row  justify-center items-center md:gap-8 lg:gap-7 gap-8 mt-8">
              {Info.map((item) => (
                <div
                  key={item.id}
                  className="lg:h-[9rem] h-[10.5rem] lg:w-[22rem] w-[16rem]  rounded-[8px] bg-eerie-black-1 shadow-shadow-5 flex lg:flex-row flex-col gap-4 items-center justify-center"
                >
                  <div className="lg:ml-4 pt-3">
                    <span className="text-orange-yellow-crayola">
                      {item.icon}
                    </span>
                  </div>
                  <div className="text-center ">
                    <h1 className="text-white lg:font-[500] font-[700] lg:text-2xl text-[20px]">
                      {item.header}
                    </h1>
                    <p className="text-light-gray">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
