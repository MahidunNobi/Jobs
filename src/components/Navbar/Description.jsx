import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Description = ({width, title, sup, text, linkText}) => {
  return (
    <div className={`w-[${width}]`}>
      <h5 className=" font-medium"> {title} <sup> {sup} </sup> </h5>
      <p className="text-sm my-2">
        {text}
      </p>
      <a
        href=""
        className="text-grn flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline"
      >
        <span className="font-bold"> {linkText} </span>
        <FaArrowRight />
      </a>
    </div>
  );
};

export default Description;
