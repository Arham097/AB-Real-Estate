import React from "react";
import SearchCard from "../Components/SearchCard";

const SearchResult = () => {
  const properties = [
    {
      price: 7500000,
      location: "Lahore, Pakistan",
      type: "Sale",
      bedrooms: 3,
      bathrooms: 2,
      size: 5, // size in marla
    },
    {
      price: 600000,
      location: "Karachi, Pakistan",
      bedrooms: 2,
      bathrooms: 1,
      size: 3, // size in marla
    },
    {
      price: 12000000,
      location: "Islamabad, Pakistan",
      bedrooms: 4,
      bathrooms: 3,
      size: 10, // size in marla
    },
    {
      price: 900000,
      location: "Rawalpindi, Pakistan",
      bedrooms: 3,
      bathrooms: 2,
      size: 7, // size in marla
    },
  ];
  return (
    <div className="w-2/3 max-h-1/3 bg-gray-100 mx-[17%] flex justify-center flex-col items-center pt-12 pb-12 gap-y-10 max-md:gap-y-14 max-sm:w-5/6 max-md:mx-[9%]">
      {properties.map((property, index) => {
        return (
          <SearchCard
            key={index}
            price={property.price}
            location={property.location}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            size={property.size}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
