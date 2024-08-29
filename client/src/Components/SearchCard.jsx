import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const SearchCard = ({ price, location, bedrooms, bathrooms, size }) => {
  return (
    <div className="w-3/4 h-56 bg-white flex shadow-xl ring-1 ring-slate-200 hover:scale-105 transition-all duration-500 hover:shadow-2xl max-lg:w-11/12 max-md:flex-col max-md:w-2/3 max-md:h-96 max-sm:w-10/12 hover:ring-4">
      <div className="left w-[45%] h-full max-md:w-full ">
        <img
          src="/Home-Images/home-image-1.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="right w-[55%] h-full bg-white px-3 py-5 gap-y-2 flex flex-col max-md:w-full ">
        <p className="text-2xl font-bold">
          PKR <span className="text-3xl">{price}</span>
        </p>
        <p>{location}</p>
        <div className="flex gap-x-5 font-semibold  ">
          <div className="flex gap-x-1 ">
            <FaBed className="text-2xl" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex  gap-x-1">
            <FaBath className="text-xl" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex  gap-x-1 ">
            <IoHome className="text-xl" />
            <span>{size} marla </span>
          </div>
        </div>
        <p className="line-clamp-3 font-medium ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          deleniti laboriosam consectetur nam omnis soluta eligendi atque fuga
          odio laborum quaerat voluptas voluptate reiciendis distinctio
          recusandae eum? Vero, iste officiis.
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
