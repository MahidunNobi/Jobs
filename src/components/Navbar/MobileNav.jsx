import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";

const MobileNav = () => {
  return (
    <div className='lg:hidden'>
        <div className="logo">
            <RiMenu2Fill className='text-2xl' />
        </div>
    </div>
  )
}

export default MobileNav