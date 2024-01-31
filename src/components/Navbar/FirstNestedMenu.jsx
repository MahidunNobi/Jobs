"use client"
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import React, {useState} from "react";
import Description from "./Description";


const FirstNestedMenu = ({FindAJob, BrowseAndBuy, GetAdvice}) => {

    const [hover, setHover] = useState(1)

  return (
    <div className="w-screen hidden group-hover:block absolute top-[60px] left-0 bg-white text-gray-800 shadow-md">
                <div className="container mx-auto py-6 flex justify-between gap-6">

                {/* Menubar container */}
                <div className="">
                  <div onMouseOver={()=> setHover(1)} style={{backgroundColor: hover == 1 ?"rgb(20 168 0 / 10%)" : ""}} className=" flex items-center justify-between hover:bg-grn/10 px-3 py-2 rounded-lg group/2link">
                    <div className="title mr-6">
                      <p>Post a job and hire a pro</p>
                      <span className="text-grn text-sm"> Talent marketplace </span>
                    </div>
                    <FaAngleRight 
                    className=" group-hover/2link:text-grn" 
                    style={{color: hover == 1 ?"rgb(20 168 0)" : ""}}
                    />
                  </div>
                  <div onMouseOver={()=> setHover(2)} style={{backgroundColor: hover == 2 ?"rgb(20 168 0 / 10%)" : ""}} className="flex items-center justify-between hover:bg-grn/10 px-3 py-2 my-6 rounded-lg group/2link">
                    <div className="title mr-6">
                      <p>Browse and buy projects</p>
                      <span className="text-grn text-sm"> Projects Catelog </span>
                    </div>
                    <FaAngleRight 
                    className="group-hover/2link:text-grn"
                    style={{color: hover == 2 ?"rgb(20 168 0)" : ""}} 
                    />
                  </div>
                  <div onMouseOver={()=> setHover(3)} style={{backgroundColor: hover == 3 ?"rgb(20 168 0 / 10%)" : ""}} className="flex items-center justify-between hover:bg-grn/10 px-3 py-2 rounded-lg group/2link">
                    <div className="title mr-6">
                      <p>Get advice from industry experts</p>
                      <span className="text-grn text-sm"> Consultation</span>
                    </div>
                    <FaAngleRight 
                    className="group-hover/2link:text-grn"
                    style={{color: hover == 3 ?"rgb(20 168 0)" : ""}} 
                    />
                  </div>
                </div>

                {/* Divider */}
                <div>
                  <hr className="h-[100%] border  my-auto rounded-full" />
                </div>

                {/* Menu Item details */}
                <div className="flex-1 relative">
                  {/* First menu Description container */}
                  <div style={{display: hover == 1 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >
                    {/* Description */}
                    <div>
                      <h5 className=" font-medium"> Talent Marketplace <sup> TM </sup> </h5>
                      <p className="text-sm my-2">
                        Learn about working with talent or explore your specific hiring needs.
                      </p>
                      <a
                        href=""
                        className="text-grn flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline"
                      >
                        <span className="font-bold"> Hire on Talent Marketplace </span>
                        <FaArrowRight />
                      </a>
                    </div>

                    {/* Links */}
                    <div className=" min-w-[300px] py-6 flex flex-col fap-1">
                      {FindAJob.map((ele, i) => 
                      <a key={i+32} href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         {ele}
                      </a>)}
                      
                    </div>
                  </div>
                  {/* Second menu Description container */}
                  <div style={{display: hover == 2 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >

                    {/* Description */}                    
                    <Description 
                    width={"180px"}
                    title={"Project Catalog"} 
                    sup={"TM"} 
                    text={"Browse and buy projects that have a clear scope and price."} 
                    linkText={"Browse Project Catalog"}
                    />

                    {/* Cards */}
                    <ul className="  min-w-[300px] py-6 flex flex-1 flex-wrap gap-2 *:w-[160px] *:rounded-lg *:border *:border-gray-300">
                      {BrowseAndBuy.map((ele, i)=> 
                      <li key={i+36} className="group/card">
                        <img src={ele.img} alt="" />
                        <p className="text-center text-sm h-[60px] flex items-center justify-center group-hover/card:bg-grn/10">{ele.text}</p>
                      </li>)}
                    </ul>
                  </div>
                  {/* Third menu Description container */}
                  <div style={{display: hover == 3 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >
                    <Description 
                    width={"220px"}
                    title={"Consultations"} 
                    sup={""} 
                    text={"Explore what is possible with an industry expert. See their availability and book a time that works for you."} 
                    linkText={"Explore all categories"}
                    />
                    {/* Cards */}
                    <ul className="  min-w-[300px] py-6 flex flex-1 flex-wrap gap-2 *:w-[160px] *:rounded-lg *:border *:border-gray-300">
                      {GetAdvice.map((ele, i)=> 
                      <li key={i+40} className="group/card">
                        <img src={ele.img} alt="" />
                        <p className="text-center text-sm px-1 h-[60px] flex items-center justify-center group-hover/card:bg-grn/10">{ele.text}</p>
                      </li>)}
                    </ul>
                  </div>

                </div>                
                </div>
              </div>
  )
}

export default FirstNestedMenu