import React from "react";
import MetricItem from "./MetricItem";

const Metrics = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 relative bg-[#0b0d17]">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 relative self-stretch w-full">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Our Metrics Tell the Story
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
          Explore Compelling Insights Uncovered by Our Metrics and Data Analysis
        </p>
      </div>
      <div className="flex flex-col sm:flex-row w-full items-start gap-4 sm:gap-6 md:gap-8 relative mx-auto">
        <MetricItem
          className="border-[#fe3838] flex-1 border-b-4 shadow-md grow w-full sm:w-full md:w-1/3"
          label="Happy Organisers"
          labelClassName="font-normal"
          number="500+"
          numberClassName="mt-[-16.00px] tracking-[-0.76px] text-3xl font-bold leading-[49.4px]"
          variant="one"
        />
        <MetricItem
          className="border-[#fe3838] flex-1 border-b-4 shadow-md grow w-full sm:w-full md:w-1/3"
          label="Successful Events Organised"
          labelClassName="font-normal"
          number="2500+"
          numberClassName="mt-[-16.00px] tracking-[-0.76px] text-3xl font-bold leading-[49.4px]"
          variant="one"
        />
        <MetricItem
          className="border-[#fe3838] flex-1 border-b-4 shadow-md grow w-full sm:w-full md:w-1/3"
          label="Tickets Sold"
          labelClassName="font-normal"
          number="50000+"
          numberClassName="mt-[-16.00px] tracking-[-0.76px] text-3xl font-bold leading-[49.4px]"
          variant="one"
        />
      </div>
    </div>
  );
};

export default Metrics;
