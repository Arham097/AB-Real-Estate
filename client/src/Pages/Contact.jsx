import React, { useRef, useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Modal from "../Components/Modal";
const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [title, setTitle] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    try {
      const response = await fetch(
        "http://localhost:3000/api/house/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );
      const data = await response.json();
      console.log(data.status);
      if (data.status === "failed") {
        setResponseMsg("Failed to Send Email, Please Try Again later");
        setTitle("Failed");
        setShowModal(true);
      }
      if (response.ok) {
        setShowModal(true);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        const responseMsg = `Hi ${name},\n Thank you for reaching out! We’ve received your message and will get back to you within 24 hours. If your request is urgent, please call us at 03102647209.  Looking forward to assisting you!`;
        setResponseMsg(responseMsg);
        setTitle("Thank You for Reaching Out");
      }
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
      setShowModal(true);
    }
  };
  return (
    <div className="w-full min-h-96 py-5 max-md:py-10">
      {showModal && (
        <Modal
          closeModal={closeModal}
          responseMsg={responseMsg}
          title={title}
        />
      )}
      <div className="w-full h-24 flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl ">Contact us</h1>
        <p className="w-3/4 text-center mt-1 max-md:w-11/12">
          Let us help you find your dream home! Contact us via email or fill out
          the form below, and we'll be in touch soon.
        </p>
      </div>
      <div className="w-full h-[450px] flex max-md:flex-col-reverse max-md:h-[800px] max-md:mt-4">
        <div className="left w-full h-full flex flex-col justify-center px-16 max-md:mt-5 max-md:px-4">
          <div className="info1 w-4/5 h-24 flex gap-x-2 max-md:w-full">
            <div className="icon w-16 h-2/3 bg-blue-500 flex justify-center items-center border-[10px] border-slate-800 ">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div className="w-2/3 flex flex-col ">
              <span className="text-blue-600 font-bold text-lg">Phone</span>
              <span className="font-bold text-lg">0310-2647209</span>
            </div>
          </div>

          <div className="info2 w-4/5 h-24  flex gap-x-2 mb-16 max-md:mb-7 max-md:w-full">
            <div className="icon w-16 h-2/3 bg-blue-500 flex justify-center items-center border-[10px] border-slate-800 ">
              <IoMail className="text-2xl" />
            </div>
            <div className="w-2/3 flex flex-col">
              <span className="text-blue-600 font-bold text-lg">Email</span>
              <span className="font-bold text-lg ">arhamhasan70@gmail.com</span>
            </div>
          </div>
          <div className="connect w-4/5 h-8  flex gap-x-4 mb-3 max-md:w-full">
            <div className="line w-24 bg-blue-600 h-7"></div>
            <span className="font-bold text-lg">Connect With Us</span>
          </div>
          <div className="icons w-2/3 h-10  flex gap-x-2  max-md:w-full">
            <FaFacebookSquare className="text-4xl text-blue-700" />
            <IoLogoInstagram className="text-4xl text-blue-700" />
            <FaLinkedin className="text-4xl text-blue-700" />
            <FaGithubSquare className="text-4xl text-blue-700" />
          </div>
        </div>
        <div className="right w-full h-full  flex justify-center items-center mx-10 max-md:mx-4">
          <div className="box w-4/6 h-5/6 bg-slate-800 border-[23px] border-slate-900 text-white px-3 py-3 max-lg:w-11/12 max-lg:mr-3 max-md:w-4/6 max-md:h-[95%]">
            <h1 className="text-2xl font-medium">Send Message</h1>
            <form
              action="/contact"
              className="py-5 flex flex-col gap-y-5"
              onSubmit={handleSubmit}
            >
              <div className="entry1 flex flex-col ">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="off"
                  ref={nameRef}
                  className="appearance-none bg-transparent placeholder-gray-200 placeholder-bolder-4 "
                />
              </div>
              <div className="entry1 flex flex-col ">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  ref={emailRef}
                  className="appearance-none bg-transparent placeholder-gray-200 placeholder-bolder-4 "
                />
              </div>
              <div className="entry1 flex flex-col ">
                <textarea
                  type="text"
                  name="message"
                  ref={messageRef}
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
