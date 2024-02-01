import React from "react";
import backgroundImage from "../assets/BACKGROUND.jpg";
import bannerImg from "../assets/bannerimg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative top-0 overflow-hidden" style={bannerStyle}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-32 lg:py-40">
          <div className="md:w-1/2 lg:w-2/3">
            <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
              Effortlessly go live with your event in a go!
            </p>
            <p className="text-white text-base md:text-lg lg:text-xl mt-4 leading-6">
              Empower your events, whether on-ground or digital, with our user-friendly platform loved by millions, making event creation and hosting a breeze.
            </p>
            <div className="mt-6">
              <Link to="form">
                <button className="bg-[#fe3838] text-white py-2 px-6 rounded-full text-sm md:text-base lg:text-lg font-bold">
                  LIST YOUR EVENT
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
            <img
              className="w-full h-auto md:max-w-lg lg:max-w-xl mx-auto"
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
