import React, { useRef, useState } from "react";
import { Button, TextInput, Alert } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import house from "../assets/house.jpg";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "./../store/userSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
function SignIn() {
  const [signInInfo, setSignInInfo] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passwordInput = useRef();
  const dispatch = useDispatch();
  console.log(signInInfo);
  const handleChange = (e) => {
    setSignInInfo({ ...signInInfo, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log("login");
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signInInfo),
      });
      console.log(res);
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        console.log(res.message);
        dispatch(signInFailure(data.message));
      }
    } catch (err) {
      console.log(err);
      dispatch(signInFailure(err.message));
    }
  };
  return (
    <div className="min-h-screen p-5 flex justify-center items-center">
      <div className="bg-gray-200 rounded-3xl flex md:flex-row  gap-5 p-4">
        <div className="px-7 flex-1">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <h1 className="font-extrabold text-gray-500 text-3xl font-sans mb-2">
                Login
              </h1>
              <p className="text-sm text-gray-500">
                Ready to unlock your dream home? Sign In to start your journey!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <TextInput
                type="email"
                placeholder="Enter Email"
                id="email"
                onChange={handleChange}
              />
              <div className="relative">
                <TextInput
                  type="password"
                  placeholder="Enter password"
                  ref={passwordInput}
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
              <Button
                type="submit"
                className="text-xl w-full font-bold"
                color={"blue"}
              >
                Login
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
            className="flex items-center w-full font-semibold text-2xl hover:text-white text-gray-500 hover:scale-105 transition-all delay-75 my-5"
            size="md"
            color={"blue"}
            outline
          >
            <FaGoogle className="mr-2 h-4 w-4 " />
            <p>Sign In with Google</p>
          </Button>
          <p className="hover:underline mt-4 font-semibold text-gray-500 hover:text-blue-600">
            <Link to="/forget-password">Forget Password</Link>
          </p>
          <p className="text-gray-500 my-5">
            If you donot have any account. Please{" "}
            <Link to="/sign-up" className="hover:underline text-blue-600">
              <span>Sign Up</span>
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

export default SignIn;
