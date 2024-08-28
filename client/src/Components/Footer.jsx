import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] bg-gray-800 max-sm:h-[450px]">
      <div className="w-full h-4/5 grid grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:h-5/6">
        <div className="w-full h-full pt-8 px-20 max-md:px-10   ">
          <h1 className="text-white font-bold text-2xl border-b-4 inline pb-2 border-blue-600 max-md:text-lg">
            Explore Our Site
          </h1>
          <ul className="text-slate-300 mt-5 text-lg font-medium max-md:text-[1rem]">
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link to="/about">About</Link>{" "}
            </li>
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link to="post-property">Post Property</Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full bg-gray-800 pt-8 px-20 max-md:px-10 max-[500px]:pt-0">
          <h1 className="text-white font-bold text-2xl border-b-4 inline pb-2  border-blue-600 max-md:text-lg">
            Quick Links
          </h1>
          <ul className="text-slate-300 mt-5 text-lg font-medium max-md:text-[1rem] ">
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link>Houses in Karachi</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link>Houses in Lahore</Link>
            </li>
            <li className="hover:text-blue-500 hover:underline hover:translate-x-2 transition-all ease-linear">
              <Link>Houses in Islamabad</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower w-full h-1/5 bg-gray-900 text-center py-6 max-[500px]:h-1/6 max-[500px]:py-[5%] f">
        <h1 className="font-bold text-white text-lg max-sm:text-[0.8rem]  ">
          © Copyright 2024 ABA Real Estates. All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
