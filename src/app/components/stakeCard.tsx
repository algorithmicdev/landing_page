"use client"

import { FaCircle } from "react-icons/fa"
import Image from 'next/image'

export default function StakeCard() {
    return (
        <div>
         <div className="px-7 pt-3 rounded-md border border-solid bg-neutral-950 border-neutral-800" style={{width:"32rem"}}>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-white" style={{fontFamily:"Bebas", fontSize:"1.6rem"}}>Earn yield in Bitcoin</div>
            <div className="flex gap-3.5 mt-2">
              <div className="flex flex-col self-start">
                <div style={{display:"flex", flexDirection:"row"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem"}}>
                  Single-sided Bitcoin staking
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem"}}>
                  Earn Borrow APR and Trading fees
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", marginTop:"-1rem"}}>
                  <Image
                   loading="lazy"
                   src="/bulletPoint.svg"
                   className="w-3 aspect-[1.09]"
                   alt=""
                   width={1}
                   height={1}
                   draggable="false"
                  />
                  <div style={{fontSize:"0.8rem", marginLeft:"0.5rem", paddingTop:"1rem"}}>
                  Maintain delta-neutral exposure <br/>to Bitcoin
                  </div>
                </div>
              </div>
            </div>
            <div style={{width:"13rem"}}>
              <a href='https://beta.nlx.trade/#/stake' target='_blank' rel="noreferrer">
              <div className="justify-center items-center mt-3 text-white bg-orange-600 rounded shadow-sm hover:bg-orange-700" 
              style={{fontSize:"0.8rem", paddingInline:"4rem", paddingBlock:"0.2rem", display:"flex", justifyContent:"center"}}>

                Stake Now
              </div>
              </a>
              <div className=" text-xs underline text-opacity-70 hover:text-gray-300" style={{display:"flex", justifyContent:"center", marginBlock:"0.5rem"}}>
              <a href='https://nlx.mintlify.app/liquidity' target='_blank' rel="noreferrer"> How to stake liquidity</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <Image
            loading="lazy"
            src="/coinsImg.svg"
            style={{width:"11rem"}}
            alt=""
            width={1}
            height={1}
            draggable="false"
          />
        </div>
      </div>
    </div>
        </div>
    )
}

{/* <div className="flex px-0.5 " style={{gap:"1.1rem", marginTop:"0.5rem"}}>
        <a style={{width:"16%"}}>
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
       <a style={{width:"16%"}}>
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
       <a style={{width:"15%"}}>
       <Image
         loading="lazy"
         src="/tg1.svg"
         style={{width:"100%"}}
         width={50} 
         height={50}
         alt={''} 
         draggable="false"
       />
       </a>
      </div> */}