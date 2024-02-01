import React from "react";
import magicwand from "../assets/MagicWand.jpg"
import flyingsaucer from "../assets/FlyingSaucer.jpg" 
import contactImg from "../assets/contact.jpg"
import phoneImg from "../assets/phone.jpg"
import vectorImg from "../assets/Vector.jpg"
import celebrationImg from "../assets/Confetti.jpg"

const Features = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-20 py-16 relative bg-white">
      <div className="mb-12 text-center">
        <div className="font-extrabold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[41.6px]">
          Features
        </div>
        <p className="mt-2 text-[#2d2d2d] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[24px]">
          Few good reasons why you should use Greet as your ticketing partner.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={magicwand} alt="Icon 1" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">
            Dedicated Relationship Manager
          </div>
          <p className="text-[#475467] text-base text-center">
            Fydo's Dedicated Relationship Manager offers personalized, stress-free event support from setup to the big day
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={flyingsaucer} alt="Icon 2" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">On Demand Settlement</div>
          <p className="text-[#475467] text-base text-center">
            Streamline settlements for stress-free event finances, offering flexibility and control in your planning
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={phoneImg} alt="Icon 3" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">24/7 Call Support</div>
          <p className="text-[#475467] text-base text-center">
            Count on Fydo's 24/7 On-Call Assistance for seamless event support anytime, for organizers and attendees alike.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={celebrationImg} alt="Icon 4" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">Customer Analytics Data</div>
          <p className="text-[#475467] text-base text-center">
            Use Fydo's Customer Analytics Data for refined strategies, boosted engagement, and more resonant events from attendee insights
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={magicwand} alt="Icon 5" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">
            Dedicated Relationship Manager
          </div>
          <p className="text-[#475467] text-base text-center">
            Fydo's Dedicated Relationship Manager offers personalized, stress-free event support from setup to the big day
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={contactImg} alt="Icon 6" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">
            On site representative on event day
          </div>
          <p className="text-[#475467] text-base text-center">
            Fydo's on-site reps guarantee a smooth event day so you can focus on creating memorable moments
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={vectorImg} alt="Icon 7" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">
            Exclusive App for Organisers
          </div>
          <p className="text-[#475467] text-base text-center">
            Optimize events with Greet, Fydo's Organizer App, for effortless check-ins and real-time insights
          </p>
        </div>
        <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg border border-cta-aqua-squeeze shadow-md">
          <img className="w-16 h-16 mb-4" src={vectorImg} alt="Icon 8" />
          <div className="text-[#2d2d2d] text-xl font-semibold text-center mb-2">
            Exclusive App for Organisers
          </div>
          <p className="text-[#475467] text-base text-center">
            Optimize events with Greet, Fydo's Organizer App, for effortless check-ins and real-time insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
