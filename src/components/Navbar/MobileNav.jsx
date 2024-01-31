"use client";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTalent, setshowTalent] = useState(false);
  const [showWork, setshowWork] = useState(false);
  const [showWhyUs, setshowWhyUs] = useState(false);


  const collapseAllMenu= ()=>{
    setShowMenu(false)
    setshowTalent(false)
    setshowWork(false)
    setshowWhyUs(false)
  }

  return (
    <div className="lg:hidden">
      <button className="logo" onClick={() => setShowMenu(true)}>
        <RiMenu2Fill className="text-2xl" />
      </button>
      <div
        style={{ transform: showMenu ? "scaleX(1)" : "scaleX(0)" }}
        className="absolute top-0 left-0 origin-left bg-white w-screen h-screen  duration-300"
      >
        {/* Back Button */}
        <button className="p-4" onClick={collapseAllMenu}>
          <FaAngleLeft className="text-lg" />
        </button>
        {/* Menu Container  */}
        <ul className="">
          {/* Find Talent */}
          <li>
            <button
              style={{
                backgroundColor: showTalent ? "rgb(20 168 0 / 10%)" : "",
              }}
              className="peer group flex justify-between items-center px-3 py-6 cursor-pointer w-full"
              onClick={() => setshowTalent(!showTalent)}
            >
              <span> Find Tallent </span>
              <FaAngleDown
                style={{ rotate: showTalent ? "180deg" : "0deg" }}
                className=" rota duration-300"
              />
            </button>
            {/* First Layer nested Menu */}
            <ul
              style={{ height: showTalent ? "auto" : "0" }}
              className="overflow-hidden duration-200 pl-3"
            >
              <li>
                <div className=" flex items-center justify-between px-3 py-2">
                  <div className=" ">
                    <p>Post a job and hire a pro</p>
                    <span className="text-grn text-sm">Talent marketplace</span>
                  </div>
                  <FaAngleRight className="" />
                </div>
              </li>

              <li>
                <div className=" flex items-center justify-between px-3 py-2">
                  <div className=" ">
                    <p>Browse and buy projects</p>
                    <span className="text-grn text-sm"> Projects Catelog </span>
                  </div>
                  <FaAngleRight className="" />
                </div>
              </li>

              <li>
                <div className=" flex items-center justify-between px-3 py-2">
                  <div className=" ">
                    <p>Get advice from industry experts</p>
                    <span className="text-grn text-sm"> Consultation </span>
                  </div>
                  <FaAngleRight className="" />
                </div>
              </li>
            </ul>
          </li>

          {/* Find Work */}
          <li>
            <button
              style={{ backgroundColor: showWork ? "rgb(20 168 0 / 10%)" : "" }}
              className="peer group flex justify-between items-center px-3 py-6 cursor-pointer w-full"
              onClick={() => setshowWork(!showWork)}
            >
              <span> Find Work </span>
              <FaAngleDown
                style={{ rotate: showWork ? "180deg" : "0deg" }}
                className=" rota duration-300"
              />
            </button>
            {/* First Layer nested Menu */}
            <ul
              style={{ height: showWork ? "auto" : "0" }}
              className="overflow-hidden duration-200 pl-3"
            >
              <li>
                <div className=" flex items-center justify-between px-3 py-4">
                  <div className=" ">
                    <h5 className="font-medium mb-1">Ways to earn</h5>
                    <p className="text-sm leading-tight">
                      {" "}
                      Learn why we have the right oportunity for you{" "}
                    </p>
                  </div>                  
                </div>
              </li>

              <li>
                <div className=" flex items-center justify-between px-3 py-4">
                  <div className=" ">
                    <h5 className="font-medium mb-1">
                      Find work for your skill
                    </h5>
                    <p className="text-sm leading-tight">
                      Explore the kind of work available in your field{" "}
                    </p>
                  </div>                  
                </div>
              </li>

              <li>
                <div className=" flex items-center justify-between px-3 py-4">
                  <div className=" ">
                    <h5 className="font-medium mb-1">Win work with ads</h5>
                    <p className="text-sm leading-tight">
                      {" "}
                      Get noticed by the right client{" "}
                    </p>
                  </div>                  
                </div>
              </li>
            </ul>
          </li>

          {/* Why us */}
          <li>
            <button
              style={{
                backgroundColor: showWhyUs ? "rgb(20 168 0 / 10%)" : "",
              }}
              className="peer group flex justify-between items-center px-3 py-6 cursor-pointer w-full"
              onClick={() => setshowWhyUs(!showWhyUs)}
            >
              <span> Why US </span>
              <FaAngleDown
                style={{ rotate: showWhyUs ? "180deg" : "0deg" }}
                className=" rota duration-300"
              />
            </button>
            {/* First Layer nested Menu */}
            <ul
              style={{ height: showWhyUs ? "auto" : "0" }}
              className="overflow-hidden duration-200 pr-3 pl-6"
            >
              <li className="py-5">
                <h5 className="font-medium "> Success Stories </h5>
              </li>
              <li className="py-5">
                <h5 className="font-medium "> Reviews </h5>
              </li>
              <li className="py-5">
                <h5 className="font-medium "> How to find work </h5>
              </li>
              <li className="py-5">
                <h5 className="font-medium "> How to hire </h5>
              </li>
              <li className="px-6 py-2 rounded-lg hover:bg-grn/10 border border-gray-300">
                    <span className="text-xs mb-2"> Guids</span>
                    <p className="">Getting started as a freelancer</p>
                </li>
                <li className="px-6 py-2 my-3 rounded-lg hover:bg-grn/10 border border-gray-300">
                    <span className="text-xs mb-2"> Guids</span>
                    <p className="">Growing your freelance career</p>
                </li>
                <li className="px-6 py-2 rounded-lg hover:bg-grn/10 border border-gray-300">
                    <span className="text-xs mb-2"> Guids</span>
                    <p className="">Hiring & Working with indepent talent</p>
                </li>
                <a href="" className="text-grn flex justify-between items-center text-sm max-w-[160px] underline hover:no-underline my-3">
                <span className="font-bold">  See Resources </span>                
              </a>
            </ul>
          </li>

          <li>
          <button className="px-3 py-6 text-left cursor-pointer w-full">
              <span> Enterprise </span> 
                           
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
