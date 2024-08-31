import React, { useRef, useState } from "react";
import { Button, TextInput, Alert } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import house from "../assets/house.jpg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setSignUpInfo({ ...signUpInfo, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess(false);
      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpInfo),
      });
      const data = await res.json();
      setLoading(false);

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
              <div className="relative">
                <TextInput
                  type="password"
                  ref={passwordInput}
                  placeholder="Enter password"
                  id="password"
                  onChange={handleChange}
                />
                {!showPassword ? (
                  <FaRegEyeSlash
                    className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowPassword(true);
                      passwordInput.current.type = "text";
                    }}
                  />
                ) : (
                  <FaRegEye
                    className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowPassword(false);
                      passwordInput.current.type = "password";
                    }}
                  />
                )}
              </div>
              <div className="relative">
                <TextInput
                  type="password"
                  placeholder="Confirm password"
                  ref={confirmPasswordInput}
                  id="confirmPassword"
                  onChange={handleChange}
                />
                {!showConfirmPassword ? (
                  <FaRegEyeSlash
                    className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowConfirmPassword(true);
                      confirmPasswordInput.current.type = "text";
                    }}
                  />
                ) : (
                  <FaRegEye
                    className="text-gray-500 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShowConfirmPassword(false);
                      confirmPasswordInput.current.type = "password";
                    }}
                  />
                )}
              </div>
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
