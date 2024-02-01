import React from 'react';
import frame1img from "../assets/Frame (1).jpg"
import frameImg from "../assets/Frame.jpg"

const Questions = () => {
  return (
    <div className="w-full md:w-[1024px] mx-auto px-4 md:px-[120px] py-6 rounded-lg flex-col justify-start items-center gap-6 inline-flex">

      
      <div><h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Frequently Asked Questions</h1></div>

      
      <div className="w-full flex-col justify-start items-start gap-4 flex">
        <div className="w-full border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center">
            <div className="text-zinc-800 text-xl md:text-2xl lg:text-3xl font-semibold leading-7">What is Greet?<span><img src={frameImg} alt="frame"/></span></div>
            <div className="w-8 h-8 relative origin-top-left -rotate-180" />
          </div>
          <div className="pr-10 justify-start items-start gap-2">
            <div className="text-slate-500 text-base font-normal leading-normal">
              Greet is a subsidiary of Fydo (Lfyd Services Pvt Ltd), an event booking platform designed to streamline the process of organizing and attending events. It offers a user-friendly interface for event organizers and attendees.
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center">
            <div className="text-zinc-800 text-xl md:text-2xl lg:text-3xl font-semibold leading-7">What’s Unique about Greet?<span><img src={frame1img} alt="frame1"/></span></div>
            <div className="w-8 h-8 relative" />
          </div>
        </div>
        <div className="w-full border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center">
            <div className="text-zinc-800 text-xl md:text-2xl lg:text-3xl font-semibold leading-7">How can I book tickets for an event on Greet?<span><img src={frame1img} alt="frame1"/></span></div>
            <div className="w-8 h-8 relative" />
          </div>
        </div>
        <div className="w-full border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center">
            <div className="text-zinc-800 text-xl md:text-2xl lg:text-3xl font-semibold leading-7">Can I use cashback earned at partner shops to book event tickets?<span><img src={frame1img} alt="frame1"/></span></div>
            <div className="w-8 h-8 relative" />
          </div>
        </div>
        <div className="w-full pb-4">
          <div className="flex justify-between items-center">
            <div className="text-zinc-800 text-xl md:text-2xl lg:text-3xl font-semibold leading-7">Can I sell tickets for my own event on Greet?<span><img src={frame1img} alt="frame1"/></span></div>
            <div className="w-8 h-8 relative" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Questions;
