"use client"
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function profil({}: Props) {
  return (
    <div className='p-16  text-center h-screen  mx-auto items-center px-10 bg-slate-800 z-20 '>
      <div className='items-center text-center'>
        <h3 className=' uppercase tracking-[20px] text-gray-500 p-5 text-xl'>Profil</h3>
      </div>

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
      className='flex flex-col md:flex-row items-center'>
        
        <img src="profil.jpeg" alt="" className='w-[300px] p-5 rounded-[50px]'/>
        
        <h3 className='text-gray-500 p-3 md:p-48'><span className='text-teal-800 text-3xl'>S</span>aya adalah seseorang yang suka belajar hal baru untuk menambah skill yang saya miliki, pendidikan terakhir saya adalah S1 jurusan pendidikan agama islam. Meskipun kuliah saya tidak sesuai dengan hobi dan skill yang saya miliki tapi saya tetap berusaha untuk menjadikan hobi saya sebagai pekerjaan yang membuat saya senang dan menghasilkan income. <br></br><span className='text-teal-800 text-3xl'>S</span>aya pernah bekerja sebagai driver gojek dan menjadi guru honorer mata pelajaran Pendidikan Agama Islam di Sekolah Dasar selama 3 Tahun.</h3>
      </motion.div>

    </div>
  )
}

