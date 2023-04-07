import React from "react";
import CourseCategories from "./CourseCategories/CourseCategories";
import CourseCard from "../CourseCard/CourseCard";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const allCourseData = useLoaderData();
  // console.log(allCourseData);
  return (
    <div className="grid grid-cols-12 mt-10 gap-3">
      <div className="col-span-3 text-2xl border-2 ms-3 p-5">
        <CourseCategories></CourseCategories>
      </div>
      <div className="col-span-9 text-2xl border-2 me-3 p-2 grid grid-cols-3 gap-3">
        {allCourseData.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
