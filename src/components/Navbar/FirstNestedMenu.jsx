"use client"
import { FaAngleRight, FaArrowRight   } from "react-icons/fa";
import React, {useState} from "react";


const FirstNestedMenu = () => {

    const [hover, setHover] = useState(1)
console.log(hover)
  return (
    <div className="w-screen hidden group-hover:block absolute top-[60px] left-0 bg-white text-gray-800">
                <div className="container mx-auto py-6 flex justify-between gap-6">
                {/* Menubar container */}
                <div className="">
                  <div onMouseOver={()=> setHover(1)} style={{backgroundColor: hover == 1 ?"rgb(20 168 0 / 10%)" : ""}} className=" flex items-center justify-between hover:bg-grn/10 px-3 py-2 rounded-lg">
                    <div className="title mr-6">
                      <p>Post a job and hire a pro</p>
                      <span className="text-grn text-sm"> Talent marketplace </span>
                    </div>
                    <FaAngleRight className="" />
                  </div>
                  <div onMouseOver={()=> setHover(2)} style={{backgroundColor: hover == 2 ?"rgb(20 168 0 / 10%)" : ""}} className="flex items-center justify-between hover:bg-grn/10 px-3 py-2 my-6 rounded-lg">
                    <div className="title mr-6">
                      <p>Browse and buy projects</p>
                      <span className="text-grn text-sm"> Projects Catelog </span>
                    </div>
                    <FaAngleRight />
                  </div>
                  <div onMouseOver={()=> setHover(3)} style={{backgroundColor: hover == 3 ?"rgb(20 168 0 / 10%)" : ""}} className="flex items-center justify-between hover:bg-grn/10 px-3 py-2 rounded-lg">
                    <div className="title mr-6">
                      <p>Get advice from industry experts</p>
                      <span className="text-grn text-sm"> Consultation</span>
                    </div>
                    <FaAngleRight />
                  </div>
                </div>
                {/* Divider */}
                <div>
                  <hr className="h-[100%] border  my-auto rounded-full" />
                </div>
                {/* Menu Item details */}
                <div className="flex-1 relative">
                  {/* First menu container */}
                  <div style={{display: hover == 1 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >
                    {/* Description */}
                    <div className="">
                      <h5 className=""> Talent Marketplace <sup>TM </sup> </h5>
                       <p className="text-sm my-2"> 
                        Learn about working with talent or explore your specific hiring needs.
                      </p>
                      <a href="" className="text-grn flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline">
                      <span className="font-bold">  Hire on Talent Marketplace </span>
                      <FaArrowRight />
                      </a>
                    </div>
                    {/* Links */}
                    <div className=" min-w-[300px] py-6 flex flex-col fap-1">
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Development & IT
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Design & Creative
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Sales & Marketing
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Writing & Translation
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Admin & Customers Support
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Finance & Accouting
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         HR & Training
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Legal
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Engineering & Architecture
                      </a>
                      <a href="#" className="px-6 py-2 text-sm rounded-lg hover:bg-grn/15 w-full">
                         Hire freelancers
                      </a>
                    </div>
                  </div>
                  <div style={{display: hover == 2 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >
                    {/* Description */}
                    <div className="">                       
                      <h5 className=""> Project Catalog <sup>TM </sup> </h5>
                       <p className="text-sm my-2"> 
                        Browse and buy projects that have a clear scope and price.
                      </p>
                      <a href="" className="text-grn flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline">
                      <span className="font-bold">  Browse Project Catalog </span>
                      <FaArrowRight />
                      </a>
                    </div>
                    {/* Cards */}
                    <div className=" min-w-[300px] py-6 flex flex-col fap-1">
                      <div className="w-[150px] rounded-lg border border-gray-300">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg" alt="" />
                        <p className="text-center py-4">Logo Design</p>
                      </div>
                    </div>
                  </div>
                </div>                
                </div>
              </div>
  )
}

export default FirstNestedMenu