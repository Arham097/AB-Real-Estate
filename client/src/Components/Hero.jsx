import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const HomeCity = useRef();
  const HomePropertyType = useRef();
  const minPrice = useRef();
  const maxPrice = useRef();
  const minArea = useRef();
  const maxArea = useRef();
  const searchPlace = useRef();

  const searchHomes = () => {
    console.log(HomeCity.current.value);
    console.log(HomePropertyType.current.value);
    console.log(searchPlace.current.value);
    console.log(minPrice.current.value);
    console.log(maxPrice.current.value);
    console.log(minArea.current.value);
    console.log(maxArea.current.value);

    navigate("/search-result");
  };

  const images = [
    "/Home-Images/home-image-1.jpg",
    "/Home-Images/home-image-2.jpg",
    "/Home-Images/home-image-3.jpg",
    "/Home-Images/home-image-4.jpg",
    "/Home-Images/home-image-5.jpg",
  ];
  const [image, setImage] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    let x = 1;

    intervalRef.current = setInterval(() => {
      x = (x % 5) + 1;
      setImage(x);
    }, 2000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full h-[90vh] bg-white flex border-b-2 border-slate-300 pb-2">
      <div className="left w-2/3 max-[1000px]:w-full max-md:mr-4">
        <h1 className="text-[50px] w-4/5 font-bold mt-12 ml-16 mb-3 max-lg:text-[35px] max-md:text-[30px] max-md:ml-12 max-[1100px]:text-4xl max-sm:mt-6 max-sm:text-[24px]">
          Find A <span className="text-blue-600 ">Perfect Home</span> To Live
          With Your Family
        </h1>
        <h3 className="slogan_desc w-4/5 ml-16 text-justify font-bold italic max-md:text-xs max-md:ml-12 max-sm:text-xs">
          Uncover a world of endless possibilities as you search for a place
          where comfort meets elegance. Start your quest for the ultimate family
          sanctuary today.
        </h3>
        <div className="search w-11/12 h-48 bg-slate-600 ml-8 mt-4 rounded-lg max-md:ml-12 px-2 max-md:h-52 max-sm:w-2/4 max-sm:mx-[25%] max-sm:h-60 max-sm:py-3">
          <div className=" w-full h-2/4 flex justify-between items-center px-2  pt-2  max-sm:h-full max-sm:flex-col">
            <div className="w-1/5 h-4/5 bg-slate-700 border-blue-600 border-2 text-center py-1 rounded-md max-sm:w-3/5 max-sm:h-1/3 max-[450px]:w-fit">
              <p className="font-semibold text-white mb-1">City</p>
              <select
                name=""
                id=""
                ref={HomeCity}
                className="w-4/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:h-6 "
              >
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
            <input
              type="text"
              ref={searchPlace}
              placeholder="Enter Place"
              className="w-3/5 h-2/3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md max-sm:w-full max-sm:h-1/4 max-[450px]:text-ms "
            />
            <button
              className="px-6 py-4 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 max-sm:h-1/4"
              onClick={() => {
                searchHomes();
              }}
            >
              Search
            </button>
          </div>
          <div className=" h-2/4 w-full flex justify-between px-2 items-center max-sm:hidden">
            <div className="w-1/5 h-4/5 bg-slate-700 text-center py-2 rounded-md border-blue-600 border-2 max-md:w-[150px]">
              <p className="font-semibold  text-white mb-1">Property Type</p>
              <select
                name=""
                id=""
                ref={HomePropertyType}
                className="w-4/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="House">House</option>
                <option value="Flat">Flat</option>
              </select>
            </div>
            <div className="w-2/5 h-4/5 bg-slate-700  text-center py-2 rounded-md border-blue-600 border-2 mx-5 flex-1">
              <p className="font-semibold  text-white mb-1">Price (PKR)</p>
              <div className="flex gap-x-2 px-2 justify-center">
                <select
                  name=""
                  id=""
                  ref={minPrice}
                  className="w-2/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1000000">1000000</option>
                  <option value="2000000">2000000</option>
                  <option value="4000000">4000000</option>
                  <option value="6000000">6000000</option>
                  <option value="8000000">8000000</option>
                  <option value="10000000">10000000</option>
                </select>
                <p className="text-white">to</p>
                <select
                  name=""
                  id=""
                  ref={maxPrice}
                  className="w-2/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="2000000">2000000</option>
                  <option value="4000000">4000000</option>
                  <option value="6000000">6000000</option>
                  <option value="8000000">8000000</option>
                  <option value="10000000">10000000</option>
                  <option value="15000000">15000000</option>
                </select>
              </div>
            </div>
            <div className="w-1/5 h-4/5 bg-slate-700 items-center text-center py-2 rounded-md border-blue-600 border-2 max-md:w-[150px]">
              <p className="font-semibold  text-white mb-1">Area (Marla)</p>
              <div className="flex gap-x-2 px-2 justify-center">
                <select
                  name=""
                  id=""
                  ref={minArea}
                  className="w-2/5  bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
                <p className="text-white">to</p>
                <select
                  name=""
                  id=""
                  ref={maxArea}
                  className="w-2/5 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="16">16</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right  w-1/3 max-[1000px]:hidden ">
        <img
          src={`/Home-Images/home-image-${image}.jpg`}
          alt=""
          className="bg-no-repeat bg-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
