import React from "react";
import { useSelector } from "react-redux";

const PropertyDetails = () => {
  const house = useSelector((state) => state.house);
  console.log(house.houseById);
  return <div> Hello</div>;
};

export default PropertyDetails;
