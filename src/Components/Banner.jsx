import React from "react";
import backgroundImage from "../assets/BACKGROUND.jpg";
import bannerImg from "../assets/bannerimg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const containerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-0" style={containerStyle}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-32 lg:py-40">
          <div className="md:w-full lg:w-2/3 mb-8 md:mb-0">
            <p className="text-white mr-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
              Effortlessly go live with your event in a go!
            </p>
            <p className="text-white mr-4 text-base md:text-lg lg:text-xl mt-4 leading-6">
              Empower your events, whether on-ground or digital, with our
              user-friendly platform loved by millions, making event creation
              and hosting a breeze.
            </p>
            <div className="mt-10 md:mt-0 md:mr-[520px]">
              <Link to="form">
                <button className="bg-[#fe3838] text-white mr-4 py-2 px-6 rounded-full text-sm md:text-base lg:text-lg font-bold">
                  LIST YOUR EVENT
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-full lg:w-1/3 md:absolute md:top-0 md:right-0 md:bottom-0 md:left-auto">
            <img
              className="w-full h-full mb-0 md:max-w-lg lg:max-w-xl mx-auto rounded-md"
              alt="Iphone white"
              src={backgroundImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
