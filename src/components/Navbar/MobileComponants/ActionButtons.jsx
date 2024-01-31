import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const ActionButtons = ({setshow, title, sup, collapseAllMenu}) => {
  return (
    <div className="flex justify-between p-4 border-b border-gray-300">
            <div className="flex justify-center gap-3">
              <button onClick={() => setshow(false)}>
                <FaArrowLeft className="text-lg" />
              </button>
              <span className="">
                {title} <sup>{sup} </sup>
              </span>
            </div>
            <button className="" onClick={collapseAllMenu}>
              <IoMdClose className="text-2xl" />
            </button>
          </div>
  )
}

export default ActionButtons