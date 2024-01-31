import React from "react";

const ImageText = ({img, text}) => {
  return (
    <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
      <img
        src={img}
        alt=""
        className="w-[100px] object-cover"
      />
      <p className="py-4">{text}</p>
    </li>
  );
};

export default ImageText;
