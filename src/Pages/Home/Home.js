import React from "react";
import ImgHead from "../../assets/image/566.jpg";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-start flex items-center">
        <div>
          <h3>
            Welcome to <span>Course Fork.</span>
          </h3>
          <p>Here you can sharp your knowledge by completing our courses.</p>
        </div>
      </div>
      <div>
        <img src={ImgHead} alt="" />
      </div>
    </div>
  );
};

export default Home;
