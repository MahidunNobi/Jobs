import React from "react";

const Description = ({text, linkText}) => {
  return (
    <p className="text-sm my-2 p-4">
      {text}
      &nbsp;
      <a
        href=""
        className="text-grn inline-flex justify-between items-center text-sm font-bold max-w-[220px] underline hover:no-underline"
      >
        {linkText}
      </a>
    </p>
  );
};

export default Description;
