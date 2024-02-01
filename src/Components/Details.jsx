import React from 'react';
import IdImg from "../assets/Realistic ID Cards.jpg";
import greetImg from "../assets/Greet.jpg";
import celebrationImg from "../assets/celebration.jpg";
import shareImg from "../assets/share.jpg";

const Details = () => {
  return (
    <div className="w-full md:w-[1024px] px-4 md:px-20 py-8 md:py-[104px] justify-start items-center gap-16 flex flex-col md:flex-row bg-red-500">

    
      <div className="text-white text-3xl font-extrabold font-inter leading-[39px] mb-8">Exclusive App For Organiser</div>

      
      <div className="flex flex-col gap-10 w-full md:w-[420px] bg-white p-8 rounded-md">
        
        <div className="flex items-center gap-4">
          <div className="p-5 rounded-[20px] border border-emerald-600 border-opacity-20 flex items-center">
            <div className="w-[46px] h-[45px] relative overflow-hidden rounded-full">
              <img className="w-full h-full object-cover" src={celebrationImg} alt="celebration" />
            </div>
          </div>
          <div className="text-zinc-800 text-2xl font-semibold leading-[28.80px]">
            Seamless Event Check-In with Greet
          </div>
        </div>
        <div className="text-zinc-800 text-base font-normal leading-relaxed">
          Effortlessly manage event attendance! Greet's QR code scanning feature empowers organizers to swiftly confirm attendee presence at the event venue, ensuring a smooth and hassle-free check-in experience for everyone involved.
        </div>

      
        <div className="flex items-center gap-4">
          <div className="p-5 rounded-[20px] border border-emerald-600 border-opacity-20 flex items-center">
            <div className="w-12 h-12 relative overflow-hidden rounded-full">
              <img src={shareImg} alt="share" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-zinc-800 text-2xl font-semibold leading-[28.80px]">
            Empower Your Events with Real-Time Insights
          </div>
        </div>
        <div className="text-zinc-800 text-base font-normal leading-relaxed">
          Unlock the potential of your event's success! Greet provides event organizers with a comprehensive analytics dashboard, offering real-time data on sales, ticket bookings, and more.
        </div>
      </div>

    
      <div className="w-full md:w-full">
        <div className="w-full mb-8">
          <img className="w-full h-[600px] md:h-[715px] object-cover rounded-md" src={IdImg} alt="Realistic ID Cards" />
        </div>
        <div className="w-full">
          <img className="w-full h-[450px] md:h-[715px] object-cover rounded-md" src={greetImg} alt="Greet" />
        </div>
      </div>

    </div>
  );
};

export default Details;
