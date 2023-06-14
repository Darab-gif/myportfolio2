import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Header from "../Components/Header";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <PageWrapper>
      <div>
        <Header header="Contact" />
        <div className="lg:pt-[5rem] pt-[4rem] md:pt-[5rem]">
          <h2 className="text-white lg:font-[500] font-[700] lg:text-2xl text-[20px]">
            Contact Form
          </h2>
          <form action="" className="mt-10 relative">
            <div className="flex lg:flex-row flex-col md:flex-row md:pl-2 gap-4 pt-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-eerie-black-1 pl-2 text-light-gray  border-[1px] outline-none rounded-[8px] lg:h-[65px] md:h-[62px] md:w-[18rem] lg:w-[23rem] h-[43px] w-[18rem] border-light-gray-70 input"
              />
              <input
                type="text"
                placeholder="Email Address"
                required
                className="bg-eerie-black-1 pl-2 text-light-gray border-[1px] outline-none rounded-[8px] lg:h-[65px] md:h-[62px] md:w-[18rem] lg:w-[23rem] h-[43px] w-[18rem] border-light-gray-70 input"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Your Messages"
              required
              className="bg-eerie-black-1 mt-[2rem] pl-3 pt-2 text-light-gray border-[1px] outline-none rounded-[8px] h-40 lg:w-[47rem] md:w-[37rem] md:pl-3 w-[18rem] border-light-gray-70 input"
            ></textarea>
            <div className="mt-6">
              <button
                type="submit"
                className="py-4 lg:px-6 px-16 absolute cursor-not-allowed  md:right-2 right-3 rounded-[8px] bg-eerie-black-1 shadow-shadow-5 text-orange-yellow-crayola flex gap-3 items-center justify-center"
              >
                <span>
                  <FaPaperPlane />
                </span>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
