"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { LuSun } from "react-icons/lu";

export default function Header() {
  return (
    <>
 <div className="flex gap-6 justify-between items-center px-7 py-2.5 w-full border-b border-solid bg-neutral-950 border-white border-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <Image
                  loading="lazy"
                  src="/nlx_logo.svg"
                  className="shrink-0 self-stretch my-auto " alt={''} 
                  width={80}     
                  height={20}
      />
      <div className="flex gap-5 justify-between self-stretch my-auto text-sm text-center whitespace-nowrap text-zinc-500"
      style={{marginLeft:"5rem"}}>
        <div style={{marginInline:"1rem"}}>App</div>
        <div style={{marginInline:"1rem"}}>Bridge</div>
        <div style={{marginInline:"1rem"}}>Docs</div>
        <div style={{marginInline:"1rem"}}>Protocol</div>
      </div>
      <div className="flex gap-5 ">
        <div className="justify-center px-7 text-sm  text-orange-600 rounded border border-orange-600 border-solid " style={{fontSize:"small"}}>
          Trade Now
        </div>


          {/* display bg switch */}
          <div className="flex gap-2.5 self-start">
           <div className="justify-center items-center px-1 py-1 text-base text-center whitespace-nowrap rounded-full shadow-sm bg-neutral-900 h-[33px] text-white text-opacity-70 w-[33px]">EN
           </div>
           <div className="flex justify-center items-center px-2 rounded-full shadow-sm bg-neutral-900 ">
           <LuSun />
           </div>
        </div>
      </div>
    </div>
  </>
)
}
