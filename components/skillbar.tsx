import React from 'react'

export default function Skillbar(props: { width: string }){
return (
    
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-full bg-slate-500 rounded-full md:w-[50%]'>
        <div className='bg-teal-800 text-sm font-bold p-0.5 leading-none rounded-full' style={{width: props.width}}>
            {props.width}
        </div>
      </div>
    </div>
    
  )
}

