import React, { useRef, useState } from "react";
import { TextInput, Button, Spinner, Alert } from "flowbite-react";
import { Link } from "react-router-dom";
function ForgetPassword() {
  const emailElement = useRef();
  const [successMessage, setSuccessMessage] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(successMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    setFailureMessage(null);
    setLoading(false);
    try {
      setLoading(true);
      const res = await fetch(
        "http://localhost:3000/api/auth/forget-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailElement.current.value }),
        }
      );
      setLoading(false);

      const result = await res.json();
      console.log(result);
      if (res.ok) {
        setSuccessMessage(result.message);
      } else {
        setFailureMessage(result.message);
      }
    } catch (err) {
      setFailureMessage("There is an error in sending Email");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 justify-center max-w-xl mx-auto w-full min-h-screen p-5"
      >
        <h3 className="md:text-7xl text-6xl font-bold text-gray-900">
          Forget Password?
        </h3>
        <p className="font-medium text-md text-gray-700">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
        <label htmlFor="font-semibold">Email</label>
        <TextInput
          ref={emailElement}
          type="email"
          id="email"
          placeholder="Enter Email"
        />
        <Button type="submit">
          {loading && (
            <Spinner
              size="sm"
              className={`flex items-center gap-3 mr-3 ${
                loading ? "disabled" : ""
              }`}
            />
          )}
          Continue
        </Button>
        <p className="text-gray-700">
          Don't have an account?
          <Link to="/sign-up" className="hover:underline text-blue-700">
            <span className="text-md ml-2">Sign Up </span>
          </Link>
        </p>
        {successMessage && <Alert color="info">{successMessage}</Alert>}
        {failureMessage && <Alert color="failure">{failureMessage}</Alert>}
      </form>
    </div>
  );
}

export default ForgetPassword;
