import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="w-full min-h-96  py-5">
      <div className="w-full h-24 flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl ">Contact us</h1>
        <p className="w-1/2 text-center mt-1">
          Let us help you find your dream home! Contact us via email or fill out
          the form below, and we'll be in touch soon.
        </p>
      </div>
      <div className="w-full h-[450px] grid grid-cols-2">
        <div className="left w-full h-full flex flex-col justify-center px-16 ">
          <div className="info1 w-4/5 h-24 flex gap-x-2 ">
            <div className="icon w-16 h-2/3 bg-blue-500 flex justify-center items-center border-[10px] border-slate-800 ">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div className="w-2/3 flex flex-col">
              <span className="text-blue-600 font-bold text-lg">Phone</span>
              <span className="font-bold text-lg">0310-2647209</span>
            </div>
          </div>

          <div className="info2 w-4/5 h-24  flex gap-x-2 mb-16">
            <div className="icon w-16 h-2/3 bg-blue-500 flex justify-center items-center border-[10px] border-slate-800 ">
              <IoMail className="text-2xl" />
            </div>
            <div className="w-2/3 flex flex-col">
              <span className="text-blue-600 font-bold text-lg">Email</span>
              <span className="font-bold text-lg">arhamhasan70@gmail.com</span>
            </div>
          </div>
          <div className="connect w-4/5 h-8  flex gap-x-4 mb-3">
            <div className="line w-24 bg-blue-600 h-7"></div>
            <span className="font-bold text-lg">Connect With Us</span>
          </div>
          <div className="icons w-1/3 h-10  flex gap-x-2">
            <FaFacebookSquare className="text-4xl text-blue-700" />
            <IoLogoInstagram className="text-4xl text-blue-700" />
            <FaLinkedin className="text-4xl text-blue-700" />
            <FaGithubSquare className="text-4xl text-blue-700" />
          </div>
        </div>
        <div className="right w-full h-full  flex justify-center items-center mx-10">
          <div className="box w-3/5 h-5/6 bg-slate-800 border-[23px] border-slate-900 text-white px-3 py-3">
            <h1 className="text-2xl font-medium">Send Message</h1>
            <form action="" className="py-5 flex flex-col gap-y-5">
              <div className="entry1 flex flex-col ">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="appearance-none bg-transparent placeholder-gray-200 placeholder-bolder-4 "
                />
              </div>
              <div className="entry1 flex flex-col ">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="appearance-none bg-transparent placeholder-gray-200 placeholder-bolder-4 "
                />
              </div>
              <div className="entry1 flex flex-col ">
                <textarea
                  type="text"
                  name="message"
                  placeholder="Type Your Message..."
                  className="appearance-none bg-transparent placeholder-gray-200 placeholder-bolder-4 resize-none "
                />
              </div>
              <button
                type="submit"
                className="h-10 font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
