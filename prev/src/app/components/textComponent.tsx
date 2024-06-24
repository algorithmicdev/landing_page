"use client"

import { FaCircle } from "react-icons/fa"
import Image from 'next/image'

export default function TextComponent() {
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", marginTop:"5rem"}}>
                  {/* Vertical Row */}
                   <div style={{marginLeft:"2rem"}}>
                     <div style={{ display: 'flex', flexDirection:"column", marginTop:"1.1rem" }}>
                      <FaCircle style={{color:"#EA5B27"}} size={5}/>
                      <div style={{ borderLeft: '1px solid #EA5B27', height: '23rem', marginLeft:"0.15rem" }}></div>
                      <FaCircle style={{color:"#EA5B27"}} size={5}/>
                     </div>
                   </div>
                   {/* Middle Text */}
                   <div className="flex flex-col self-start px-5 max-md:max-w-full" style={{width:"82%"}}>
                     <span style={{lineHeight:"6.5rem"}}>
                       <div className="flex gap-3 max-md:flex-wrap" style={{fontFamily:"Bebas", fontSize:"4rem", marginBottom:"-0.7rem"}}>
                         ON-CHAIN
                         <span style={{placeContent:"center"}}>
                         <Image
                           loading="lazy"
                           src="/text_Design.svg"
                           className="shrink-0 my-auto aspect-[1.05] w-[27.5px]"
                           alt=''
                           width={1}
                           height={1}
                           draggable="false"
                         />
                         </span>
                         PERPS
                       </div>
                       <div style={{fontFamily:"Bebas", fontSize:"9.65rem", marginLeft:"-0.15rem"}}>
                       BACKED
                       </div>
                       <span style={{fontFamily:"Bebas", fontSize:"6.9rem", marginLeft:"-0.05rem"}}>
                       BY BITCOIN
                       </span>
                     </span>  
                     <span style={{display:"flex", flexDirection:"row", marginLeft:"-2.5rem", marginTop:"-1.5rem"}}>
                       <FaCircle style={{color:"#EA5B27"}} size={5}/>
                       <hr style={{borderTop:"1px solid #EA5B27", marginTop:"0.15rem", width:"28rem"}}/>
                       <FaCircle style={{color:"#EA5B27"}} size={5}/>
                     </span>
                     <div className="font-medium tracking-widest text-white max-md:mt-10 max-md:max-w-full" style={{fontSize:"1.125rem", marginTop:"1rem"}}>
                       Leverage your Bitcoin on-chain like <br />
                       never before
                     </div>
                   </div>
                </div>
        </>
    )
}