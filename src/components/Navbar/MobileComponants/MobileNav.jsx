"use client";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import {
  FaAngleLeft,
  FaAngleDown,
} from "react-icons/fa";
import ImageText from "./ImageText";
import FindTalentNestedMenu from "./FindTalentNestedMenu";
import FindWordNestedMenu from "./FindWordNestedMenu";
import WhyUsNestedMenu from "./WhyUsNestedMenu";
import ActionButtons from "./ActionButtons";
import Description from "./Description";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
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

  const FindAJob = [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    " Writing & Translation",
    "Admin & Customers Support",
    "Finance & Accouting",
    "HR & Training",
    "Legal",
    " Engineering & Architecture",
    "Hire freelancers",
  ];

  const BrowseAndBuy = [
    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg",
      text: "Logo Design",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg",
      text: "Article & Blogs",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg",
      text: "Wordpress",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg",
      text: "Social media manegment",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg",
      text: "Video editing",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg",
      text: "SEO",
    },
  ];

  const GetAdvice = [
    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/web-programming.bba7813a.png",
      text: "Web programming",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/ai.b8aa0451.png",
      text: "AI & Mechine Learning",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/marketing.43b52b75.png",
      text: "Marketing Strategy",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/social-media.775752fd.png",
      text: "Social Media Marketing",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/website-builders.6acb130a.png",
      text: "Website builders and CMS",
    },
  ];

  return (
    <div className="lg:hidden">
      <button className="logo" onClick={() => setShowMenu(true)}>
        <RiMenu2Fill className="text-2xl" />
      </button>

      {/* Menus with first label nested menus */}
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

            <FindTalentNestedMenu
              showTalent={showTalent}
              setshowPostaJob={setshowPostaJob}
              setshowBrowseAndBuy={setshowBrowseAndBuy}
              setshowGetAdvice={setshowGetAdvice}
            />
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
            <FindWordNestedMenu showWork={showWork} />
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
            <WhyUsNestedMenu showWhyUs={showWhyUs} />
          </li>

          {/* Enterprise */}
          <li>
            <button className="px-3 py-6 text-left cursor-pointer w-full">
              <span> Enterprise </span>
            </button>
          </li>
        </ul>
      </div>

      {/* Secound label nested menues */}
      <div>
        {/* Post a job and hire a pro nested Menu */}
        <div
          style={{
            transform: showPostaJob ? "translateX(0)" : "translateX(-100%)",
          }}
          className="absolute top-0 left-0 origin-left bg-white min-w-screen h-screen duration-300"
        >
          <ActionButtons
            setshow={setshowPostaJob}
            title={"Talent Marketplace"}
            sup={"TM"}
            collapseAllMenu={collapseAllMenu}
          />
          <Description
            text={
              "Learn about working with talent or explore your specific hiring needs."
            }
            linkText={"Hire on Talent Marketplace"}
          />
          {/* Options */}
          <ul className="p-4">
            {FindAJob.map((ele, i) => (
              <li key={i} className="py-5">
                <h5 className="font-medium ">{ele}</h5>
              </li>
            ))}
          </ul>
        </div>

        {/* Browse and buy projects nested menu */}
        <div
          style={{
            transform: showBrowseAndBuy ? "translateX(0)" : "translateX(-100%)",
          }}
          className="absolute top-0 left-0 origin-left bg-white w-screen min-h-screen duration-300"
        >
          <ActionButtons
            setshow={setshowBrowseAndBuy}
            title={"Project Catalog"}
            sup={"TM"}
            collapseAllMenu={collapseAllMenu}
          />
          <Description
            text={"Browse and buy projects that have a clear scope and price."}
            linkText={"Browse Project Catalog"}
          />

          {/* Options */}
          <ul className="p-4 space-y-4">
            {BrowseAndBuy.map((ele, i) => (
              <ImageText key={i + 20} img={ele.img} text={ele.text} />
            ))}
          </ul>
        </div>

        {/* Get Advice from industry experts */}
        <div
          style={{
            transform: showGetAdvice ? "translateX(0)" : "translateX(-100%)",
          }}
          className="absolute top-0 left-0 origin-left bg-white w-screen min-h-screen duration-300"
        >          
          <ActionButtons
            setshow={setshowGetAdvice}
            title={"Consultations"}
            sup={""}
            collapseAllMenu={collapseAllMenu}
          />
          <Description
            text={"Explore what is possible with an industry expert. See their availability and book a time that works for you."}
            linkText={"Explore all categories"}
          />       
          {/* Options */}
          <ul className="p-4 space-y-4">
            {GetAdvice.map((ele, i) => (
              <ImageText key={i + 30} img={ele.img} text={ele.text} />
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default MobileNav;
