import React from 'react'

const WhyUsNestedMenu = ({showWhyUs}) => {
  return (
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
  )
}

export default WhyUsNestedMenu