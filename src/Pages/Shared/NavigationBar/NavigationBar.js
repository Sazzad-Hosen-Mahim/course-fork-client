import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="bg-cyan-600 flex justify-between">
      <Link to="/">
        <div className="p-5 ms-7">
          <h1 className="text-3xl text-white">Course Fork</h1>
        </div>
      </Link>
      <div className="flex m-5">
        <Link
          to="/about"
          className="p-3 me-9 bg-orange-400 hover:bg-yellow-400 rounded-lg font-semibold text-md"
        >
          About
        </Link>
        <Link
          to="/courses"
          className="p-3 me-9 bg-orange-400 hover:bg-yellow-400 rounded-lg font-semibold text-md"
        >
          Courses
        </Link>
        <Link
          to="/faq"
          className="p-3 me-9 bg-orange-400 hover:bg-yellow-400 rounded-lg font-semibold text-md"
        >
          FAQ
        </Link>
        <Link
          to="/login"
          className="p-3 me-9 bg-orange-400 hover:bg-yellow-400 rounded-lg font-semibold text-md"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="p-3 me-9 bg-orange-400 hover:bg-yellow-400 rounded-lg font-semibold text-md"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
