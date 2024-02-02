import React from "react";
import AvatarImg from '../assets/Avatar.jpg';
import upload from "../assets/upload.jpg";
import { Link } from "react-router-dom";


const Form = () => {
  return (
    <div className="w-full md:w-96 lg:w-96 mx-auto bg-white rounded-lg shadow p-4 md:p-8 lg:p-10">
      <div className="mb-6">
        <div className="text-slate-700 text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
          List your Event
        </div>
        <div className="h-px bg-gray-200 mt-2" />
      </div>
      <div className="mb-6">
        <div className="text-slate-700 text-sm md:text-base lg:text-lg font-medium leading-tight">
          Event Name
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 mt-2">
          <div className="h-14 px-3.5 py-2.5">
            <div className="text-gray-500 text-base font-normal leading-normal">
              Casa Bacardi on Tour Ft. KING | Bhubaneswar
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="text-slate-700 text-sm md:text-base lg:text-lg font-medium leading-tight">
          Event Cover Photo
        </div>
        <div className="flex mt-2">
          <img className="w-full md:w-52 lg:w-52 h-32 rounded-lg" src={AvatarImg} alt="Event Cover" />
          <div className="ml-4 flex-col justify-start items-start">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <img src={upload} alt="Upload Icon" />
                <div className="text-red-500 text-sm font-semibold">
                  Click to upload
                </div>
              </div>
              <div className="text-gray-500 text-sm font-normal mt-2">
                or drag and drop
              </div>
              <div className="text-gray-500 text-xs font-normal mt-1">
                SVG, PNG, JPG, or GIF (max. 800x400px)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="text-slate-700 text-sm md:text-base lg:text-lg font-medium leading-tight">
          Short Event Description
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 mt-2 p-4">
          <div className="text-gray-500 text-base font-normal leading-normal">
            #BHUBANESWAR are you ready for the BIGGEST PARTY IN TOWN?
            Bacardi Experiences brings #CasaBacardiOnTour back to
            Bhubaneswar, this January! If Maan Meri Jaan moves you,
            #ItsAMood! Experience KING perform Live for you at Dream City
            Resort on the 13th of January, 2024.
            <br />
            Get your tickets NOW!
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="rounded-lg">
        <Link to="/">
          <button className="px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-slate-700 font-semibold">
            Cancel
          </button>
          </Link>
        </div>
        <div className="rounded-lg">
          <button className="px-4 py-2.5 bg-red-500 rounded-lg shadow border border-red-500 text-white font-semibold">
            List Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
