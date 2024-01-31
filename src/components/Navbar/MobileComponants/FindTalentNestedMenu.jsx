import React from 'react'
import { FaAngleRight } from "react-icons/fa"

const FindTalentNestedMenu = ({showTalent, setshowPostaJob, setshowBrowseAndBuy, setshowGetAdvice}) => {
  return (
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
  )
}

export default FindTalentNestedMenu