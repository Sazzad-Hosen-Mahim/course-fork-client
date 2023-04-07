import React from "react";
import CourseCategories from "../Courses/CourseCategories/CourseCategories";
import CourseCard from "../CourseCard/CourseCard";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const courseData = useLoaderData();
  // console.log(courseData);
  return (
    <div className="grid grid-cols-12 mt-10 gap-3">
      <div className="col-span-3 text-2xl border-2 ms-3 p-5">
        <CourseCategories></CourseCategories>
      </div>
      <div className="col-span-9 text-2xl border-2 p-2 grid grid-cols-3 gap-3">
        {courseData.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
