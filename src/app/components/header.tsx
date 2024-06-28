"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { LuSun } from "react-icons/lu";

export default function Header() {
  return (
    <>
 <div className="flex gap-6 justify-between items-center px-7 py-1.5 w-full border-b border-solid bg-neutral-950 border-white border-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <a href='/' target='_blank' rel="noreferrer">
      <Image
                  loading="lazy"
                  src="/nlx_logo.svg"
                  className="shrink-0 self-stretch my-auto " alt={''} 
                  width={90}     
                  height={20}
                  draggable="false"
      />
      </a>
      <div className="flex gap-5 justify-between self-stretch my-auto text-md text-center whitespace-nowrap text-zinc-500"
      style={{marginLeft:"5rem"}}>
        <a href='https://beta.nlx.trade/' target='_blank' rel="noreferrer"><div style={{marginInline:"1rem"}}>App</div></a>
        <a href='https://bridge.coredao.org/bridge' target='_blank' rel="noreferrer"><div style={{marginInline:"1rem"}}>Bridge</div></a>
        <a href='https://nlx.mintlify.app/introduction' target='_blank' rel="noreferrer"><div style={{marginInline:"1rem"}}>Docs</div></a>
        <a href='https://github.com/NLX-Protocol/nlx-synthetics' target='_blank' rel="noreferrer"><div style={{marginInline:"1rem"}}>Protocol</div></a>
      </div>
      <div className="flex gap-5 ">
      <a href='https://beta.nlx.trade/#/trade' target='_blank' rel="noreferrer" style={{marginBlock:"auto"}}>
        <div className="justify-center px-8 py-1 text-md  text-orange-600 rounded border border-orange-600 border-solid hover:bg-zinc-900" style={{fontSize:"small", height:"fit-content"}}>
         Trade Now
        </div>
        </a>


          {/* display bg switch */}
          <div className="flex gap-2.5 ">
           <div className=" px-1 py-1 text-base text-center  rounded-full shadow-sm bg-black h-[33px] text-black text-opacity-70 w-[33px]">EN
           </div>
           <div className="flex justify-center items-center px-2 rounded-full shadow-sm bg-black ">
           <LuSun color='black'/>
           </div>
          </div>
      </div>
    </div>
  </>
)
}
