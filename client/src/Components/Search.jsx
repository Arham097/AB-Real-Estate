import React from "react";

const Search = () => {
  return (
    <div className="search w-11/12 h-44 bg-slate-500 ml-8 mt-4 rounded-lg max-md:ml-12">
      <div className="bg-slate-300 w-full h-2/4 flex justify-between items-center px-2 ">
        <div className="w-1/5 h-4/5 bg-slate-200 text-center py-1 rounded-md">
          <p className="font-semibold text-white mb-1">City</p>
          <select
            name=""
            id=""
            className="w-4/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter Place You Want to Search "
          className="w-3/5 h-2/3 px-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="px-6 py-4 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Search
        </button>
      </div>
      <div className="bg-blue-100 h-2/4 w-full flex justify-between px-2 items-center">
        <div className="w-1/5 h-4/5 bg-slate-500 text-center py-2 rounded-md">
          <p className="font-semibold  text-white mb-1">Property Type</p>
          <select
            name=""
            id=""
            className="w-4/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="w-2/5 h-4/5 bg-slate-500 text-center py-2 rounded-md">
          <p className="font-semibold  text-white mb-1">Price (PKR)</p>
          <div className="flex gap-x-2 px-2 justify-center">
            <select
              name=""
              id=""
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
        <div className="w-1/5 h-4/5 bg-slate-500 items-center text-center py-2 rounded-md">
          <p className="font-semibold  text-white mb-1">Area (Marla)</p>
          <div className="flex gap-x-2 px-2 justify-center">
            <select
              name=""
              id=""
              className="w-2/5 px-2 bg-slate-200 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default Search;
