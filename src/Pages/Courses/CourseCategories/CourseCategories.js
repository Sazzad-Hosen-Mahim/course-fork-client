import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://course-fork-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h1>Categories: </h1>

      <div className="mt-16 p-5 text-start text-blue-700">
        <Link className="mb-5 text-xl" to="/courses">
          All Courses
        </Link>
        {category.map((cat) => (
          <p className="p-4 mt-3 text-xl" key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
