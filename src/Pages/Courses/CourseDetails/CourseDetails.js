import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const singleCourseData = useLoaderData();
  const { title, details, author, total_view } = singleCourseData;
  console.log(singleCourseData);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="ms-5 hero-content flex-col lg:flex-row-reverse">
          <img
            src={author.img}
            className=" max-w-xl rounded-lg shadow-2xl"
          ></img>
          <div className="me-10">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-2xl pt-10 text-start">Author: {author.name}</p>
            <p className="py-6 text-lg text-start">{details}</p>

            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
