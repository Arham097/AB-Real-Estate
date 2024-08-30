import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import CardContainer from "../Components/CardContainer";

const Home = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        var [data1, data2, data3] = await Promise.all([
          fetch("http://localhost:3000/api/house/featured").then((res) =>
            res.json()
          ),
          fetch("http://localhost:3000/api/house/for-sale").then((res) =>
            res.json()
          ),
          fetch("http://localhost:3000/api/house/for-rent").then((res) =>
            res.json()
          ),
        ]);
        setData1(data1.data.houses);
        setData2(data2.data.houses);
        setData3(data3.data.houses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="relative w-screen min-h-screen bg-white">
      <Hero />
      <CardContainer heading={"Featured"} properties={data1} />
      <CardContainer heading={"For Sale"} properties={data2} />
      <CardContainer heading={"For Rent"} properties={data3} />
    </main>
  );
};

export default Home;
