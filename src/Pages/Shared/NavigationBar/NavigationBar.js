import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../../assets/image/logo/logo.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        <Navigate to="/"></Navigate>;
        console.log("Successfully log out");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between">
      <Link to="/">
        <div className="p-5 ms-7 flex ">
          <img className="h-14" src={logo} alt="course fork logo" />
          <h1 className=" text-center align-middle pt-2 text-3xl text-white">
            Course Fork
          </h1>
        </div>
      </Link>
      <div className="flex m-5">
        <Link to="/about" className="me-5 ">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:text-white">
            About
          </button>
        </Link>
        <Link to="/courses" className="me-5">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:text-white">
            Courses
          </button>
        </Link>
        <Link to="/faq" className="me-5">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:text-white">
            FAQ
          </button>
        </Link>

        <>
          {user?.uid || user?.email ? (
            <>
              <button
                className="btn bg-green-500 text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
              <span className="mx-4 bg-red-400 p-4 text-white text-lg rounded-3xl">
                {user?.displayName}
              </span>
            </>
          ) : (
            <>
              <Link to="/login" className=" me-5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:text-white">
                  Login
                </button>
              </Link>
              <Link to="/signup" className="me-5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:text-white">
                  Signup
                </button>
              </Link>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default NavigationBar;
