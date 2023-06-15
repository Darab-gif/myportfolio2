import React, { useState } from "react";
import PageWrapper from "../Components/PageWrapper";
import Header from "../Components/Header";
import { FaPaperPlane } from "react-icons/fa";
import Spinner from "../assets/Spinner.svg";
import { collection, addDoc } from "firebase/firestore";
import database from "../firebase/firebase";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    // Disable submit button and set loading state
    setIsLoading(true);

    try {
      // Save form data to Firebase
      const formData = {
        name,
        email,
        message,
      };
      const docRef = await addDoc(collection(database, "messages"), formData);
      console.log("Message sent:", docRef.id);
      // Clear form inputs
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Handle error
      console.error(error);
    }

    // Enable submit button and reset loading state
    setIsLoading(false);
  };
  return (
    <PageWrapper>
      <div>
        <Header header="Contact" />
        <div className="lg:pt-[5rem] pt-[4rem] md:pt-[5rem]">
          <h2 className="text-white lg:font-[500] font-[700] lg:text-2xl text-[20px]">
            Contact Form
          </h2>
          <form action="" className="mt-10 relative" onSubmit={handleSubmit}>
            <div className="flex lg:flex-row flex-col md:flex-row md:pl-2 gap-4 pt-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                className="bg-eerie-black-1 pl-2 text-light-gray  border-[1px] outline-none rounded-[8px] lg:h-[65px] md:h-[62px] md:w-[18rem] lg:w-[23rem] h-[43px] w-[18rem] border-light-gray-70 input"
              />
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                required
                className="bg-eerie-black-1 pl-2 text-light-gray border-[1px] outline-none rounded-[8px] lg:h-[65px] md:h-[62px] md:w-[18rem] lg:w-[23rem] h-[43px] w-[18rem] border-light-gray-70 input"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Your Messages"
              required
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              className="bg-eerie-black-1 mt-[2rem] pl-3 pt-2 text-light-gray border-[1px] outline-none rounded-[8px] h-40 lg:w-[47rem] md:w-[37rem] md:pl-3 w-[18rem] border-light-gray-70 input"
            ></textarea>
            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="h-[4rem] md:w-[10rem] w-[16rem] absolute  md:right-2 right-3 rounded-[8px] bg-eerie-black-1 shadow-shadow-5 text-orange-yellow-crayola flex gap-3 items-center justify-center"
              >
                {isLoading ? (
                  <span>
                    <img
                      src={Spinner}
                      alt="Loading"
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>
                      <FaPaperPlane />
                    </span>
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
