import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  //   console.log(course);
  const { title, image_url, details, _id } = course;
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
          <p className="text-start text-lg">
            {details.length > 120 ? details.slice(0, 130) + "..." : details}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/courses/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
