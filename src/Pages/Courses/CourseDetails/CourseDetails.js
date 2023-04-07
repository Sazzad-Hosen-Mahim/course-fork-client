import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const singleCourseData = useLoaderData();
  const { title, image_url, details, author, total_view } = singleCourseData;
  console.log(singleCourseData);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl"></img>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-lg">{details}</p>

            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
