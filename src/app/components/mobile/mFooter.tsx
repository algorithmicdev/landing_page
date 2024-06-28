"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function MFooter() {
  return (
    <>
    <footer style={{height:"6rem", width:"-webkit-fill-available", display:"flex", flexDirection:"row", position:"sticky", bottom:"0"}}>
    <div className="flex justify-between w-full border-t border-solid backdrop-blur-[9.199999809265137px] bg-black bg-opacity-40 border-neutral-800 ">
      <div className="flex px-0.5 " style={{gap:"1.1rem", marginTop:"2rem", marginBottom:"1rem", justifyContent:"center", width:"100%"}}>
       <a style={{width:"10%"}} href='https://twitter.com/nlx_trade' target='_blank' rel="noreferrer">
       <Image
         loading="lazy"
         src="/twt1.svg"
         style={{width:"100%"}}
         width={50} 
         height={50}
         alt={''} 
         draggable="false"
       />
       </a>
       <a style={{width:"10%"}} href='https://discord.com/invite/nlxtrade' target='_blank' rel="noreferrer">
        <Image
         loading="lazy"
         src="/discord1.svg"
         style={{width:"100%"}}
         width={50} 
         height={50}
         alt={''} 
         draggable="false"
       />
       </a>
       <a style={{width:"9.5%"}} href='https://nlx.mintlify.app/introduction' target='_blank' rel="noreferrer">
       <Image
         loading="lazy"
         src="/docBook.svg"
         style={{width:"100%"}}
         width={50} 
         height={50}
         alt={''} 
         draggable="false"
       />
       </a>
      </div>
    </div>
    </footer>
  </>
)
}
