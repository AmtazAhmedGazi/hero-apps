import React from "react";
import playStore from "../../assets/playstore.png";
import appleStore from "../../assets/appleStore.png";
import banner from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h2 className="mt-15 text-center text-3xl lg:text-6xl font-bold">
        We Build
        <br />
        <span className="text-[#9F62F2]"> Productive </span> Apps
      </h2>
      <p className="text-[#627382] text-xs lg:text-lg text-center mt-4">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex my-10 gap-4">
        <a
          className="flex btn lg:py-6 lg:px-5"
          href="https://play.google.com/store/apps?hl=en-us"
        >
          <img src={playStore} alt="" className="w-4 h-4 lg:w-8 lg:h-8" />{" "}
          Google Play
        </a>
        <a
          className="flex btn lg:py-6 lg:px-5 "
          href="https://apps.apple.com/us/iphone/apps"
        >
          <img src={appleStore} alt="" className="w-4 h-4 lg:w-8 lg:h-8" />
          App Store
        </a>
      </div>
      <img src={banner} alt="" className="w-10/12" />
    </div>
  );
};

export default Banner;
