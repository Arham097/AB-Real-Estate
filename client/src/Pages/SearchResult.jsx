import React from "react";
import SearchCard from "../Components/SearchCard";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const houses = useSelector((store) => store.house.houses);
  return (
    <div className="w-2/3 max-h-1/3 bg-gray-100 mx-[17%] flex justify-center flex-col items-center pt-12 pb-12 gap-y-10 max-md:gap-y-14 max-sm:w-5/6 max-md:mx-[9%]">
      {houses.map((property, index) => {
        return (
          <SearchCard
            key={index}
            price={property.price}
            location={property.location}
            bedrooms={property.bedrooms}
            bathrooms={property.baths}
            size={property.area}
            description={property.description}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;
