"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Footer() {
  return (
    <>
    <footer style={{position:"absolute",bottom:0, width:"-webkit-fill-available"}}>
    <Image
          loading="lazy"
          src="/bottomLeft.svg"
          className=""
          style={{ position: "absolute", bottom: 0, width: "50%" }} alt={''}   
          width={50} 
          height={50}
          draggable="false"
    />
    <div className="flex relative gap-3 justify-between pl-8 mt-24 w-full border-t border-solid backdrop-blur-[9.199999809265137px] bg-black bg-opacity-40 border-neutral-800 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{paddingBlock:"0.75rem"}}>
      <div className="flex justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="text-white text-opacity-50 flex flex-col">
          <div style={{fontSize:"x-small"}}>Audited by</div>
          <a href='https://halborn.com/' target='_blank' rel="noreferrer" style={{width:"63%", marginBlock:"0.85rem" }}>
          <Image
            loading="lazy"
            src="/halborn_logo.svg"
            style={{width:"100%"}}
            alt={''} 
            width={50} 
            height={50}
            draggable="false"
          />
          </a>
        </div>
        <div className="flex gap-5 justify-between items-end max-md:flex-wrap">
            <div className="flex flex-col self-start">
              <div className="font-medium text-white text-opacity-50" style={{fontSize:"x-small"}}>
                Ecosystem Partners
              </div>
              <div className="flex px-0.5 " style={{gap:"1.1rem"}}>
                <a href='https://coredao.org/' target='_blank' rel="noreferrer" style={{width:"10%", marginBlock:"0.5rem"}}>
                <Image
                  loading="lazy"
                  src="/core_logo.svg"
                  style={{width:"100%"}}
                  width={100} 
                  height={50}
                  alt={''} 
                  draggable="false"

                />
                </a>
                <a href='https://pyth.network/' target='_blank' rel="noreferrer" style={{width:"8%", marginBlock:"0.875rem"}}>
                <Image
                  loading="lazy"
                  src="/pyth_logo.svg"
                  style={{width:"100%"}}
                  width={50} 
                  height={50}
                  alt={''} 
                  draggable="false"
                />
                </a>
                <a href='https://www.colend.xyz/' target='_blank' rel="noreferrer" style={{width:"15%", marginBlock:"0.25rem"}}>
                <Image
                  loading="lazy"
                  src="/colend_logo.svg"
                  style={{width:"100%"}}
                  width={50} 
                  height={50}
                  alt={''} 
                  draggable="false"
                />
                </a>
                <a href='https://glyph.exchange/' target='_blank' rel="noreferrer" style={{width:"11%", marginBlock:"0.7rem"}}>
                <Image
                  loading="lazy"
                  src="/glyph_logo.svg"
                  style={{width:"100%"}}
                  width={50} 
                  height={50}
                  alt={''} 
                  draggable="false"
                />
                </a>
               <Image
                  loading="lazy"
                  src="/many.svg"
                  style={{width:"10%"}}
                  width={50} 
                  height={50}
                  alt={''} 
                  draggable="false"
                />
              </div>
            </div>            
        </div>
      </div>
      <div className="flex px-0.5 " style={{gap:"1.1rem", marginTop:"0.75rem"}}>
        <a style={{width:"20%"}} href='https://twitter.com/nlx_trade' target='_blank' rel="noreferrer">
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
       <a style={{width:"20%"}} href='https://discord.com/invite/nlxtrade' target='_blank' rel="noreferrer">
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
       <a style={{width:"19%"}} href='https://nlx.mintlify.app/introduction' target='_blank' rel="noreferrer">
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
