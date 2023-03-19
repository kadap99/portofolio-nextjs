'use client'
import React from 'react'
import Skillbar from './skillbar'
import { motion } from 'framer-motion'

type Props = {}

export default function skill({}: Props) {
  return (
    <div className='pt-10 h-screen bg-slate-800 items-center justify-center text-center p-16 px-10'>
    <motion.div 
    initial={{
      x: -200,
    }}
    transition={{
      duration: 1,
    }}
    whileInView={{
      x: 0,
    }}
    viewport={{once: true}}
    >
        <h3 className='uppercase text-gray-500 tracking-[20px] p-5 text-xl'>Skill</h3>
        
        <div className='space-y-10 mt-9'>
        <h3 className='rounded-full text-teal-800 font-bold'>ELEKTRONIKA</h3>
        <Skillbar width='85%'/>

        <h3 className='rounded-full text-teal-800 font-bold'>KOMPUTER</h3>
        <Skillbar width='90%'/>

        <h3 className='rounded-full text-teal-800 font-bold'>PROGRAMMER</h3>
        <Skillbar width='30%'/>

        <h3 className='rounded-full text-teal-800 font-bold'>BAHASA INGGRIS</h3>
        <Skillbar width='75%'/>

        <h3 className='rounded-full text-teal-800 font-bold'>JARINGAN</h3>
        <Skillbar width='45%'/>
        </div>
    </motion.div>
    </div>
  )
}