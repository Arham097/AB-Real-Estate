import React from "react";
import Card from "./Card";

const CardContainer = ({ heading }) => {
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
      type: "Rent",
      bedrooms: 2,
      bathrooms: 1,
      size: 3, // size in marla
    },
    {
      price: 12000000,
      location: "Islamabad, Pakistan",
      type: "Sale",
      bedrooms: 4,
      bathrooms: 3,
      size: 10, // size in marla
    },
    {
      price: 900000,
      location: "Rawalpindi, Pakistan",
      type: "Rent",
      bedrooms: 3,
      bathrooms: 2,
      size: 7, // size in marla
    },
  ];

  return (
    <div className="w-[95%] h-96 bg-white mt-10 rounded-xl shadow-xl ring-1 ring-slate-300 mb-10 mx-[2%] max-md:h-[450px] max-sm:h-[730px] ">
      <h1 className="text-2xl font-extrabold p-3">{heading}</h1>
      <div className="flex flex-1 w-full h-[300px] max-md:grid max-md:grid-cols-2 max-md:flex-none max-sm:grid-cols-1 ">
        {properties.map((property, index) => {
          return (
            <Card
              key={index}
              price={property.price}
              location={property.location}
              type={property.type}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              size={property.size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
