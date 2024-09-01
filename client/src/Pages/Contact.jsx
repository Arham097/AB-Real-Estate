import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-96 bg-slate-300 py-6">
      <div className="w-full h-12 bg-pink-200 flex justify-center items-center">
        <h1 className="font-extrabold text-5xl ">Contact us</h1>
      </div>
      <div className="w-full h-[450px] bg-blue-500 grid grid-cols-2">
        <div className="left w-full h-full bg-slate-400">Left</div>
        <div className="right w-full h-full bg-slate-600">Right</div>
      </div>
    </div>
  );
};

export default Contact;
