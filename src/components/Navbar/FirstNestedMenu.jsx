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
                              
                </div>
              </div>
  )
}

export default FirstNestedMenu