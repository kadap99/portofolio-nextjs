"use client"
import React from 'react'
import {GoThreeBars} from 'react-icons/go'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sticky top-0 bg-slate-800'>
    <div className='flex flex-row items-start p-3 justify-between max-w-7xl mx-auto'>
        {/* BRAND */}
        <motion.h1 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='text-xl font-bold text-teal-500 font-Poppins'>
        TEKNOLOGIKA
        </motion.h1>

        {/* LINK SM */}
        <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='text-teal-500 text-2xl cursor-pointer hover:bg-teal-500 hover:text-white p-1 rounded-md md:hidden hover:duration-700' onClick={toggleCollapse}>
          <GoThreeBars />
        </motion.div>
        
        {/* LNIK LG */}
        <motion.ul
         initial={{
           x: 500,
           opacity: 0,
           scale: 0.5,
         }}
         animate={{
           x: 0,
           opacity: 1,
           scale: 1,
         }}
         transition={{
           duration: 1,
         }}
        
        className='gap-5 hidden md:flex text-teal-500'>
            <a href='https://google.com' target={'_blank'}  className='cursor-pointer'>Home</a>
            <a href='https://google.com' target={'_blank'} className='cursor-pointer'>Profil</a>
            <a href='https://google.com' target={'_blank'} className='cursor-pointer'>Resume</a>
            <a href='https://google.com' target={'_blank'} className='cursor-pointer'>Social Media</a>
        </motion.ul>
    </div>
    <div className={`gap-5 ${isOpen ? 'transition ease-out duration-1000 opacity-100 transform translate-y-0' : 'transition ease-in duration-300 opacity-0 transform -translate-y-2 h-0' }`}>
           <ul className='text-white bg-slate-800 py-2 font-Poppins font-bold px-3 md:hidden '>
            <li className='hover:bg-white hover:text-teal-500 cursor-pointer rounded-sm hover:transition ease-in-out duration-300'>Home</li>
            <li className='hover:bg-white hover:text-teal-500 cursor-pointer rounded-sm hover:transition ease-in-out duration-300'>Profil</li>
            <li className='hover:bg-white hover:text-teal-500 cursor-pointer rounded-sm hover:transition ease-in-out duration-300'>Resume</li>
            <li className='hover:bg-white hover:text-teal-500 cursor-pointer rounded-sm hover:transition ease-in-out duration-300'>Social Media</li>
           </ul>
    </div>
    </div>
  )
}

