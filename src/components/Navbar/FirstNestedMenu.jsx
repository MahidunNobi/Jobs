"use client"
import { FaAngleRight, FaArrowRight   } from "react-icons/fa";
import React, {useState} from "react";


const FirstNestedMenu = () => {

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

                  {/* Second menu Description container */}
                  <div style={{display: hover == 2 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >
                    {/* Description */}
                    <div className=" w-[220px]">                       
                      <h5 className=""> Project Catalog <sup>TM </sup> </h5>
                       <p className="text-sm my-2"> 
                        Browse and buy projects that have a clear scope and price.
                      </p>
                      <a href="" className="text-grn flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline">
                      <span className="font-bold">  Browse Project Catalog </span>
                      <FaArrowRight  />
                      </a>
                    </div>
                    {/* Cards */}
                    <div className="  min-w-[300px] py-6 flex flex-1 flex-wrap gap-2 *:w-[160px] *:rounded-lg *:border *:border-gray-300">
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">Logo Design</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">Article & Blogs</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">Wordpress</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg" alt="" />
                        <p className="text-center text-sm py-1 group-hover/card:bg-grn/10">Social media manegment</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">Video editing</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">SEO</p>
                      </div>                   

                    </div>
                  </div>

                  {/* Third menu Description container */}
                  <div style={{display: hover == 3 ? "flex" : "none"}} className=" gap-6 before:w-[60px] before:bg-grn before:rounded-full before:absolute before:h-[4px] before:-top-1 before:left-6 p-6 " >
                    {/* Description */}
                     <div className=" w-[220px]">                       
                      <h5 className=""> Consultations </h5>
                       <p className="text-sm my-2"> 
                       Explore what is possible with an industry expert. See their availability and book a time that works for you.
                      </p>
                      <a href="" className="text-grn flex justify-between items-center text-sm max-w-[220px] underline hover:no-underline">
                      <span className="font-bold">  Explore all categories </span>
                      <FaArrowRight  />
                      </a>
                    </div>
                    {/* Cards */}
                    <div className="  min-w-[300px] py-6 flex flex-1 flex-wrap gap-2 *:w-[160px] *:rounded-lg *:border *:border-gray-300">
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/web-programming.bba7813a.png" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">Web programming</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/ai.b8aa0451.png" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">AI & Mechine Learning</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/marketing.43b52b75.png" alt="" />
                        <p className="text-center text-sm py-4 group-hover/card:bg-grn/10">Marketing Strategy</p>
                      </div>
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/social-media.775752fd.png" alt="" />
                        <p className="text-center text-sm p-2 group-hover/card:bg-grn/10">Social Media Marketing</p>
                      </div>                      
                      <div className="group/card">
                        <img src="https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/website-builders.6acb130a.png" alt="" />
                        <p className="text-center text-sm py-2 group-hover/card:bg-grn/10">Website builders and CMS</p>
                      </div>                   

                    </div>
                  </div>
                </div>                
                </div>
              </div>
  )
}

export default FirstNestedMenu