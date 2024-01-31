"use client";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import {
  FaAngleLeft,
  FaAngleDown,
  FaAngleRight,
  FaArrowLeft,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showTalent, setshowTalent] = useState(false);
  const [showWork, setshowWork] = useState(false);
  const [showWhyUs, setshowWhyUs] = useState(false);

  const [showPostaJob, setshowPostaJob] = useState(false);
  const [showBrowseAndBuy, setshowBrowseAndBuy] = useState(false);
  const [showGetAdvice, setshowGetAdvice] = useState(false);

  const collapseAllMenu = () => {
    setShowMenu(false);
    setshowTalent(false);
    setshowWork(false);
    setshowWhyUs(false);

    setshowPostaJob(false);
    setshowBrowseAndBuy(false);
    setshowGetAdvice(false);
  };

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
                <button
                  onClick={() => setshowPostaJob(true)}
                  className="w-full text-left flex items-center justify-between px-3 py-2"
                >
                  <div className=" ">
                    <p>Post a job and hire a pro</p>
                    <span className="text-grn text-sm">Talent marketplace</span>
                  </div>
                  <FaAngleRight className="" />
                </button>
              </li>

              <li>
                <button
                  onClick={() => setshowBrowseAndBuy(true)}
                  className=" flex w-full text-left items-center justify-between px-3 py-2"
                >
                  <div className=" ">
                    <p>Browse and buy projects</p>
                    <span className="text-grn text-sm"> Projects Catelog </span>
                  </div>
                  <FaAngleRight className="" />
                </button>
              </li>

              <li>
                <button
                  onClick={() => setshowGetAdvice(true)}
                  className=" flex w-full text-left items-center justify-between px-3 py-2"
                >
                  <div className=" ">
                    <p>Get advice from industry experts</p>
                    <span className="text-grn text-sm"> Consultation </span>
                  </div>
                  <FaAngleRight className="" />
                </button>
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
              <a
                href=""
                className="text-grn flex justify-between items-center text-sm max-w-[160px] underline hover:no-underline my-3"
              >
                <span className="font-bold"> See Resources </span>
              </a>
            </ul>
          </li>
          {/* Enterprise */}
          <li>
            <button className="px-3 py-6 text-left cursor-pointer w-full">
              <span> Enterprise </span>
            </button>
          </li>
        </ul>

        {/* Post a job and hire a pro nested Menu */}
        <div
          style={{
            transform: showPostaJob ? "translateX(0)" : "translateX(-100%)",
          }}
          className="absolute top-0 left-0 origin-left bg-white min-w-screen h-screen duration-300"
        >
          {/* Action Buttons */}
          <div className="flex justify-between p-4 border-b border-gray-300">
            <div className="flex justify-center gap-3">
              <button onClick={() => setshowPostaJob(false)}>
                <FaArrowLeft className="text-lg" />
              </button>
              <span className="">
                Talent Marketplace <sup>TM </sup>
              </span>
            </div>
            <button className="" onClick={collapseAllMenu}>
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          {/* Description */}

          <p className="text-sm my-2 p-4">
            Learn about working with talent or explore your specific hiring
            needs. &nbsp;
            <a
              href=""
              className="text-grn inline-flex justify-between items-center text-sm font-bold max-w-[220px] underline hover:no-underline"
            >
              Hire on Talent Marketplace
            </a>
          </p>

          {/* Options */}
          <ul className="p-4">
            <li className="py-5">
              <h5 className="font-medium "> Development & IT </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Design & Creative </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Sales & Marketing </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Writing & Translation </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Admin & Customers Support </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Finance & Accouting </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> HR & Training </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Legal </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Engineering & Architecture </h5>
            </li>
            <li className="py-5">
              <h5 className="font-medium "> Hire freelancers </h5>
            </li>
          </ul>
        </div>

        {/* Browse and buy projects nested menu */}
        <div
          style={{
            transform: showBrowseAndBuy ? "translateX(0)" : "translateX(-100%)",
          }}
          className="absolute top-0 left-0 origin-left bg-white w-screen min-h-screen duration-300"
        >
          {/* Action Buttons */}
          <div className="flex justify-between p-4 border-b border-gray-300">
            <div className="flex justify-center gap-3">
              <button onClick={() => setshowBrowseAndBuy(false)}>
                <FaArrowLeft className="text-lg" />
              </button>
              <span className="">
                Project Catalog <sup>TM </sup>
              </span>
            </div>
            <button className="" onClick={collapseAllMenu}>
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          {/* Description */}
          <p className="text-sm my-2 p-4">
            Browse and buy projects that have a clear scope and price. &nbsp;
            <a
              href=""
              className="text-grn font-bold inline-flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline"
            >
              Browse Project Catalog
            </a>
          </p>

          {/* Options */}
          <ul className="p-4 space-y-4">
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Logo Design</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Article & Blogs</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Wordpress</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Social media manegment</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Video editing</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">SEO</p>
            </li>            
          </ul>
        </div>

        {/* Get Advice from industry experts */}
        <div
          style={{
            transform: showGetAdvice ? "translateX(0)" : "translateX(-100%)",
          }}
          className="absolute top-0 left-0 origin-left bg-white w-screen min-h-screen duration-300"
        >
          {/* Action Buttons */}
          <div className="flex justify-between p-4 border-b border-gray-300">
            <div className="flex justify-center gap-3">
              <button onClick={() => setshowGetAdvice(false)}>
                <FaArrowLeft className="text-lg" />
              </button>
              <span className="">
                Consultations
              </span>
            </div>
            <button className="" onClick={collapseAllMenu}>
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          {/* Description */}
          <p className="text-sm my-2 p-4">
          Explore what is possible with an industry expert. See their availability and book a time that works for you. &nbsp;
            <a
              href=""
              className="text-grn font-bold inline-flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline"
            >
              Explore all categories
            </a>
          </p>

          {/* Options */}
          <ul className="p-4 space-y-4">
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/web-programming.bba7813a.png"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Web programming</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/ai.b8aa0451.png"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">AI & Mechine Learning</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/marketing.43b52b75.png"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Marketing Strategy</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/social-media.775752fd.png"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Social Media Marketing</p>
            </li>
            <li className="flex items-center gap-3 overflow-hidden border border-gray-300 rounded-md">
              <img
                src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/website-builders.6acb130a.png"
                alt=""
                className="w-[100px] object-cover"
              />
              <p className="py-4">Website builders and CMS</p>
            </li>
                     
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
