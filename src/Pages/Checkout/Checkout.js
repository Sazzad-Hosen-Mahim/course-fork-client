import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkout = useLoaderData();
  const { title, details } = checkout;
  console.log(checkout);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-orange-500">
              Congratulations!!
            </h1>
            <p className="py-6 text-black text-xl">
              Welcome to our course "{title}"
            </p>
            <p className="text-start text-lg">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
