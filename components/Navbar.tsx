"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-black flex flex-col md:flex-row justify-between items-center p-4'>
      <div className='flex items-center w-full justify-between md:justify-start'>
        <div className='text-xl md:text-2xl font-bold text-white italic ml-4 md:ml-16' style={{ fontFamily: 'Georgia' }}>
          <span className='text-[#d89be4]'>Maryam </span>Muzzammil
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mr-12' style={{ fontFamily: 'Georgia' }}>
          <li className='relative group italic cursor-pointer'>
            <span className='hover:underline decoration-[#d89be4] decoration-2 text-white italic font-medium'>Contact</span>
          </li>
          <li className='relative group italic cursor-pointer'>
            <span className='hover:underline decoration-[#d89be4] decoration-2 text-white italic md:pl-6 font-medium'>About</span>
          </li>
          <li className='relative group italic cursor-pointer'>
            <span className='block px-3 py-0.5 text-white italic bg-gradient-to-r from-[#b969c5] to-[#6c0087] rounded-md md:ml-7 font-medium group-hover:bg-gradient-to-r group-hover:from-[#6f047f] group-hover:to-[#cb78e0] transition-all duration-300'>Projects</span>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
