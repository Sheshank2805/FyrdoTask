import React from "react";

const MetricItem = ({
  number = "5000+",
  label = "Projects Created",
  variant,
  className,
  numberClassName,
  labelClassName,
}) => {
  return (
    <div
      className={`border-[#f2bfaf] flex relative w-[210px] flex-col ${variant === "two" ? "border-l-4" : ""} ${
        variant === "two" ? "items-start" : "items-center"
      } ${variant === "one" ? "shadow-[34.85px_29.63px_48.34px_#3265ff0d]" : ""} ${
        variant === "two" ? "pl-[20px] pr-0 py-0" : "px-[16px] py-[48px]"
      } ${variant === "one" ? "border-b-4" : ""} ${variant === "one" ? "rounded-[20px_20px_0px_0px]" : ""} ${
        variant === "one" ? "gap-[5px]" : ""
      } ${variant === "two" ? "[border-left-style:solid]" : ""} ${variant === "one" ? "bg-white" : ""} ${
        variant === "one" ? "[border-bottom-style:solid]" : ""
      } ${variant === "one" ? "overflow-hidden" : ""} ${className}`}
    >
      <div
        className={`font-display-m self-stretch mt-[-4.00px] tracking-[var(--display-m-letter-spacing)] text-[length:var(--display-m-font-size)] [font-style:var(--display-m-font-style)] font-[number:var(--display-m-font-weight)] leading-[var(--display-m-line-height)] relative ${
          variant === "two" ? "text-onboarding-background-grey" : "text-[#2d2d2d]"
        } ${variant === "one" ? "text-center" : ""} ${numberClassName}`}
      >
        {variant === "one" && <>{number}</>}

        {variant === "two" && <>5000+</>}
      </div>
      <div
        className={`self-stretch relative ${variant === "two" ? "font-body-m" : "[font-family:'Mulish',Helvetica]"} ${
          variant === "two" ? "tracking-[var(--body-m-letter-spacing)]" : "tracking-[0]"
        } ${variant === "two" ? "[font-style:var(--body-m-font-style)]" : ""} ${
          variant === "two" ? "text-[length:var(--body-m-font-size)]" : "text-[16px]"
        } ${variant === "two" ? "text-onboarding-background-grey" : "text-[#2d2d2d]"} ${
          variant === "two" ? "font-[number:var(--body-m-font-weight)]" : "font-normal"
        } ${variant === "one" ? "text-center" : ""} ${
          variant === "two" ? "leading-[var(--body-m-line-height)]" : "leading-[20.8px]"
        } ${labelClassName}`}
      >
        {variant === "one" && <>{label}</>}

        {variant === "two" && <>Projects created</>}
      </div>
    </div>
  );
};

export default MetricItem