import React from "react";
import CourseCategories from "../Courses/CourseCategories/CourseCategories";

const Category = () => {
  return (
    <div className="grid grid-cols-12 mt-10 gap-3">
      <div className="col-span-3 text-2xl border-2 ms-3 p-5">
        <CourseCategories></CourseCategories>
      </div>
      <div className="col-span-9 text-2xl border-2 me-3 p-5">
        <h1>Mahim</h1>
      </div>
    </div>
  );
};

export default Category;
