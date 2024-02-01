import React from "react";
import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20 pt-16 pb-20 bg-white flex flex-col justify-start items-center gap-10">
      <div className="self-stretch text-center text-zinc-900 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[64px]">
        Our Clients Speak
      </div>
      <div className="self-stretch text-center text-zinc-900 text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-loose">
        We have been working with clients around the world
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="h-[272px] flex flex-col justify-center items-center gap-2">
            <div className="w-full px-4 py-6 flex flex-col justify-center items-center gap-4">
              <div className="text-center text-zinc-900 text-2xl font-semibold">Efficient Collaborating</div>
              <div className="text-center text-zinc-900 text-sm font-normal leading-snug">
                Fydo's event ticket booking platform had streamlined our ticketing process and enhanced attendee experience. The best part was the dedicated relationship manager, that guy Saroj, he was very helpful and helped me streamline the whole event with ease.
              </div>
            </div>
          </div>
          <div className="h-[107px] flex flex-col justify-start items-center gap-2">
            <img className="w-14 h-14 rounded-full" src={client1} alt="Client Avatar 1" />
            <div className="flex flex-col justify-start items-center gap-1">
              <div className="w-64 text-center text-zinc-900 text-lg font-bold">Farzaan</div>
              <div className="w-64 text-center text-zinc-600 text-sm font-normal">FunHub Odisha</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="h-[272px] flex flex-col justify-center items-center gap-2">
            <div className="w-full px-4 py-6 flex flex-col justify-center items-center gap-4">
              <div className="text-center text-zinc-900 text-2xl font-semibold">Intuitive Design</div>
              <div className="text-center text-zinc-900 text-sm font-normal leading-snug">
                Felt happy to tie up with an Events booking platform from my own state, and best part I gotta know they sent their own representative on the event day to help us with coordination and event management.
              </div>
            </div>
          </div>
          <div className="h-[107px] flex flex-col justify-start items-center gap-2">
            <img className="w-14 h-14 rounded-full" src={client2} alt="Client Avatar 2" />
            <div className="flex flex-col justify-start items-center gap-1">
              <div className="w-64 text-center text-zinc-900 text-lg font-bold">Dhiren Das</div>
              <div className="w-64 text-center text-zinc-600 text-sm font-normal">Event Coordinator</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 mt-8 relative">
        <div className="w-3.5 h-3.5 left-0 top-0 absolute rounded-full border-2 border-red-500" />
        <div className="w-2 h-2 left-[14px] top-[3px] absolute bg-red-500 rounded-full border border-red-500" />
        <div className="w-2 h-2 left-[48px] top-[3px] absolute bg-red-500 rounded-full border border-red-500" />
      </div>
    </div>
  );
};

export default Reviews;
