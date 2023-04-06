import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="bg-cyan-600 flex justify-between">
      <div className="p-5 ms-7">
        <h1 className="text-3xl text-white">Course Fork</h1>
      </div>
      <div className="flex m-5">
        <Link className="p-3 me-9 bg-yellow-400 hover:bg-yellow-200 rounded-lg font-semibold text-md">
          About
        </Link>
        <Link className="p-3 me-9 bg-yellow-400 hover:bg-yellow-200 rounded-lg font-semibold text-md">
          Courses
        </Link>
        <Link className="p-3 me-9 bg-yellow-400 hover:bg-yellow-200 rounded-lg font-semibold text-md">
          FAQ
        </Link>
        <Link className="p-3 me-9 bg-yellow-400 hover:bg-yellow-200 rounded-lg font-semibold text-md">
          Login
        </Link>
        <Link className="p-3 me-9 bg-yellow-400 hover:bg-yellow-200 rounded-lg font-semibold text-md">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
