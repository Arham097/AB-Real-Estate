import React, { useState } from "react";
import { Button, TextInput, Alert } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import house from "../assets/house.jpg";

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setSignUpInfo({ ...signUpInfo, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async () => {
    try {
      setSuccess(false);
      setLoading(true);
      setError(false);
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpInfo),
      });
      setLoading(true);
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        navigate("/sign-in");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="min-h-screen p-5 flex justify-center items-center">
      <div className="bg-gray-200 rounded-3xl flex md:flex-row flex- gap-5 p-4">
        <div className="px-7 flex-1">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <h1 className="font-extrabold text-gray-500 text-3xl font-sans mb-2">
                Login
              </h1>
              <p className="text-sm text-gray-500">
                Ready to unlock your dream home? Sign up to start your journey!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <TextInput
                type="text"
                placeholder="Enter Username"
                id="username"
                onChange={handleChange}
              />
              <TextInput
                type="email"
                placeholder="Enter Email"
                id="email"
                onChange={handleChange}
              />
              <TextInput
                type="password"
                placeholder="Enter password"
                id="password"
                onChange={handleChange}
              />
              <TextInput
                type="password"
                placeholder="Confirm password"
                id="password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                className="text-xl w-full font-bold"
                color={"blue"}
              >
                Sign Up
              </Button>
              <div className="grid grid-cols-3 items-center text-gray-500">
                <hr className="border-gray-500" />
                <p className="text-center">OR</p>
                <hr className="border-gray-500" />
              </div>
            </div>
          </form>
          <Button
            type="button"
            className="flex items-center w-full font-semibold text-xl hover:text-white text-gray-500 hover:scale-105 transition-all delay-75 my-5"
            size="md"
            color={"blue"}
            outline
          >
            <FaGoogle className="mr-2 h-4 w-4 " />
            <p>Sign Up with Google</p>
          </Button>

          <p className="text-gray-500 my-5">
            If you have any account. Please{" "}
            <Link to="/sign-in" className="hover:underline text-blue-600">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
        <div className=" rounded-3xl text-white md:flex flex-col justify-center px-4 flex-1 md:visible hidden">
          <img
            className="object-cover w-80 rounded-2xl mx-auto"
            src={house}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
