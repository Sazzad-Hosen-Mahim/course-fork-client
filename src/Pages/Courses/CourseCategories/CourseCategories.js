import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h1>Categories: </h1>
      <div className="mt-20 p-5 text-start">
        {category.map((cat) => (
          <p className="p-5" key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
