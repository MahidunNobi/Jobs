"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const MobileSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [option, setOption] = useState("talent");

  function handleSelectedStyle(value) {
    const SelectedNavStyle = {
      color: "#14a800",
      borderColor: "#14a800",
    };
    if (option === value) {
      return SelectedNavStyle;
    }
  }

  return (
    <div className="md:hidden" >
      <button className="icon block" onClick={()=> setShowSearch(true)}>
        <CiSearch className="text-2xl" />
      </button>
      <div style={{transform: showSearch ? "scaleX(1)": "scaleX(0)"}} className="absolute top-0 left-0 origin-right bg-white w-screen h-screen p-4 duration-300">
        {/* Back Button */}
        <button className="mb-3" onClick={()=>setShowSearch(false)}>
          <FaAngleLeft className="text-lg" />
        </button>
        {/* Search bar */}
        <div className="rounded-full flex items-center relative border border-gray-300">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent px-2 py-1 w-full rounded-full border-2 border-transparent focus:border-gray-400 "
          />
          <button className="active:bg-gray-200 duration-200 px-2 py-1 rounded-full">
            <CiSearch className="text-2xl text-gray-500" />
          </button>
        </div>

        {/* Navigators */}
        <div>
          {/* Navigations */}
          <ul className="w-full border-b border-gray-300 my-3 flex">
            <li style={handleSelectedStyle("talent")} className="p-2 border-b">
              <button onClick={() => setOption("talent")}>Talent</button>
            </li>
            <li
              style={handleSelectedStyle("projects")}
              className="p-2 border-b "
            >
              <button onClick={() => setOption("projects")}>Projects</button>
            </li>
            <li style={handleSelectedStyle("jobs")} className="p-2 border-b ">
              <button onClick={() => setOption("jobs")}>Jobs</button>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
