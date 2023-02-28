"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
type Props = {}

export default function homes({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Saya adalah seorang Programmer, Guru, dan mekanik elekronik.",
    ],
   
  })
  

  return (
    
      <div className='flex flex-col justify-center items-center h-screen bg-slate-800 text-gray-300'>
      
      <motion.div
      initial={{
        x: 1500,
        opacity: 0,
        scale: 2,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
      
      className='text-center'>
      <h2 className='lg:text-xl'>Hallo nama saya,</h2>
      <h1 className='text-lg font-bold text-teal-500 lg:text-2xl'>M. HELMAN ANSYARI</h1>
      <p className='text-center'>{text}</p>
      </motion.div>

        <motion.div 
        initial={{
          x: -1500,
          opacity: 0,
          scale: 2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}

        className='bg-gradient-to-b from-teal-600 to-slate-900 rounded-full h-[300px] w-[300px] my-5 overflow-hidden' >
          <img className='mt-3' src="5.png" alt="fotoprofil" />
        </motion.div>
      </div>
  )
}