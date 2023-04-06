import React from "react";
import ImgHead from "../../assets/image/566.jpg";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-start flex items-center mx-10">
        <div className="grid justify-items-center mx-8">
          <p className="text-5xl my-6">
            Welcome to
            <span className="text-orange-300 text-6xl mx-6">Course Fork.</span>
          </p>
          <p className="text-2xl text-cyan-600">
            Here you can sharp your knowledge by completing our courses. You can
            find variety of courses like Web Development, Machine Learning, Data
            Science, Graphics Design, Finance, Business Planning, Personal
            Development and so on.
          </p>
        </div>
      </div>
      <div>
        <img src={ImgHead} alt="" />
      </div>
    </div>
  );
};

export default Home;
