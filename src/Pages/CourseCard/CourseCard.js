import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  console.log(course);
  const { title, image_url, details } = course;
  //   const courseData = useLoaderData();
  //   console.log(courseData);
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl courseCard my-6">
        <figure>
          <img className="image" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-green-500 ">{title}</h2>
          <p className="text-start">
            {details.length > 100 ? details.slice(0, 100) + "..." : details}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
