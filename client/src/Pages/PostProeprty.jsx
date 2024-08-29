import React from "react";

const PostProeprty = () => {
  return (
    <div className="w-4/6 min-h-scree mx-[17%] mt-7 rounded-3xl mb-8 pb-6 shadow-2xl ring-2 ring-slate-100">
      <h1 className="text-center text-4xl font-bold pt-7 max-md:text-2xl">
        Post Property
      </h1>
      <form action="/post-property" className="w-full h-full px-3" method="GET">
        <div className="grid grid-cols-2 mt-7 pr-3 gap-x-6 gap-y-3 max-md:grid-cols-1">
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property Price (in Numbers)
            </p>
            <input
              type="text"
              name="price"
              required
              placeholder="Enter Property Price"
              className=" w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2  max-lg:text-sm"
            />
          </div>
          <div className="entry px-1 ">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property's Area (in Sq. Yd.)
            </p>
            <input
              type="text"
              name="area"
              required
              placeholder="Enter Property Area"
              className=" w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400   border-2 border-slate-400 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property Type (House/Flat)
            </p>
            <input
              type="text"
              name="property-type"
              required
              placeholder="Enter Property Type"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400   border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Purpose (For Sale/For Rent)
            </p>
            <input
              type="text"
              name="purpose"
              required
              placeholder="Enter Property Purpose"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400   border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter No. of Bedrooms
            </p>
            <input
              type="text"
              name="bedrooms"
              required
              placeholder="How Many Bedrooms?"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter No. of Bathrooms
            </p>
            <input
              type="text"
              name="baths"
              required
              placeholder="How Many Bathrooms?"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property Address
            </p>
            <input
              type="text"
              name="location"
              required
              placeholder="Enter Address"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property City
            </p>
            <input
              type="text"
              name="city"
              required
              placeholder="Enter City"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property Latitude
            </p>
            <input
              type="text"
              name="latitude"
              required
              placeholder="Enter Latitude"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
          <div className="entry px-1">
            <p className="px-2 font-medium max-lg:text-sm">
              Enter Property Longitude
            </p>
            <input
              type="text"
              name="longitude"
              required
              placeholder="Enter Longitude"
              className="w-full h-12 rounded-lg outline-none transition-all ease-in focus:border-blue-400  border-2 border-slate-400 px-2 max-lg:text-sm"
            />
          </div>
        </div>
        <div className="textarea  mt-4 w-[97%]">
          <p className="px-2 font-medium max-lg:text-sm ">
            {" "}
            Enter Property Description
          </p>
          <textarea
            name="description"
            id=""
            placeholder="Enter Description"
            className="w-full mx-2 outline-none resize-none  border-2 border-slate-400 p-2 rounded-md ring-slate-200 mt-1 h-24 max-lg:text-sm max-md:w-[97%]"
          ></textarea>
        </div>
        <div className="images w-[97%] h-20 ml-2 mt-3 grid grid-cols-3 max-lg:grid-cols-2 max-lg:h-32 max-md:grid-cols-1 max-md:h-48 ">
          <div className="image1 flex flex-col justify-center px-3  border-2 border-slate-400 text-sm">
            <label htmlFor="img1">Select Image 1</label>
            <input type="file" name="img1" />
          </div>
          <div className="image2 flex flex-col justify-center px-3  border-2 border-slate-400 text-sm">
            <label htmlFor="img2">Select Image 2</label>
            <input type="file" name="img2" />
          </div>
          <div className="image3 flex flex-col justify-center px-3  border-2 border-slate-400 text-sm">
            <label htmlFor="img3">Select Image 3</label>
            <input type="file" name="img3" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-44 h-12 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mx-[40%] mt-5 max-lg:mx-[35%] max-md:mx-[30%] max-sm:mx-[22%] "
            onClick={() => {
              console.log("Hello");
            }}
          >
            Post Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostProeprty;
