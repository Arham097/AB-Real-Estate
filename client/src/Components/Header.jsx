import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoHome, IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getHouseById } from "../store/houseSlice";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const inputValue = useRef();
  const headerLinks = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProperty = async () => {
    const id = inputValue.current.value;
    if (!id) return;
    let data = await fetch(`http://localhost:3000/api/house/${id}`);
    data = await data.json();
    console.log(data.data.house);
    dispatch(getHouseById(data.data.house));
    navigate(`/house/${id}`);
  };

  useGSAP(() => {
    if (!toggle) return;
    gsap.from(headerLinks.current.children, {
      x: -150,
      duration: 2,
      ease: "power4.out",
      stagger: 0.1,
    });
  }, [toggle]);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="w-full h-16 mx-auto flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 px-1">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex gap-x-1 ml-5 items-center">
            <IoHome className="text-2xl " />
            <h1 className="text-xl font-bold mt-1 max-md:text-lg max-sm:text-sm ">
              AB Real Estate
            </h1>
          </div>
          <nav className="mr-5 max-md:hidden">
            <ul className="flex gap-x-10 font-bold pt-2 max-lg:gap-x-3">
              <li className="hover:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/post-property">Post Property</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="search w-[200px] mx-3 flex justify-center items-center border-sky-100 border-2 max-md:mr-7 rounded-md">
            <MdSearch
              className="text-[40px] bg-slate-100 border-r-2 outline-none  border-none max-md:w-[22px] max-md:pl-1  "
              onClick={getProperty}
            />
            <input
              type="text"
              ref={inputValue}
              placeholder="Search by property id"
              className="p-2 text-[12px] w-full outline-none border-none text-black bg-slate-100"
            />
          </div>
          <div className="md:hidden">
            {!toggle ? (
              <IoMenu className="text-[35px] mr-5" onClick={toggleMenu} />
            ) : (
              <RxCross2
                className="text-[35px] mr-5 rotate-360"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </header>

      {/* Conditionally Rendered Div */}
      {toggle && (
        <div className="w-full bg-blue-300 flex flex-col transition-all duration-1000 ease-in-out">
          <nav clas>
            <ul
              className="flex flex-col gap-y-2 font-bold py-2 "
              ref={headerLinks}
            >
              <li className="hover:text-blue-600 border-b-2 px-4 py-2">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-600 border-b-2 px-4 py-2">
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="hover:text-blue-600 border-b-2 px-4 py-2">
                <Link to="/post-property" onClick={toggleMenu}>
                  Post Property
                </Link>
              </li>
              <li className="hover:text-blue-600 px-4 py-1">
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
