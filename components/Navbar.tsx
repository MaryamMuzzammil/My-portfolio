"use client"
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-black flex justify-between items-center p-4'>
      <div className='text-2xl sm:text-3xl font-bold text-white'>
        <span className='text-[#d89be4]'>Maryam </span>Muzzammil
      </div>
      
      {/* Hamburger Icon */}
      <div className='block lg:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent`}>
        <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-white'>
          <li className='relative group italic cursor-pointer px-3 py-2'>
            <span className='relative z-10'>Contact</span>
            <div className='absolute inset-0 bg-gradient-to-r from-[#d89be4] to-[#f7a1c3] rounded-md opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
          </li>
          <li className='relative group italic cursor-pointer px-3 py-2'>
            <span className='relative z-10'>About</span>
            <div className='absolute inset-0 bg-gradient-to-r from-[#d89be4] to-[#f7a1c3] rounded-md opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
          </li>
          <li className='relative group italic cursor-pointer px-3 py-2'>
            <span className='relative z-10'>Project</span>
            <div className='absolute inset-0 bg-gradient-to-r from-[#d89be4] to-[#f7a1c3] rounded-md opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
