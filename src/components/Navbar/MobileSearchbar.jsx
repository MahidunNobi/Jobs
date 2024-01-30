import React from 'react'
import { FaSearch  } from "react-icons/fa";

const MobileSearch = () => {
  return (
    <div className='md:hidden'>
      <div className="icon">
        <FaSearch className='text-xl' />
      </div>
    </div>
  )
}

export default MobileSearch