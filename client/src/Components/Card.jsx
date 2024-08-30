import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Card = ({ price, location, type, bedrooms, bathrooms, size }) => {
  return (
    <div
      className="card w-1/4 h-full bg-white mx-5 rounded-xl px-1 py-1  shadow-xl ring-2 ring-slate-300 max-lg:mx-2 max-md:w-fit
      max-md:h-[160px] max-md:my-2 max-md:flex  max-md:mx-2 max-sm:w-11/12 max-sm:mx-[5%] max-sm:h-5/6"
    >
      <div className="w-full h-1/2 bg-black rounded-lg max-md:h-full ">
        <img
          src="/Home-Images/home-image-1.jpg"
          alt=""
          className="rounded-lg h-full w-full"
        />
      </div>
      <div className="w-full h-1/2 bg-slate-50 font-semibold px-[4%] py-[4%] flex flex-col gap-y-1 max-sm:gap-y-0 max-sm:mb-1 ">
        <p className="text-xl max-md:text-lg ">Rs: {price}</p>
        <p className="text-sm text-slate-600 font-semibold"> {location}</p>
        <p className="text-blue-500">House {type}</p>
        <div>
          <div className="flex gap-x-5 items-center ">
            <div className="flex gap-x-1 ">
              <FaBed className="text-2xl" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex  gap-x-1">
              <FaBath className="text-2xl" />
              <span>{bathrooms}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
